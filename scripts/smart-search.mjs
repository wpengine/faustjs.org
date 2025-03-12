import { hash } from "node:crypto";
import { env, exit } from "node:process";
import { getTextContentFromMd } from "../src/lib/remark-parsing.mjs";
import {
	getAllDocMeta,
	getDocContent,
	getDocUriFromPath,
} from "../src/lib/remote-mdx-files.mjs";

const {
	NEXT_PUBLIC_SEARCH_ENDPOINT: endpoint,
	NEXT_SEARCH_ACCESS_TOKEN: accessToken,
	HEADLESS_METADATA_ENV_BRANCH: branchName,
} = env;

async function main() {
	if (branchName === "main" && (!endpoint || !accessToken)) {
		console.error("Search endpoint and accessToken are required for indexing.");
		exit(1);
	}

	try {
		const pages = await collectPages();

		console.log("Docs Pages collected for indexing:", pages.length);

		if (branchName !== "main") {
			console.log("Skipping indexing in non-production mode.");
			exit(0);
		}

		await deleteOldDocs();
		await sendPagesToEndpoint(pages);
	} catch (error) {
		console.error("Error in smartSearchPlugin:", error);
	}
}

/**
 * Collects all MDX documents in a directory and its subdirectories
 *
 * @typedef {object} Page
 * @property {string} id //The unique identifier of the document.
 * @property {object} data //The data to be indexed.
 * @property {string} data.title //The title of the document.
 * @property {string} data.content //The text content of the document.
 * @property {string} data.path //A relative path to the document on the internet.
 * @property {string} data.content_type // The type of content. Always "mdx_doc".
 * @returns Page[]
 */
async function collectPages() {
	const pages = [];
	const entries = await getAllDocMeta();

	for (const entry of entries) {
		const entryContent = await getDocContent(entry.download_url);

		const parsedContent = await getTextContentFromMd(entryContent);

		const cleanedPath = getDocUriFromPath(entry.path);

		const id = hash("sha-1", `mdx:${cleanedPath}`);

		pages.push({
			id,
			data: {
				title: parsedContent.data.matter.title,
				description: parsedContent.data.matter.description,
				content: parsedContent.value,
				path: cleanedPath,
				content_type: "mdx_doc",
			},
		});
	}

	return pages;
}

async function graphql(body) {
	const response = await fetch(endpoint, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${accessToken}`,
		},
		body: JSON.stringify(body),
	});

	if (!response.ok) {
		throw new Error(`HTTP ${response.status} ${response.statusText}`);
	}

	const result = await response.json();

	if (result.errors) {
		throw new Error(result.errors);
	}

	return result;
}

const queryDocuments = `
query FindIndexedMdxDocs($query: String! $limit: Int! $offset: Int! ) {
	find(query: $query limit: $limit offset: $offset) {
		total
		documents {
			id
		}
	}
}
`;

const deleteMutation = `
mutation DeleteDocument($id: ID!) {
	delete(id: $id) {
		code
		message
		success
	}
}
`;

async function deleteOldDocs() {
	try {
		const existingDocs = [];
		let total;
		let totalCollected = 0;
		let firstRun = true;

		while (totalCollected < total || firstRun) {
			firstRun = false;
			const response = await graphql({
				query: queryDocuments,
				variables: {
					query: 'content_type:"mdx_doc"',
					limit: 10,
					offset: totalCollected,
				},
			});

			total = response.data.find.total;

			totalCollected += response.data.find.documents.length;

			existingDocs.push(...response.data.find.documents);
		}

		const existingIndexedDocuments = new Set(existingDocs.map((doc) => doc.id));

		if (existingIndexedDocuments?.size === 0) {
			console.log("No documents to delete.");
			return;
		}

		const deletedDocsCollector = [];

		for (const doc of existingIndexedDocuments.values()) {
			const variablesForDelete = {
				id: doc,
			};

			deletedDocsCollector.push(
				graphql({
					query: deleteMutation,
					variables: variablesForDelete,
				}),
			);
		}

		const results = await Promise.allSettled(deletedDocsCollector);

		for (const result of results) {
			if (result.status === "rejected") {
				console.error("Error deleting document:", result.reason);
			}
		}

		console.log(`Deleted ${results.length} documents successfully.`);
	} catch (error) {
		console.error("Error during deletion process:", error);
	}
}

const bulkIndexMutation = `
  mutation BulkIndex($input: BulkIndexInput!) {
    bulkIndex(input: $input) {
      code
      documents {
        id
      }
    }
  }
`;

async function sendPagesToEndpoint(pages) {
	if (pages.length === 0) {
		console.warn("No documents found for indexing.");
		return;
	}

	const documents = pages.map((page) => ({
		id: page.id,
		data: page.data,
	}));

	const variables = { input: { documents } };

	try {
		await graphql({ query: bulkIndexMutation, variables });

		console.log(`Indexed ${documents.length} documents successfully.`);
	} catch (error) {
		console.error("Error during bulk indexing:", error);
	}
}

await main();
