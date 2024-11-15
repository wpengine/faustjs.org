// src/pages/api/search.js

import process from "node:process";

// Function to clean up the path
function cleanPath(filePath) {
	return (
		filePath
			.replace(/^\/?src\/pages/, "")
			.replace(/^\/?pages/, "")
			.replace(/\/index\.mdx$/, "")
			.replace(/\.mdx$/, "") || "/"
	);
}

export default async function handler(req, res) {
	const endpoint = process.env.NEXT_PUBLIC_SEARCH_ENDPOINT;
	const accessToken = process.env.NEXT_SEARCH_ACCESS_TOKEN;
	const { query } = req.query;

	if (!query) {
		return res.status(400).json({ error: "Search query is required." });
	}

	const graphqlQuery = `
    query FindDocuments($query: String!) {
      find(query: $query) {
        total
        documents {
          id
          data
        }
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
			body: JSON.stringify({
				query: graphqlQuery,
				variables: { query },
			}),
		});

		const result = await response.json();

		if (result.errors) {
			console.error("Search errors:", result.errors);
			return res.status(500).json({ errors: result.errors });
		}

		const formattedResults = result.data.find.documents
			.map((content) => {
				const contentType = content.data.content_type || content.data.post_type;
				let item; // Initialize the variable to hold the result

				if (contentType === "mdx_doc" && content.data.title) {
					// MDX Document
					const path = content.data.path ? cleanPath(content.data.path) : "/";

					item = {
						id: content.id,
						title: content.data.title,
						path,
						type: "mdx_doc",
					};
				} else if (
					(contentType === "wp_post" || contentType === "post") &&
					content.data.post_title &&
					content.data.post_name
				) {
					// WordPress Post
					item = {
						id: content.id,
						title: content.data.post_title,
						path: `/blog/${content.data.post_name}`,
						type: "post",
					};
				} else {
					// If none of the conditions match, set item to undefined
					item = undefined;
				}

				return item; // Always return a value
			})
			.filter((item) => item !== undefined); // Filter out undefined values

		// Remove duplicates based on ID
		const uniqueResults = [...new Map(formattedResults.map((item) => [item.id, item])).values()];

		return res.status(200).json(uniqueResults);
	} catch (error) {
		console.error("Error fetching search data:", error);
		return res.status(500).json({ error: error.message });
	}
}
