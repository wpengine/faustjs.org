import { Dialog } from "@headlessui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useCombobox } from "downshift";
import debounce from "lodash.debounce";
import { useRouter } from "next/router";
import { useState, useEffect, useRef, useCallback } from "react";

export default function SearchBar() {
	const [items, setItems] = useState([]);
	const [inputValue, setInputValue] = useState("");
	const [isModalOpen, setIsModalOpen] = useState(false);
	const dialogReference = useRef(null);
	const router = useRouter();

	const openModal = useCallback(() => {
		setIsModalOpen(true);
		setInputValue("");
		setItems([]);
	}, [setInputValue, setItems]);

	const closeModal = useCallback(() => setIsModalOpen(false), []);

	const handleOutsideClick = useCallback(
		(event) => {
			if (event.target === dialogReference.current) {
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

	// Add a blank line before this statement

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
				const data = await response.json();
				setItems(data);
			} catch (error) {
				console.error("Error fetching search results:", error);
			}
		}, 500),
	).current;

	useEffect(
		() => () => {
			debouncedFetchItems.cancel();
		},
		[debouncedFetchItems],
	);

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
		<>
			<button
				className="inline-flex items-center rounded-md bg-gray-800 px-2 py-1.5 text-sm font-medium text-gray-400 hover:bg-gray-700"
				onClick={openModal}
				type="button"
			>
				<span className="sr-only md:hidden">Open search</span>
				<MagnifyingGlassIcon className="h-6 w-6 text-gray-400 md:hidden" />
				<span className="hidden md:inline">
					<span className="pl-3">Search docs...</span>
					<kbd className="ml-8 rounded bg-gray-700 px-2 py-1 text-gray-400">
						⌘K
					</kbd>
				</span>
			</button>

			{isModalOpen && (
				<div
					className="bg-black fixed inset-0 z-50 flex items-start justify-center bg-opacity-50 backdrop-blur-sm"
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
						className="relative mt-10 w-full max-w-3xl rounded-lg bg-gray-900 p-6 shadow-lg"
						onClick={(event) => event.stopPropagation()}
						onKeyDown={(event) => event.stopPropagation()}
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
											"w-full pr-10 p-2 bg-gray-800 text-white placeholder-gray-400 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500",
									})}
								/>
								<button
									type="button"
									className="absolute right-2 top-1/2 -translate-y-1/2 transform text-xs text-gray-400 hover:text-white"
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
									items.map((item, index) => (
										<li
											key={item.id}
											{...getItemProps({
												item,
												index,
												onClick: () => {
													closeModal();
													router.push(item.path);
												},
												onKeyDown: (event) => {
													if (event.key === "Enter") {
														closeModal();
														router.push(item.path);
													}
												},
											})}
											role="option"
											aria-selected={highlightedIndex === index}
											tabIndex={0}
											className={`block w-full cursor-pointer p-2 ${
												highlightedIndex === index
													? "bg-blue-600 text-white"
													: "bg-gray-800 text-white"
											}`}
										>
											{item.title}
										</li>
									))}
							</ul>
						</div>
					</div>
				</div>
			)}
		</>
	);
}
