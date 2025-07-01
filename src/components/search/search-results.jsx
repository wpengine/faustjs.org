import SearchResultsList from "./search-results-list";

export default function SearchResults({ items, onSelectItem }) {
	return (
		<>
			{items.length > 0 ? (
				<SearchResultsList items={items} onSelectItem={onSelectItem} />
			) : (
				<p className="p-4 text-white">No results found.</p>
			)}
		</>
	);
}
