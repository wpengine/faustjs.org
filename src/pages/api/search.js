import process from "node:process";
import { ReasonPhrases, StatusCodes } from "http-status-codes";
import { normalizeSmartSearchResponse } from "@/utils/content";

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

		console.log("Search result:", result);
		return res
			.status(StatusCodes.OK)
			.json(normalizeSmartSearchResponse(result.data.find.documents));
	} catch (error) {
		console.error("Error fetching search data:", error);
		return res
			.status(StatusCodes.Inter)
			.json({ error: ReasonPhrases.INTERNAL_SERVER_ERROR });
	}
}
