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
	INDEX_SMART_SEARCH: indexSmartSearch,
} = env;

if (indexSmartSearch === "true" && (!endpoint || !accessToken)) {
	console.error("Search endpoint and accessToken are required for indexing.");
	exit(1);
}

try {
	const pages = await collectPages();

	console.log("Docs Pages collected for indexing:", pages.length);

	if (indexSmartSearch !== "true") {
		console.log("Skipping indexing in non-production mode.");
		exit(0);
	}

	await deleteOldDocs(pages);
	await sendPagesToEndpoint(pages);
} catch (error) {
	console.error("Error in smartSearchPlugin:", error);
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

	console.log("entries", entries, entries.length);

	for (const entry of entries) {
		const entryContent = await getDocContent(entry.download_url);

		const parsedContent = await getTextContentFromMd(entryContent);

		const cleanedPath = getDocUriFromPath(entry.path);

		// const textContent = htmlToText(content);

		// const cleanedPath = cleanPath(entryPath);

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

const queryDocuments = `
query FindIndexedMdxDocs($query: String!) {
	find(query: $query) {
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

async function deleteOldDocs(pages) {
	const currentMdxDocuments = new Set(pages.map((page) => page.id));

	const variablesForQuery = {
		query: 'content_type:"mdx_doc"',
	};

	try {
		const response = await graphql({
			query: queryDocuments,
			variables: variablesForQuery,
		});

		const result = await response.json();

		if (result.errors) {
			console.error("Error fetching existing documents:", result.errors);
			return;
		}

		const existingIndexedDocuments = new Set(
			result.data.find.documents.map((doc) => doc.id),
		);

		const documentsToDelete =
			existingIndexedDocuments.difference(currentMdxDocuments);

		if (documentsToDelete?.size === 0) {
			console.log("No documents to delete.");
			return;
		}

		for (const doc of documentsToDelete.values()) {
			const variablesForDelete = {
				id: doc,
			};

			try {
				const deleteResponse = await graphql({
					query: deleteMutation,
					variables: variablesForDelete,
				});

				const deleteResult = await deleteResponse.json();

				if (deleteResult.errors) {
					console.error(
						`Error deleting document ID ${doc}:`,
						deleteResult.errors,
					);
				} else {
					console.log(`Deleted document ID ${doc}:`, deleteResult.data.delete);
				}
			} catch (error) {
				console.error(`Network error deleting document ID ${doc.id}:`, error);
			}
		}
	} catch (error) {
		console.error("Error during deletion process:", error);
	}
}

const bulkIndexQuery = `
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
		const response = await graphql({ query: bulkIndexQuery, variables });

		if (!response.ok) {
			console.error(
				`Error during bulk indexing: ${response.status} ${response.statusText}`,
			);
			return;
		}

		const result = await response.json();

		if (result.errors) {
			console.error("GraphQL bulk indexing error:", result.errors);
		} else {
			console.log(`Indexed ${documents.length} documents successfully.`);
		}
	} catch (error) {
		console.error("Error during bulk indexing:", error);
	}
}

async function graphql(body) {
	return fetch(endpoint, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${accessToken}`,
		},
		body: JSON.stringify(body),
	});
}
