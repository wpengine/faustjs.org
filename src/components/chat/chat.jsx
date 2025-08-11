import ChatInput from "./chat-input";
import Messages from "./messages";
import { sendChatMessageEvent } from "@/lib/analytics.mjs";

export default function Chat({
	input,
	setInput,
	sendMessage,
	status,
	messages,
}) {
	return (
		<div id="chat" className="flex h-full w-full flex-col gap-4">
			<Messages messages={messages} className="-mr-2 pr-4 pb-12 md:-mr-4" />
			<form
				id="chat-form"
				onSubmit={(event) => {
					event.preventDefault();

					sendChatMessageEvent({
						message: input,
					});

					sendMessage({ text: input });

					setInput("");
				}}
				className="absolute bottom-0 left-0 w-[calc(100%-theme(spacing.[1.5]))] bg-gradient-to-b from-transparent via-gray-800 to-gray-800 p-4 md:p-6"
			>
				<ChatInput input={input} setInput={setInput} status={status} />
			</form>
		</div>
	);
}
