import { useChat } from "ai/react";
import { useEffect } from "react";
import { HiXCircle } from "react-icons/hi2";
import { useChatDialog } from "./state";
import Chat from "@/components/chat/chat";
import "./chat.css";

export default function ChatDialog() {
	const { dialog } = useChatDialog();
	const {
		messages,
		input,
		handleInputChange,
		handleSubmit,
		setMessages,
		status,
	} = useChat();

	useEffect(() => {
		if (messages.length === 0) {
			setMessages([
				{
					role: "assistant",
					content:
						"I'm an AI driven chat assistant here to help you with Faust.js! I'm trained on the documentation and can help you with coding tasks, learning, and more. What can I assist you with today?",
					id: "welcome-intro",
				},
			]);
		}
	}, [messages, setMessages]);

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
				// eslint-disable-next-line react/no-unknown-property
				formmethod="dialog"
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
					handleInputChange={handleInputChange}
					handleMessageSubmit={handleSubmit}
					messages={messages}
					status={status}
				/>
			</section>
		</dialog>
	);
}
