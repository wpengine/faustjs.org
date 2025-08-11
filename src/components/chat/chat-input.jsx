import { HiOutlinePaperAirplane, HiOutlineArrowPath } from "react-icons/hi2";

export default function Input({ input, setInput, status }) {
	const isReady = status === "ready";
	const isSubmitted = status === "submitted";

	return (
		<div className="flex w-full items-end justify-between gap-2">
			<input
				id="chat-input"
				type="text"
				wrap="soft"
				value={input}
				onChange={(event) => {
					setInput(event.target.value);
				}}
				autoFocus
				placeholder="Ask about Faust..."
				className="no-scrollbar text-md w-full max-w-full rounded-xl bg-gray-700 p-2 text-wrap text-gray-200 placeholder-gray-400 shadow-lg transition-colors focus:ring-2 focus:ring-teal-500 focus:outline-none"
			/>

			<button
				type="submit"
				className="enabled:bg-hero-gradient ml-auto cursor-pointer rounded-xl bg-gray-700 p-2 text-gray-400 shadow-lg enabled:text-gray-200"
				aria-label="Send message"
				disabled={!input.trim() || !isReady}
			>
				{isSubmitted ? (
					<HiOutlineArrowPath className="b-white mx-auto h-6 w-6 animate-spin text-gray-200" />
				) : (
					<HiOutlinePaperAirplane className="h-6 w-6" />
				)}
			</button>
		</div>
	);
}
