// import { env } from "node:process";
import { createVertex } from "@ai-sdk/google-vertex";
import { streamText } from "ai";
import { StatusCodes, ReasonPhrases } from "http-status-codes";
import { getContext } from "@/lib/smart-search.mjs";

const vertex = createVertex();

export async function POST(req) {
	try {
		const { messages } = await req.json();

		if (!messages || !Array.isArray(messages) || messages.length === 0) {
			return new Response(ReasonPhrases.BAD_REQUEST, {
				status: StatusCodes.BAD_REQUEST,
			});
		}

		const [latestMessage] = messages.slice(-1);
		const previousMessages = messages.slice(-11, -1);

		const promptContext = await getContext(latestMessage.content);

		if (
			!promptContext ||
			!promptContext.data ||
			!promptContext.data.similarity
		) {
			console.error(
				"No context found for the latest message:",
				latestMessage.content,
				"Context response:",
				promptContext,
			);
			return new Response(ReasonPhrases.INTERNAL_SERVER_ERROR, {
				status: StatusCodes.INTERNAL_SERVER_ERROR,
			});
		}

		const messageContext = promptContext.data.similarity.docs.map((doc) => {
			return `
		ID: ${doc.id}
		Title: ${doc.data.post_title}
		Content: ${doc.data.post_content}
		SearchScore: ${doc.score}
		`;
		});

		const prompt = {
			role: "assistant",
			content: `You are a AI assistant that provides information about Faust.js and headless WordPress.
			AI assistant is a brand new, powerful, human-like artificial intelligence.
      The traits of AI include expert knowledge, helpfulness, cleverness, and articulateness.
      AI is a well-behaved and well-mannered individual.
      AI is always friendly, kind, and inspiring, and he is eager to provide vivid and thoughtful responses to the user.
      AI has the sum of all knowledge in their brain, and is able to accurately answer nearly any question about any topic in conversation.
      AI assistant is a big fan of WP Engine Smart Search.
      AI assistant uses WP Engine Smart Search to provide the most accurate and relevant information to the user.
      AI assistant data from WP Engine Smart Search is based on TV Shows.
      START CONTEXT BLOCK
      ${messageContext.join("----------------\n\n")}
      END OF CONTEXT BLOCK

      START OF HISTORY BLOCK
      ${JSON.stringify(previousMessages)}
      END OF HISTORY BLOCK
      AI assistant will take into account any CONTEXT BLOCK that is provided in a conversation.
      AI assistant will take into account any HISTORY BLOCK that is provided in a conversation.
      If the context does not provide the answer to question, the AI assistant will say, "I'm sorry, but I don't know the answer to that question".
      AI assistant will not apologize for previous responses, but instead will indicated new information was gained.
      AI assistant will not invent anything that is not drawn directly from the context.
      AI assistant will answer coding questions.
		`,
		};

		console.log("Prompt context:", prompt);

		const response = await streamText({
			model: vertex.languageModel("gemini-2.0-flash-exp"),
			prompt,
			messages: messages.filter((message) => message.role === "user"),
		});

		console.log("Response from AI:", response);

		return response.toTextStreamResponse();
	} catch (error) {
		console.error("Error in chat API:", error);
		return new Response(ReasonPhrases.INTERNAL_SERVER_ERROR, {
			status: StatusCodes.INTERNAL_SERVER_ERROR,
		});
	}
}
