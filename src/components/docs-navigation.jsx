import Link from "next/link";
import { classNames } from "@/utils/strings";

// TODO: Be replaced dynamically
// As discussed the process would be
// 1. Get an array of set links from a JSON const (or file)
// 2. Get a list of pages in an array from docs
// 3. Loop through each page from the JSON const
// 3.1. Check if page exists in array, if not do not output
// 3.2. Output page and pop from docs/pages array
// 3.3. Then loop through any remaining pages from docs/pages array and output below the other items

const menuItems = [
	{
		level: 1,
		uri: "#",
		label: "Getting Started",
		id: "getting-started",
	},
	{
		level: 1,
		uri: "#",
		label: "Installation",
		id: "installation",
	},
	{
		level: 3,
		uri: "#",
		label: "How To Guides",
		id: "how-to-guides",
		children: [
			{
				uri: "#",
				label: "Example Project",
				id: "example-project",
				children: [
					{
						uri: "#",
						label: "Setting up WordPress",
						id: "setting-up-wordpress",
					},
					{
						uri: "#",
						label: "Setting up Faust",
						id: "setting-up-faust",
					},
					{
						uri: "#",
						label: "Content Blocks",
						id: "content-blocks",
					},
					{
						uri: "#",
						label: "Debugging Faust",
						id: "debugging-faust",
					},
					{
						uri: "#",
						label: "Debugging WP GraphQL",
						id: "debugging-wp-graphql",
					},
				],
			},
		],
	},
	{
		level: 2,
		uri: "#",
		label: "Reference",
		id: "reference",
		children: [
			{
				uri: "#",
				label: "FaustWP",
				id: "faustwp",
			},
			{
				uri: "#",
				label: "WPGraphQL",
				id: "wpgraphql",
			},
			{
				uri: "#",
				label: "WPGraphQL Content Blocks",
				id: "wpgraphql-content-blocks",
			},
		],
	},
];

const menuUlClass = "list-none";
const menuItemClass = "my-1.5";
const menuItemLinkClass =
	"hover:text-gray-1000 relative flex w-full cursor-pointer items-center justify-between rounded-md py-1 pl-2 text-left text-sn";

export default function DocsNavigation({ className }) {
	return (
		<nav
			className={classNames(
				"order-last hidden w-full shrink-0 md:block",
				className,
			)}
		>
			<ul className={menuUlClass}>
				{menuItems.map((item) => (
					<li key={item.id} className={menuItemClass}>
						<Link className={menuItemLinkClass} href={item.uri} noDefaultStyles>
							{item.label}
						</Link>
						{item.children?.length > 0 && (
							<ul className={menuUlClass}>
								{item.children.map((childItem) => (
									<li key={childItem.id} className={menuItemClass}>
										<Link
											className={menuItemLinkClass}
											href={childItem.uri}
											noDefaultStyles
										>
											{childItem.label}
										</Link>
										{childItem.children?.length > 0 && (
											<ul className={menuUlClass}>
												{childItem.children.map((grandChildItem) => (
													<li key={grandChildItem.id} className={menuItemClass}>
														<Link
															className={menuItemLinkClass}
															href={grandChildItem.uri}
															noDefaultStyles
														>
															{grandChildItem.label}
														</Link>
													</li>
												))}
											</ul>
										)}
									</li>
								))}
							</ul>
						)}
					</li>
				))}
			</ul>
		</nav>
	);
}
