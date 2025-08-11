import { env } from "node:process";
import { createVertex } from "@ai-sdk/google-vertex";
import { streamText, convertToModelMessages } from "ai";
import { StatusCodes, ReasonPhrases } from "http-status-codes";
import { smartSearchTool } from "@/lib/rag.mjs";

// Ensure all required environment variables are set
if (!env.GOOGLE_VERTEX_PROJECT) {
	throw new Error("GOOGLE_VERTEX_PROJECT is not set");
}

if (!env.GOOGLE_VERTEX_LOCATION) {
	throw new Error("GOOGLE_VERTEX_LOCATION is not set");
}

if (!env.GOOGLE_VERTEX_CLIENT_EMAIL) {
	throw new Error("GOOGLE_VERTEX_CLIENT_EMAIL is not set");
}

if (!env.GOOGLE_VERTEX_PRIVATE_KEY) {
	throw new Error("GOOGLE_VERTEX_PRIVATE_KEY is not set");
}

if (!env.GOOGLE_VERTEX_PRIVATE_KEY.includes("-----BEGIN PRIVATE KEY-----")) {
	throw new Error("GOOGLE_VERTEX_PRIVATE_KEY is not formatted correctly");
}

const vertex = createVertex({
	project: env.GOOGLE_VERTEX_PROJECT,
	location: env.GOOGLE_VERTEX_LOCATION,
	googleAuthOptions: {
		credentials: {
			client_email: env.GOOGLE_VERTEX_CLIENT_EMAIL,
			private_key: env.GOOGLE_VERTEX_PRIVATE_KEY.replaceAll(
				String.raw`\n`,
				"\n",
			), // Ensure newlines are correctly formatted
		},
	},
});

const smartSearchPrompt = `
    - You can use the 'smartSearchTool' to find information relating to Faust.
    - WP Engine Smart Search is a powerful tool for finding information about Faust.
  	- After the 'smartSearchTool' provides results (even if it's an error or no information found)
  	- You MUST then formulate a conversational response to the user based on those results but also use the tool if the users query is deemed plausible.
      - If search results are found, summarize them for the user.
      - If no information is found or an error occurs, inform the user clearly.
		- IMPORTANT: Don't prefix root-relative links in post_url so client-side routing works. If you find links other places that are at the "faustjs.org" domain, you can make them root-relative.
`;

const systemPromptContent = `
    - You are a friendly and helpful AI assistant that provides Developers help with their coding tasks and learning, as relevant to Faust.js, WPGraphQL, and headless WordPress.
    - Format your responses using Github Flavored Markdown.
    - Make sure to format links as [link text](path).
		- Make sure to link out to the source of the information you provide.
		- Prefer new information over old information.
    - Do not invent information. Stick to the data provided by the tool.
`;

export async function POST(req) {
	try {
		const { messages } = await req.json();

		if (!messages || !Array.isArray(messages) || messages.length === 0) {
			return new Response(ReasonPhrases.BAD_REQUEST, {
				status: StatusCodes.BAD_REQUEST,
			});
		}

		const response = await streamText({
			model: vertex("gemini-2.5-flash"),
			system: [systemPromptContent, smartSearchPrompt].join("\n"),
			messages: convertToModelMessages(messages),
			tools: {
				smartSearchTool,
			},
			onError: (error) => {
				console.error("Error during streaming:", error);
				return new Response(ReasonPhrases.INTERNAL_SERVER_ERROR, {
					status: StatusCodes.INTERNAL_SERVER_ERROR,
				});
			},
			onToolCall: async (toolCall) => {
				console.info("Tool call initiated:", toolCall);
			},
			onStepFinish: async (result) => {
				if (result.usage) {
					console.info(
						`[Token Usage] Prompt tokens: ${result.usage.inputTokens}, Completion tokens: ${result.usage.outputTokens}, Total tokens: ${result.usage.totalTokens}`,
					);
				}
			},
			maxSteps: 5,
		});

		return response.toUIMessageStreamResponse();
	} catch (error) {
		console.error("Error in chat API:", error);
		return new Response(ReasonPhrases.INTERNAL_SERVER_ERROR, {
			status: StatusCodes.INTERNAL_SERVER_ERROR,
		});
	}
}
