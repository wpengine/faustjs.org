import { useEffect, useRef } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import ChatLink from "./chat-link";
import { getMDXComponents } from "@/components/mdx-components";
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
				const isAssistant = message.role === "assistant";
				const isLoading = message.content === "";
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
						{isLoading ? (
							<div className="flex items-center justify-center gap-1">
								<div className="animate-think h-2 w-2 rounded-full bg-gray-200 [animation-delay:-1s]" />
								<div className="animate-think h-2 w-2 rounded-full bg-gray-200 [animation-delay:-.5s]" />
								<div className="animate-think h-2 w-2 rounded-full bg-gray-200" />
							</div>
						) : (
							<Markdown
								remarkPlugins={[remarkGfm]}
								components={{
									...getMDXComponents(),
									a: ChatLink,
								}}
							>
								{message.content}
							</Markdown>
						)}
					</div>
				);
			})}
			<div ref={messagesEndReference} />
		</div>
	);
}
