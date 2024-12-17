import { hash } from "node:crypto";
import fs from "node:fs/promises";
import path from "node:path";
import { cwd } from "node:process";
import { htmlToText } from "html-to-text";

let isPluginExecuted = false;

function smartSearchPlugin({ endpoint, accessToken }) {
	return {
		apply: (compiler) => {
			compiler.hooks.done.tapPromise("SmartSearchPlugin", async () => {
				if (isPluginExecuted) {
					return;
				}

				isPluginExecuted = true;

				if (compiler.options.mode !== "production") {
					console.log("Skipping indexing in non-production mode.");
					return;
				}

				try {
					const pages = await collectPages(path.join(cwd(), "src/pages/docs"));

					console.log("Docs Pages collected for indexing:", pages.length);

					await deleteOldDocs({ endpoint, accessToken }, pages);
					await sendPagesToEndpoint({ endpoint, accessToken }, pages);
				} catch (error) {
					console.error("Error in smartSearchPlugin:", error);
				}
			});
		},
	};
}

async function collectPages(directory) {
	const pages = [];
	const entries = await fs.readdir(directory, { withFileTypes: true });

	for (const entry of entries) {
		const entryPath = path.join(directory, entry.name);

		if (entry.isDirectory()) {
			const subPages = await collectPages(entryPath);
			pages.push(...subPages);
		} else if (entry.isFile() && entry.name.endsWith(".mdx")) {
			const content = await fs.readFile(entryPath, "utf8");

			const metadataMatch = content.match(
				/export\s+const\s+metadata\s*=\s*(?<metadata>{[\S\s]*?});/,
			);

			let metadata = {};

			if (metadataMatch?.groups?.metadata) {
				try {
					// eslint-disable-next-line no-eval
					metadata = eval(`(${metadataMatch.groups.metadata})`);
				} catch (error) {
					console.error("Error parsing metadata:", error);
					continue;
				}
			} else {
				console.warn(`No metadata found in ${entryPath}. Skipping.`);
				continue;
			}

			const textContent = htmlToText(content);

			const cleanedPath = cleanPath(entryPath);

			const id = hash("sha-1", `mdx:${cleanedPath}`);

			pages.push({
				id,
				data: {
					title: metadata.title,
					content: textContent,
					path: cleanedPath,
					content_type: "mdx_doc",
				},
			});
		}
	}

	return pages;
}

function cleanPath(filePath) {
	const relativePath = path.relative(cwd(), filePath);
	return (
		"/" +
		relativePath
			.replace(/^src\/pages\//, "")
			.replace(/^pages\//, "")
			.replace(/\/index\.mdx$/, "")
			.replace(/\.mdx$/, "")
	);
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

async function deleteOldDocs({ endpoint, accessToken }, pages) {
	const currentMdxDocuments = new Set(pages.map((page) => page.id));

	const variablesForQuery = {
		query: 'content_type:"mdx_doc"',
	};

	try {
		const response = await fetch(endpoint, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${accessToken}`,
			},
			body: JSON.stringify({
				query: queryDocuments,
				variables: variablesForQuery,
			}),
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
				const deleteResponse = await fetch(endpoint, {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${accessToken}`,
					},
					body: JSON.stringify({
						query: deleteMutation,
						variables: variablesForDelete,
					}),
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

async function sendPagesToEndpoint({ endpoint, accessToken }, pages) {
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
		const response = await fetch(endpoint, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${accessToken}`,
			},
			body: JSON.stringify({ query: bulkIndexQuery, variables }),
		});

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

export default smartSearchPlugin;
