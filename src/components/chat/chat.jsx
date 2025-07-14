import { HiOutlineArrowPath } from "react-icons/hi2";
import ChatInput from "./chat-input";
import Messages from "./messages";

export default function Chat({
	input,
	handleInputChange,
	handleMessageSubmit,
	status,
	messages,
}) {
	return (
		<div id="chat" className="flex h-full w-full flex-col gap-4">
			<Messages messages={messages} />
			{status === "submitted" && (
				<HiOutlineArrowPath className="mx-auto h-6 w-6 animate-spin text-gray-200" />
			)}
			<form id="chat-form" onSubmit={handleMessageSubmit} className="relative">
				<ChatInput input={input} handleInputChange={handleInputChange} />
			</form>
		</div>
	);
}
