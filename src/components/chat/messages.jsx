import { useEffect, useRef } from "react";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { SiGooglegemini } from "react-icons/si";
import ReactMarkdown from "react-markdown";
import { classNames } from "@/utils/strings";

export default function Messages({ messages }) {
	const messagesEndReference = useRef(null);
	useEffect(() => {
		messagesEndReference.current?.scrollIntoView({ behavior: "smooth" });
	}, [messages]);
	return (
		<div
			className="custom-scrollbar max-h-[50dvh] flex-grow flex-col justify-end overflow-y-scroll"
			aria-live="polite"
			role="log"
			style={{ scrollbarWidth: "none" }}
		>
			{messages.map((message) => {
				console.log("Rendering message:", message);
				const isAssistant = message.role === "assistant";
				return (
					<div
						key={message.id}
						className={classNames(
							isAssistant ? "flex-row-reverse bg-teal-900" : "bg-blue-500",
							"slide-in-bottom message-glow my-2 flex border border-gray-900 p-3 shadow-md transition-shadow duration-200 hover:shadow-lg",
						)}
					>
						<div
							className={classNames(
								isAssistant ? "border-l" : "border-r",
								"flex items-center p-2",
							)}
						>
							{isAssistant ? (
								<SiGooglegemini className="h-6 w-6 text-white" />
							) : (
								<HiOutlineUserCircle className="h-6 w-6 text-slate-900" />
							)}
						</div>
						<div className="ml-2 text-white">
							<ReactMarkdown>{message.content}</ReactMarkdown>
						</div>
					</div>
				);
			})}
			<div ref={messagesEndReference} />
		</div>
	);
}
