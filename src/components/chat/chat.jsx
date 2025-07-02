// import { Message } from "ai/react";
import Messages from "./Messages";

// interface Chat {
//   input: string;
//   handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
//   handleMessageSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
//   messages: Message[];
// }

export default function Chat({
	input,
	handleInputChange,
	handleMessageSubmit,
	messages,
}) {
	return (
		<div id="chat" className="mx-2 flex w-full flex-col">
			<Messages messages={messages} />
			<form
				onSubmit={handleMessageSubmit}
				className="relative mt-5 mb-5 ml-1 rounded-lg bg-gray-500"
			>
				<input
					type="text"
					className="input-glow focus:shadow-outline w-full appearance-none rounded border border-gray-100 bg-gray-100 px-3 py-2 pr-10 pl-3 leading-tight text-gray-700 transition-shadow duration-200 focus:outline-none"
					value={input}
					onChange={handleInputChange}
				/>

				<span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400">
					Press ⮐ to send
				</span>
			</form>
		</div>
	);
}
