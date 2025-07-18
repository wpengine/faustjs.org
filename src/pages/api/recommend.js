import process from "node:process";
import { ReasonPhrases, StatusCodes } from "http-status-codes";
import { normalizeSmartSearchResponse } from "@/lib/smart-search.mjs";

export default async function handler(req, res) {
	const endpoint = process.env.NEXT_PUBLIC_SEARCH_ENDPOINT;
	const accessToken = process.env.NEXT_SEARCH_ACCESS_TOKEN;
	const { docID, count } = req.query;

	if (req.method !== "GET") {
		return res
			.status(StatusCodes.METHOD_NOT_ALLOWED)
			.json({ error: ReasonPhrases.METHOD_NOT_ALLOWED });
	}

	if (!docID) {
		return res
			.status(StatusCodes.BAD_REQUEST)
			.json({ error: "Document ID (docID) is required." });
	}

	const graphqlQuery = `
        query RelatedDocuments($docID: String!, $count: Int = 3) {
					recommendations(count: $count) {
						documents: relatedDocuments(docID: $docID, minScore: 0.7) {
							id: docID
							data: source
							score
						}
					}
			}`;

	try {
		const response = await fetch(endpoint, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${accessToken}`,
			},
			body: JSON.stringify({
				query: graphqlQuery,
				variables: { docID, count },
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

		return res
			.status(StatusCodes.OK)
			.json(
				normalizeSmartSearchResponse(result.data.recommendations.documents),
			);
	} catch (error) {
		console.error("Error fetching search data:", error);
		return res
			.status(StatusCodes.INTERNAL_SERVER_ERROR)
			.json({ error: ReasonPhrases.INTERNAL_SERVER_ERROR });
	}
}
