import Link from "@/components/link";

export default function SearchResults({ items, onSelectItem }) {
	return (
		<ul className="custom-scrollbar max-h-[75dvh] overflow-y-auto md:max-h-96">
			{items.map((item) => {
				if (!item?.id || !item?.title || !item?.path) {
					console.warn("Invalid item in search results:", item);
					return;
				}

				return (
					<li
						key={item.id}
						className="border-b border-gray-700 py-6 pr-4 first:pt-4 hover:bg-gray-800"
					>
						<Link
							href={item.path}
							onClick={() => {
								onSelectItem(item);
							}}
							className="flex w-full cursor-pointer items-center justify-between"
						>
							<span className="text-left">{item.title}</span>
							<span className="text-right text-sm text-gray-400">
								{item.type === "mdx_doc" ? "Doc" : "Blog"}
							</span>
						</Link>
					</li>
				);
			})}
		</ul>
	);
}
