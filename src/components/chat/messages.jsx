import { useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";
import { classNames } from "@/utils/strings";

export default function Messages({ messages, className }) {
	const messagesEndReference = useRef(null);
	useEffect(() => {
		messagesEndReference.current?.scrollIntoView({ behavior: "smooth" });
	}, [messages]);
	return (
		<div
			className={classNames(
				"custom-scrollbar flex max-h-[calc(92dvh-12em)] flex-grow flex-col gap-4 overflow-y-scroll md:max-h-[calc(80dvh-12em)]",
				className,
			)}
			aria-live="polite"
			role="log"
		>
			{messages.map((message) => {
				console.log("Rendering message:", message);
				const isAssistant = message.role === "assistant";
				return (
					<div
						key={message.id}
						className={classNames(
							isAssistant
								? "rounded-bl-sm bg-purple-900"
								: "self-end rounded-br-sm bg-blue-900",
							"prose prose-invert slide-in-bottom message-glow w-fit max-w-[90%] rounded-xl p-2 shadow-md transition-shadow duration-200 first:mt-0 last:mb-0 hover:shadow-lg",
						)}
					>
						<ReactMarkdown>{message.content}</ReactMarkdown>
					</div>
				);
			})}
			<div ref={messagesEndReference} />
		</div>
	);
}
