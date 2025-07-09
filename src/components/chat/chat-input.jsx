import { HiOutlinePaperAirplane } from "react-icons/hi2";

export default function Input({ input, handleInputChange }) {
	return (
		<div className="mx-auto w-full max-w-2xl rounded-xl bg-gray-800 p-4 shadow-lg">
			<input
				type="text"
				value={input}
				onChange={handleInputChange}
				autoFocus
				placeholder="Ask Smart Search about Faust..."
				className="text-md mb-3 w-full bg-transparent text-gray-200 placeholder-gray-500 focus:outline-none"
			/>

			<div className="flex">
				<button
					type="submit"
					className="ml-auto rounded-md p-1 transition-colors hover:bg-gray-700"
					aria-label="Send message"
					disabled={!input.trim()}
				>
					<HiOutlinePaperAirplane className="h-5 w-5" />
				</button>
			</div>
		</div>
	);
}
