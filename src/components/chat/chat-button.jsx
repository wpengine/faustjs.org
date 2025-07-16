import { useEffect, useState } from "react";
import {
	HiOutlineChatBubbleLeftRight,
	HiOutlineXCircle,
} from "react-icons/hi2";
import { useChatDialog } from "./state";
import { classNames } from "@/utils/strings";

export default function ChatButton() {
	const { dialog } = useChatDialog();
	const [isOpen, setIsOpen] = useState(false);
	const [wasEverOpen, setWasEverOpen] = useState(false);

	useEffect(() => {
		const dialogElement = dialog.current;

		const handleDialogToggle = () => {
			setIsOpen(!isOpen);
			setWasEverOpen(true);
		};

		dialogElement?.addEventListener("toggle", handleDialogToggle);

		return () => {
			dialogElement?.removeEventListener("toggle", handleDialogToggle);
		};
	}, [dialog, isOpen, setIsOpen]);

	return (
		<div className="fixed right-6 bottom-6 z-50 overflow-visible">
			<div
				id="ping"
				aria-hidden="true"
				className={classNames(
					{ "motion-safe:animate-ping": !isOpen && !wasEverOpen },
					"pointer-events-none absolute inset-0 -z-10 h-full w-full rounded-full bg-gray-200",
				)}
			/>
			<button
				id="chat-button"
				type="button"
				className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-blue-800 text-white shadow-xl transition-transform hover:scale-105 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 md:right-8 md:bottom-12"
				aria-label={isOpen ? "Close chat" : "Open chat"}
				onClick={() => {
					return isOpen ? dialog.current?.close() : dialog.current?.show();
				}}
			>
				<span className="sr-only">{isOpen ? "Close chat" : "Open chat"}</span>
				{isOpen ? (
					<HiOutlineXCircle className="h-6 w-6" />
				) : (
					<HiOutlineChatBubbleLeftRight className="h-6 w-6" />
				)}
			</button>
		</div>
	);
}
