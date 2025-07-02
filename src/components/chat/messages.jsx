"use client";

// import { Message } from "ai";
import { useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";

export default function Messages({ messages }) {
	const messagesEndReference = useRef(null);
	useEffect(() => {
		messagesEndReference.current?.scrollIntoView({ behavior: "smooth" });
	}, [messages]);
	return (
		<div
			className="flex-grow flex-col justify-end overflow-y-scroll border-1 border-gray-100 p-1"
			style={{ scrollbarWidth: "none" }}
		>
			{messages.map((message, index) => (
				<div
					key={index}
					className={`${
						message.role === "assistant" ? "bg-green-500" : "bg-blue-500"
					} slide-in-bottom message-glow my-2 flex border border-gray-900 bg-blue-500 p-3 shadow-md transition-shadow duration-200 hover:shadow-lg`}
				>
					<div className="ml- flex items-center rounded-tl-lg border-r p-2">
						{message.role === "assistant" ? "🤖" : "🧅"}
					</div>
					<div className="ml-2 text-white">
						<ReactMarkdown>{message.content}</ReactMarkdown>
					</div>
				</div>
			))}
			<div ref={messagesEndReference} />
		</div>
	);
}
