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
		<div id="chat" className="flex h-full w-full flex-col">
			<Messages messages={messages} />
			{status === "submitted" && (
				<HiOutlineArrowPath className="mx-auto h-5 w-5 animate-spin" />
			)}
			<form
				id="chat-form"
				onSubmit={handleMessageSubmit}
				className="relative mt-5 mb-5 ml-1 rounded-lg"
			>
				<ChatInput input={input} handleInputChange={handleInputChange} />
			</form>
		</div>
	);
}
