import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useSearch } from "./state";
import { isBrowser } from "@/utils/booleans";

export default function Search() {
	const { dialog } = useSearch();

	// Use `⌘` for Mac and `Ctrl` for other platforms
	const shortcut =
		!isBrowser || navigator.platform === "MacIntel" ? "⌘" : "Ctrl";
	return (
		<button
			className="inline-flex items-center rounded-md bg-gray-800 px-2 py-1.5 text-sm font-medium text-gray-400 hover:bg-gray-700"
			type="button"
			aria-label="Search (shortcut: {shortcut}K)"
			onClick={() => dialog.current?.showModal()}
		>
			<span className="sr-only md:hidden">Open search</span>
			<MagnifyingGlassIcon className="h-6 w-6 text-gray-400 md:hidden" />
			<span className="hidden md:inline">
				<span className="pl-3">Search docs...</span>
				<kbd className="ml-8 rounded-sm bg-gray-700 px-2 py-1 font-sans text-gray-400">
					{shortcut}K
				</kbd>
			</span>
		</button>
	);
}
