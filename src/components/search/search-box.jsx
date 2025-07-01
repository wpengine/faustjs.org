import { XCircleIcon, ArrowPathIcon } from "@heroicons/react/24/outline";
import debounce from "lodash.debounce";
import { useState, useEffect, useRef, useCallback } from "react";
import SearchResults from "./search-results";
import { useSearch } from "./state";
import { sendSearchEvent, sendSelectItemEvent } from "@/lib/analytics.mjs";

export default function SearchBar() {
	const { dialog } = useSearch();
	const [items, setItems] = useState([]);
	const [inputValue, setInputValue] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const handleClose = useCallback(() => {
		setInputValue("");
		setItems([]);
	}, [setInputValue, setItems]);

	const handleKeyDown = useCallback(
		(event) => {
			if ((event.metaKey || event.ctrlKey) && event.key === "k") {
				event.preventDefault();
				dialog.current?.showModal();
			}
		},
		[dialog],
	);

	// Add event listener for keydown on the document
	// This allows the search to be opened with Cmd/Ctrl + K
	useEffect(() => {
		document.addEventListener("keydown", handleKeyDown);
		return () => document.removeEventListener("keydown", handleKeyDown);
	}, [handleKeyDown]);

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
			} finally {
				setIsLoading(false);
				sendSearchEvent(value);
			}
		}, 300),
	).current;

	// Cleanup the debounced function on unmount
	useEffect(() => {
		return () => {
			debouncedFetchItems.cancel();
		};
	}, [debouncedFetchItems]);

	const handleInputChange = useCallback(
		(event) => {
			setIsLoading(true);
			const value = event.target.value;
			setInputValue(value);
			debouncedFetchItems(value);
		},
		[debouncedFetchItems, setInputValue],
	);

	return (
		<dialog
			ref={dialog}
			className="m-auto bg-transparent p-0 backdrop:backdrop-blur-sm"
			// eslint-disable-next-line react/no-unknown-property
			closedby="any"
			onClose={handleClose}
		>
			<section className="relative w-full max-w-3xl rounded-lg bg-gray-800 p-6 shadow-lg md:w-[70vw]">
				<div
					aria-haspopup="listbox"
					aria-controls="search-results"
					className="h rounded-lg bg-gray-800 p-6 shadow-lg"
				>
					<div className="relative">
						<input
							value={inputValue}
							onChange={handleInputChange}
							autoFocus
							type="text"
							placeholder="What are you searching for?"
							aria-label="Search input"
							className="w-full rounded-sm border border-gray-700 bg-gray-700 p-2 pr-10 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-hidden"
						/>
						<button
							type="button"
							className="absolute top-1/2 right-2 -translate-y-1/2 transform text-xs text-gray-400 hover:text-white"
							onClick={() => {
								dialog.current?.close();
							}}
							aria-label="Close search"
						>
							<XCircleIcon className="h-5 w-5" />
						</button>
					</div>
					<div
						id="search-results"
						aria-live="polite"
						aria-label="Search results"
					>
						{inputValue.length > 0 &&
							(isLoading ? (
								<div className="flex items-center justify-center p-4">
									<ArrowPathIcon className="h-5 w-5 animate-spin text-gray-400" />
									<span className="sr-only">Searching</span>
								</div>
							) : (
								<SearchResults
									items={items}
									onSelectItem={(item) => {
										dialog.current?.close();
										sendSelectItemEvent({
											list: {
												id: "search_results",
												name: "Search Results",
											},
											item: {
												item_id: item.path,
												item_name: item.title,
												item_category: item.type,
											},
										});
									}}
								/>
							))}
					</div>
				</div>
			</section>
		</dialog>
	);
}
