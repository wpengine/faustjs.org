import process from "node:process";

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
			console.error("Elasticsearch errors:", result.errors);
			return res.status(500).json({ errors: result.errors });
		}

		const formattedResults = result.data.find.documents.map((content) => {
			const contentType = content.data.post_type ?? "doc";

			if (contentType === "doc") {
				return {
					id: content.id,
					title: content.data.title || "Untitled",
					path: content.data.path || "#", // TODO - make this a relative path, like /docs/slug
					type: contentType,
				};
			}

			return {
				id: content.id,
				title: content.data.post_title || "Untitled",
				path: content.data.path || "#", // TODO - make this a relative path, like /blog/slug for a blog post or /slug for a page
				type: contentType,
			};
		});

		return res.status(200).json({ results: formattedResults });
	} catch (error) {
		console.error("Error fetching MDX data:", error);
		return res.status(500).json({ error: error.message });
	}
}
