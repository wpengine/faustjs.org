import fs from "node:fs/promises";
import path from "node:path";
import { cwd } from "node:process";
import { htmlToText } from "html-to-text";

function smartSearchPlugin({ endpoint, accessToken }) {
	return {
		apply: (compiler) => {
			compiler.hooks.done.tapPromise("SmartSearchPlugin", async () => {
				try {
					const pages = await collectPages(path.join(cwd(), "src/pages/docs"));

					pages.push({
						id: "test-document",
						data: {
							title: "Test Document",
							content: "This is a test document for indexing.",
							path: "/test-path",
						},
					});

					console.log("Docs Pages collected for indexing:", pages.length);

					await sendPagesToEndpoint(pages, endpoint, accessToken);
				} catch (error) {
					console.error("Error sending pages:", error);
				}
			});
		},
	};
}

async function collectPages(directory) {
	const pages = [];
	const files = await fs.readdir(directory);

	for (const file of files) {
		const filePath = path.join(directory, file);
		const stat = await fs.stat(filePath);

		if (stat.isDirectory()) {
			const subPages = await collectPages(filePath);
			pages.push(...subPages);
		} else if (file.endsWith(".mdx")) {
			const content = await fs.readFile(filePath, "utf8");

			// Safely extract metadata using regex
			const metadataMatch = content.match(
				/export const metadata = (?<metadata>{[\S\s]+?});/,
			);
			let metadata = {};

			if (metadataMatch) {
				try {
					// eslint-disable-next-line no-eval
					metadata = eval(`(${metadataMatch.groups.metadata})`); // Parse the metadata block
				} catch (error) {
					console.error("Error parsing metadata:", error);
				}
			}

			const textContent = htmlToText(content);
			const id = filePath
				.replace(cwd(), "")
				.replaceAll("/", "-")
				.replace(".mdx", "");

			pages.push({
				id,
				data: {
					title: metadata.title || undefined, // No fallback to "Untitled Document"
					content: textContent,
					path: filePath.replace(cwd(), ""),
				},
			});
		}
	}

	return pages;
}

const query = `
  mutation CreateIndexDocument($input: DocumentInput!) {
    index(input: $input) {
      success
      code
      message
      document {
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

	for (const page of pages) {
		const documentId = `mdx:${page.id}`;
		const variables = {
			input: {
				id: documentId,
				data: {
					content: page.data.content,
					path: page.data.path,
					title: page.data.title || undefined, // No fallback to "Untitled Document"
				},
			},
		};

		try {
			const response = await fetch(endpoint, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${accessToken}`,
				},
				body: JSON.stringify({ query, variables }),
			});

			const result = await response.json();
			if (result.errors) {
				console.error("GraphQL indexing error:", result.errors);
			}
		} catch (error) {
			console.error(
				"Error indexing document:",
				page.data.title || "No title",
				error,
			);
		}
	}
}

export default smartSearchPlugin;
