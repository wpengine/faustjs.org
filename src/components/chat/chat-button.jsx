import { useEffect, useState } from "react";
import {
	HiOutlineChatBubbleLeftRight,
	HiOutlineXCircle,
} from "react-icons/hi2";
import { useChatDialog } from "./state";

export default function ChatButton() {
	const { dialog } = useChatDialog();
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		const dialogElement = dialog.current;

		const handleDialogToggle = () => {
			setIsOpen(!isOpen);
		};

		dialogElement?.addEventListener("toggle", handleDialogToggle);

		return () => {
			dialogElement?.removeEventListener("toggle", handleDialogToggle);
		};
	}, [dialog, isOpen, setIsOpen]);

	return (
		<button
			id="chat-button"
			type="button"
			className="fixed right-4 bottom-4 z-50 flex h-12 w-12 animate-pulse cursor-pointer items-center justify-center rounded-full bg-blue-800 text-white shadow-lg transition-transform hover:scale-105 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 md:right-8 md:bottom-12"
			aria-label={isOpen ? "Open chat" : "Close chat"}
			onClick={() => {
				return isOpen ? dialog.current?.close() : dialog.current?.show();
			}}
		>
			<span className="sr-only">{isOpen ? "Open chat" : "Close chat"}</span>
			{isOpen ? (
				<HiOutlineXCircle className="h-6 w-6" />
			) : (
				<HiOutlineChatBubbleLeftRight className="h-6 w-6" />
			)}
		</button>
	);
}
