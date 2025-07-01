import { useCombobox } from "downshift";
import debounce from "lodash.debounce";
import { useRouter } from "next/router";
import { useState, useEffect, useRef, useCallback } from "react";
import { useSearch } from "./state";
import { sendSearchEvent, sendSelectItemEvent } from "@/lib/analytics.mjs";

export default function SearchBar() {
	const { dialog } = useSearch();
	const [items, setItems] = useState([]);
	const [inputValue, setInputValue] = useState("");
	const router = useRouter();

	const openModal = useCallback(() => {
		dialog.current?.showModal();
	}, [dialog]);

	const closeModal = useCallback(() => {
		dialog.current?.close();
		setInputValue("");
	}, [dialog]);

	const handleKeyDown = useCallback(
		(event) => {
			if (event.metaKey && event.key === "k") {
				event.preventDefault();
				openModal();
			}

			// if (event.key === "Escape") {
			// 	closeModal();
			// }
		},
		[openModal],
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
				sendSearchEvent(value);
			}
		}, 500),
	).current;

	useEffect(() => {
		return () => {
			debouncedFetchItems.cancel();
		};
	}, [debouncedFetchItems]);

	const {
		isOpen,
		getMenuProps,
		getInputProps,
		getItemProps,
		highlightedIndex,
		openMenu,
		closeMenu,
	} = useCombobox({
		items,
		inputValue,
		defaultHighlightedIndex: 0,
		onInputValueChange: ({ inputValue: newValue }) => {
			setInputValue(newValue);
			debouncedFetchItems(newValue);
			if (newValue.trim() === "") {
				closeMenu();
			} else {
				openMenu();
			}
		},
		onSelectedItemChange: ({ selectedItem }) => {
			if (selectedItem) {
				closeModal();
				router.push(selectedItem.path);
			}
		},
		itemToString: (item) => (item ? item.title : ""),
	});

	return (
		<dialog
			ref={dialog}
			className="m-auto bg-transparent p-0 backdrop:backdrop-blur-sm"
			// eslint-disable-next-line react/no-unknown-property
			closedby="any"
		>
			<section className="relative w-full max-w-3xl rounded-lg bg-gray-800 p-6 shadow-lg md:w-[70vw]">
				<div
					role="combobox"
					aria-expanded={isOpen}
					aria-haspopup="listbox"
					aria-controls="search-results"
					className="h rounded-lg bg-gray-800 p-6 shadow-lg"
				>
					<input
						autoFocus
						{...getInputProps({
							placeholder: "What are you searching for?",
							"aria-label": "Search input",
							className:
								"w-full pr-10 p-2 bg-gray-700 text-white placeholder-gray-400 border border-gray-700 rounded-sm focus:outline-hidden focus:ring-2 focus:ring-blue-500",
						})}
					/>
					<kbd
						type="button"
						className="absolute top-1/2 right-2 -translate-y-1/2 transform text-xs text-gray-400 hover:text-white"
					>
						Esc
					</kbd>
					<ul
						{...getMenuProps({
							id: "search-results",
						})}
						className="mt-2 max-h-60 overflow-y-auto"
					>
						{isOpen &&
							items &&
							items.length > 0 &&
							items.map((item, index) => (
								<li
									key={item.id}
									{...getItemProps({
										item,
										index,
										onClick: () => {
											closeModal();
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
											router.push(item.path);
										},
										onKeyDown: (event) => {
											if (event.key === "Enter") {
												closeModal();
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
												router.push(item.path);
											}
										},
									})}
									role="option"
									aria-selected={highlightedIndex === index}
									tabIndex={0}
									className={`flex w-full cursor-pointer items-center justify-between px-4 py-4 ${
										highlightedIndex === index
											? "bg-blue-600 text-white"
											: "bg-gray-800 text-white"
									}`}
								>
									<span className="text-left">{item.title}</span>
									<span className="text-right text-sm text-gray-400">
										{item.type === "mdx_doc" ? "Doc" : "Blog"}
									</span>
								</li>
							))}
					</ul>

					{isOpen && items.length === 0 && (
						<div className="mt-2 text-gray-500">No results found.</div>
					)}
				</div>
			</section>
		</dialog>
	);
}
