import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import debounce from "lodash.debounce";
import { useRouter } from "next/router";
import { useState, useEffect, useRef, useCallback } from "react";
import Link from "@/components/link";

export default function SearchBar({ setIsSearchOpen }) {
	const [items, setItems] = useState([]);
	const [inputValue, setInputValue] = useState("");
	const [isModalOpen, setIsModalOpen] = useState(false);
	const dialogReference = useRef(null);
	const router = useRouter();

	const openModal = useCallback(() => {
		setIsModalOpen(true);
		setInputValue("");
		setItems([]);
	}, []);

	const closeModal = useCallback(() => {
		setIsModalOpen(false);
		setIsSearchOpen(false);
	}, [setIsSearchOpen]);

	const handleKeyDown = useCallback(
		(event) => {
			if (event.metaKey && event.key === "k") {
				event.preventDefault();
				openModal();
			}

			if (event.key === "Escape") {
				closeModal();
			}
		},
		[openModal, closeModal],
	);

	// useEffect(() => {
	// 	document.addEventListener("keydown", handleKeyDown);
	// 	return () => document.removeEventListener("keydown", handleKeyDown);
	// }, [handleKeyDown]);

	// const handleOutsideClick = useCallback(
	// 	(event) => {
	// 		const isClickOutsideOfModal = event.target === dialogReference.current;
	// 		if (isClickOutsideOfModal) {
	// 			closeModal();
	// 			setInputValue("");
	// 			setItems([]);
	// 		}
	// 	},
	// 	[closeModal],
	// );

	const debouncedFetchItems = useRef(
		debounce(async (value) => {
			if (!value) {
				setItems([]);
				return;
			}

			try {
				const response = await fetch(
					`/api/search?query=${encodeURIComponent(value)}`,
				);

				if (!response.ok) {
					console.error(
						`Search API error: ${response.status} ${response.statusText}`,
					);
					setItems([]);
					return;
				}

				const data = await response.json();

				if (Array.isArray(data)) {
					setItems(data);
				} else {
					console.error("Search API returned unexpected data:", data);
					setItems([]);
				}
			} catch (error) {
				console.error("Error fetching search results:", error);
				setItems([]);
			}
		}, 500),
	).current;

	useEffect(() => {
		return () => {
			debouncedFetchItems.cancel();
		};
	}, [debouncedFetchItems]);

	return (
		<>
			<button
				className="inline-flex items-center rounded-md bg-gray-800 px-2 py-1.5 text-sm font-medium text-gray-400 hover:bg-gray-700"
				onClick={() => {
					openModal();
				}}
				type="button"
			>
				<span className="sr-only md:hidden">Open search</span>
				<MagnifyingGlassIcon className="h-6 w-6 text-gray-400 md:hidden" />
				<span className="hidden md:inline">
					<span className="pl-3">Search docs...</span>
					<kbd className="ml-8 rounded-sm bg-gray-700 px-2 py-1 font-sans text-gray-400">
						⌘K
					</kbd>
				</span>
			</button>

			{/* <div className="bg-opacity-50 fixed inset-0 z-50 flex items-start justify-center bg-black backdrop-blur-xs"> */}
			{/* <div
				className="relative mt-10 w-full max-w-3xl rounded-lg bg-gray-800 p-6 shadow-lg"
				role="dialog"
				tabIndex="-1"
			> */}
			<dialog
				// role="combobox"
				closedby="any"
				ref={dialogReference}
				open={isModalOpen}
				onCancel={closeModal}
				className="bg-gray-800"
				// aria-haspopup="listbox"
				// aria-controls="search-results"
			>
				<div className="relative">
					<input
						autoFocus
						placeholder="What are you searching for?"
						// ariaLabel="Search input"
						className="w-full rounded-sm border border-gray-700 bg-gray-700 p-2 pr-10 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-hidden"
						type="text"
					/>
					<kbd className="absolute top-1/2 right-2 ml-8 -translate-y-1/2 rounded-sm bg-gray-700 px-2 py-1 font-sans text-gray-400">
						Esc
					</kbd>
				</div>
				<ul id="search-results" className="mt-2 max-h-60 overflow-y-auto">
					{items &&
						items.length > 0 &&
						items.map((item) => (
							<li
								key={item.id}
								// ${	highlightedIndex === index ? "bg-blue-600 text-white": "bg-gray-800 text-white"}`
								className="flex w-full cursor-pointer items-center justify-between px-4 py-4"
							>
								<Link href={item.path} className="w-full">
									<span className="text-left">{item.title}</span>
									<span className="text-right text-sm text-gray-400">
										{item.type === "mdx_doc" ? "Doc" : "Blog"}
									</span>
								</Link>
							</li>
						))}
				</ul>

				{items.length === 0 && (
					<div className="mt-2 text-gray-500">No results found.</div>
				)}
			</dialog>
			{/* </div> */}
			{/* </div> */}
		</>
	);
}
