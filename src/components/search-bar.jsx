import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useCombobox } from "downshift";
import debounce from "lodash.debounce";
import { useRouter } from "next/router";
import { useState, useEffect, useRef, useCallback } from "react";
import DocTypeTag from "./doc-type-tag";

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
		setIsSearchOpen(true);
	}, [setIsSearchOpen]);

	const closeModal = useCallback(() => {
		setIsModalOpen(false);
		setIsSearchOpen(false);
	}, [setIsSearchOpen]);

	const handleOutsideClick = useCallback(
		(event) => {
			const isClickOutsideOfModal = event.target === dialogReference.current;
			if (isClickOutsideOfModal) {
				closeModal();
				setInputValue("");
				setItems([]);
			}
		},
		[closeModal],
	);

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
				router.push(selectedItem.href);
			}
		},
		itemToString: (item) => (item ? item.title : ""),
	});

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

			{isModalOpen && (
				<div
					className="bg-opacity-50 fixed inset-0 z-50 flex items-start justify-center bg-black backdrop-blur-xs"
					onClick={handleOutsideClick}
					onKeyDown={(event) => {
						if (event.key === "Enter" || event.key === " ") {
							handleOutsideClick(event);
						}
					}}
					role="button"
					tabIndex="0"
					ref={dialogReference}
				>
					<div
						className="relative mt-10 w-full max-w-3xl rounded-lg bg-gray-800 p-6 shadow-lg"
						role="dialog"
						tabIndex="-1"
					>
						<div
							role="combobox"
							aria-expanded={isOpen}
							aria-haspopup="listbox"
							aria-controls="search-results"
						>
							<div className="relative">
								<input
									autoFocus
									{...getInputProps({
										placeholder: "What are you searching for?",
										"aria-label": "Search input",
										className:
											"w-full pr-10 p-2 bg-gray-700 text-white placeholder-gray-400 border border-gray-700 rounded-sm focus:outline-hidden focus:ring-2 focus:ring-blue-500",
									})}
								/>
								<button
									type="button"
									className="absolute top-1/2 right-2 -translate-y-1/2 transform text-xs text-gray-400 hover:text-white"
									onClick={closeModal}
								>
									Esc
								</button>
							</div>
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
													router.push(item.href);
												},
												onKeyDown: (event) => {
													if (event.key === "Enter") {
														closeModal();
														router.push(item.href);
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
											<DocTypeTag type={item.type} />
										</li>
									))}
							</ul>

							{isOpen && items.length === 0 && (
								<div className="mt-2 text-gray-500">No results found.</div>
							)}
						</div>
					</div>
				</div>
			)}
		</>
	);
}
