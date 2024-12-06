import { Fragment } from "react";
import Link from "@/components/link";
import { classNames } from "@/utils/strings";

export default function DocsNav({ as, routes, level = 0, className }) {
	const As = as || Fragment;
	return (
		<ul
			className={classNames(className, "my-1", {
				"ml-2 border-l-[.5px] border-gray-500 pl-2": level > 0,
			})}
			data-doc-nav-level={level}
		>
			{routes.map((item) => (
				<As key={item.title}>
					<NavItem item={item} level={level} />
				</As>
			))}
		</ul>
	);
}

function NavItem({ item, level, ...props }) {
	if (!item?.route) {
		throw new Error("Item must have a route");
	}

	return (
		<li>
			<Link
				data-doc-nav-level={level}
				href={item.route}
				noDefaultStyles
				{...props}
			>
				{item.title}
			</Link>
			{item.children && (
				<DocsNav as="ul" level={level + 1} routes={item.children} />
			)}
		</li>
	);
}
