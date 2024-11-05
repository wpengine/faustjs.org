import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useCombobox } from "downshift";
import debounce from "lodash.debounce";
import { useState, useEffect, useRef } from "react";

export default function SearchBar() {
	const [items, setItems] = useState([]); // Search results
	const [inputValue, setInputValue] = useState(""); // Input value
	const dialogRef = useRef(null);

	const openModal = () => dialogRef.current?.showModal();
	const closeModal = () => dialogRef.current?.close();

	const handleOutsideClick = (event) => {
		if (event.target === dialogRef.current) {
			closeModal();
			setInputValue("");
			setItems([]);
		}
	};

	const handleKeyDown = (event) => {
		if (event.metaKey && event.key === "k") {
			event.preventDefault();
			openModal();
		}

		if (event.key === "Escape") {
			closeModal();
		}
	};

	useEffect(() => {
		document.addEventListener("keydown", handleKeyDown);
		return () => document.removeEventListener("keydown", handleKeyDown);
	}, []);

	// Reference to store the debounced fetch function
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

	useEffect(() => {
		// Cleanup function to cancel debounced calls on unmount
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
	} = useCombobox({
		items,
		inputValue,
		onInputValueChange: ({ inputValue: newValue }) => {
			setInputValue(newValue);
			debouncedFetchItems(newValue);
		},
		// onSelectedItemChange: ({ selectedItem }) => {
		// 	if (selectedItem) {
		// 		window.location.href = selectedItem.path;
		// 	}
		// },
		itemToString: (item) => (item ? item.title : ""),
	});

	return (
		<>
			<button
				className="inline-flex items-center rounded-md bg-gray-800 px-2 py-1.5 text-sm font-medium text-gray-400 hover:bg-gray-700"
				onClick={openModal}
				type="button"
			>
				<MagnifyingGlassIcon className="h-6 w-6 text-gray-400 md:hidden" />
				<span className="hidden md:inline">
					<span className="pl-3">Search docs...</span>
					<kbd className="ml-8 rounded bg-gray-700 px-2 py-1 text-gray-400">
						⌘K
					</kbd>
				</span>
			</button>

			<dialog
				className="relative w-full max-w-3xl rounded-lg bg-gray-900 p-6 shadow-lg"
				ref={dialogRef}
				onClick={handleOutsideClick}
			>
				<button
					type="button"
					className="absolute right-4 top-4 rounded-md bg-gray-800 px-2 py-1 text-xs text-gray-400 hover:bg-gray-700"
					onClick={closeModal}
				>
					Esc
				</button>
				<div>
					<input
						autoFocus
						{...getInputProps({
							placeholder: "Search...",
							"aria-label": "Search input",
							style: { width: "100%", padding: "8px" },
						})}
					/>
					<ul {...getMenuProps()}>
						{isOpen &&
							items.map((item, index) => {
								const isHighlighted = highlightedIndex === index;
								return (
									<li
										key={item.id}
										{...getItemProps({
											item,
											index,
										})}
										style={{
											backgroundColor: isHighlighted ? "#bde4ff" : "white",
											padding: "8px",
										}}
									>
										<a
											href={item.path}
											style={{
												textDecoration: "none",
												color: "inherit",
												display: "block",
											}}
										>
											{item.title}
										</a>
									</li>
								);
							})}
					</ul>
				</div>
			</dialog>
		</>
	);
}
