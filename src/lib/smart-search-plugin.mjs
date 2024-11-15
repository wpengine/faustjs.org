// src/lib/smart-search-plugin.mjs

import fs from "node:fs/promises";
import path from "node:path";
import { cwd } from "node:process";
import { htmlToText } from "html-to-text";

function smartSearchPlugin({ endpoint, accessToken }) {
	let isPluginExecuted = false;

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

					await deleteExistingDocs(endpoint, accessToken);
					await sendPagesToEndpoint(pages, endpoint, accessToken);
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
				/export\s+const\s+metadata\s*=\s*({[\S\s]*?});/,
			);
			let metadata = {};

			if (metadataMatch) {
				try {
					metadata = eval(`(${metadataMatch[1]})`);
				} catch (error) {
					console.error("Error parsing metadata:", error);
					continue;
				}
			} else {
				console.warn(`No metadata found in ${entryPath}. Skipping.`);
				continue;
			}

			if (!metadata.title) {
				console.warn(`No title in metadata of ${entryPath}. Skipping.`);
				continue;
			}

			const textContent = htmlToText(content);

			const cleanedPath = cleanPath(entryPath);

			const id = `mdx:${cleanedPath}`;

			console.log(`Indexing document with ID: ${id}, path: ${cleanedPath}`);

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

async function deleteExistingDocs(endpoint, accessToken) {
	const variables = {
		filter: {
			content_type: "mdx_doc",
		},
	};

	const deleteQuery = `
    mutation DeleteDocs($filter: DocumentFilterInput) {
      deleteMany(filter: $filter) {
        code
        message
        success
      }
    }
  `;

	try {
		const response = await fetch(endpoint, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${accessToken}`,
			},
			body: JSON.stringify({ query: deleteQuery, variables }),
		});

		const result = await response.json();
		if (result.errors) {
			console.error("GraphQL deletion error:", result.errors);
		} else {
			console.log("Existing MDX documents deleted:", result.data.deleteMany);
		}
	} catch (error) {
		console.error("Error deleting existing documents:", error);
	}
}

const bulkIndexQuery = `
  mutation BulkIndex($documents: [DocumentInput!]!) {
    bulkIndex(input: { documents: $documents }) {
      code
      documents {
        id
        data
      }
    }
  }
`;

async function sendPagesToEndpoint(pages, endpoint, accessToken) {
	if (pages.length === 0) {
		console.warn("No documents found for indexing.");
		return;
	}

	const documents = pages.map((page) => ({
		id: page.id,
		data: page.data,
	}));

	const variables = { documents };

	try {
		const response = await fetch(endpoint, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${accessToken}`,
			},
			body: JSON.stringify({ query: bulkIndexQuery, variables }),
		});

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
