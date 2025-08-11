import { useChat } from "@ai-sdk/react";
import { lastAssistantMessageIsCompleteWithToolCalls } from "ai";
import { useState } from "react";
import { HiXCircle } from "react-icons/hi2";
import { useChatDialog } from "./state";
import Chat from "@/components/chat/chat";
import "./chat.css";

export default function ChatDialog() {
	const { dialog } = useChatDialog();
	const { messages, sendMessage, status } = useChat({
		onError: (error) => {
			console.error("Error sending message:", error);
		},
		sendAutomaticallyWhen: lastAssistantMessageIsCompleteWithToolCalls,
		messages: [
			{
				role: "assistant",
				parts: [
					{
						type: "text",
						text: "Hey there! I'm an AI driven chat assistant here to help you with Faust.js! I'm trained on the documentation and can help you with coding tasks, learning, and more. What can I assist you with today?",
					},
				],
				id: "welcome-intro",
			},
		],
	});

	const [input, setInput] = useState("");

	return (
		<dialog
			ref={dialog}
			id="chat-dialog"
			role="application"
			className="fixed right-4 bottom-18 left-auto z-20 w-[92dvw] max-w-xl overflow-visible rounded-lg bg-gray-800 p-4 md:right-8 md:bottom-32 md:p-6"
			// eslint-disable-next-line react/no-unknown-property
			closedby="any"
		>
			<button
				formMethod="dialog"
				type="button"
				form="chat-form"
				aria-label="Close chat"
				className="absolute -top-2 -right-2 text-gray-400 hover:text-gray-300"
				onClick={() => {
					dialog.current?.close();
				}}
			>
				<span className="sr-only">Close chat</span>
				<HiXCircle className="h-6 w-6 cursor-pointer text-gray-200 hover:text-red-500" />
			</button>
			<section>
				<Chat
					input={input}
					setInput={setInput}
					sendMessage={sendMessage}
					messages={messages}
					status={status}
				/>
			</section>
		</dialog>
	);
}
