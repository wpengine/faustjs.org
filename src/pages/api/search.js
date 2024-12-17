import process from "node:process";
import { ReasonPhrases, StatusCodes } from "http-status-codes";

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

	if (req.method !== "GET") {
		return res
			.status(StatusCodes.METHOD_NOT_ALLOWED)
			.json({ error: ReasonPhrases.METHOD_NOT_ALLOWED });
	}

	if (!query) {
		return res
			.status(StatusCodes.BAD_REQUEST)
			.json({ error: "Search query is required." });
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

		if (!response.ok) {
			return res
				.status(StatusCodes.SERVICE_UNAVAILABLE)
				.json({ error: ReasonPhrases.SERVICE_UNAVAILABLE });
		}

		const result = await response.json();

		if (result.errors) {
			return res
				.status(StatusCodes.INTERNAL_SERVER_ERROR)
				.json({ errors: result.errors });
		}

		const seenIds = new Set();
		const formattedResults = [];

		for (const content of result.data.find.documents) {
			const contentType =
				content.data.content_type || content.data.post_type || "mdx_doc";

			let item = {};

			if (contentType === "mdx_doc" && content.data.title) {
				const path = content.data.path ? cleanPath(content.data.path) : "/";
				item = {
					id: content.id,
					title: content.data.title,
					path,
					type: "mdx_doc",
				};
			}

			if (
				(contentType === "wp_post" || contentType === "post") &&
				content.data.post_title &&
				content.data.post_name
			) {
				item = {
					id: content.id,
					title: content.data.post_title,
					path: `/blog/${content.data.post_name}`,
					type: "post",
				};
			}

			if (seenIds.has(item.id)) {
				continue;
			}

			seenIds.add(item.id);
			formattedResults.push(item);
		}

		return res.status(StatusCodes.OK).json(formattedResults);
	} catch (error) {
		console.error("Error fetching search data:", error);
		return res
			.status(StatusCodes.Inter)
			.json({ error: ReasonPhrases.INTERNAL_SERVER_ERROR });
	}
}
