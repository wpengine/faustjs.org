import { useChat } from "ai/react";
import { useEffect } from "react";
import Chat from "@/components/chat/chat";
import "./chat.css";

export default function ChatPage() {
	const { messages, input, handleInputChange, handleSubmit, setMessages } =
		useChat();

	useEffect(() => {
		if (messages.length === 0) {
			setMessages([
				{
					role: "assistant",
					content: "Welcome to the Smart Search chatbot!",
					id: "welcome",
				},
			]);
		}
	}, [messages, setMessages]);

	return (
		<div className="mx-auto flex h-96 max-w-full flex-col justify-between bg-white">
			<div className="relative flex w-full flex-grow overflow-hidden">
				<Chat
					input={input}
					handleInputChange={handleInputChange}
					handleMessageSubmit={handleSubmit}
					messages={messages}
				/>
			</div>
		</div>
	);
}
