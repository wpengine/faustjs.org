import { tool } from "ai";
import { z } from "zod";
import { getContext } from "./smart-search.mjs";
import { normalizeSmartSearchResponse } from "@/lib/smart-search.mjs";

export const smartSearchTool = tool({
	description:
		"Search for information about Faust using WP Engine Smart Search. Use this to answer questions about Faust, its features, capabilities, and more when the information is not already known.",
	inputSchema: z.object({
		query: z
			.string()
			.describe(
				"The search query to find relevant Faust information based on the user's question.",
			),
	}),
	execute: async ({ query }) => {
		console.info(`[Tool Execution] Searching with query: "${query}"`);
		try {
			const context = await getContext(query);

			if (context.errors && context.errors.length > 0) {
				console.error(
					"[Tool Execution] Error fetching context:",
					context.errors,
				);
				// Return a structured error message that the LLM can understand
				return {
					error: `Error fetching context: ${context.errors[0].message}`,
				};
			}

			if (context?.data?.similarity?.docs?.length === 0) {
				console.warn("[Tool Execution] No documents found for query:", query);
				return {
					searchResults: "No relevant information found for your query.",
				};
			}

			const formattedResults = normalizeSmartSearchResponse(
				context.data.similarity.docs,
			);

			return { searchResults: formattedResults }; // Return the formatted string
		} catch (error) {
			console.error("[Tool Execution] Exception:", error);
			return { error: `An error occurred while searching: ${error.message}` };
		}
	},
});
