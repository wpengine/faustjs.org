import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import { useState, Fragment } from "react";
import Link from "@/components/link";
import { classNames } from "@/utils/strings";

export default function DocsNav({ as, routes, level = 0 }) {
	const As = as || Fragment;
	return (
		<ul
			className={classNames("my-1", {
				"ml-2 border-l-[.5px] border-gray-500": level > 0,
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
	// If the item doesn't have a route, it's a heading
	if (!item?.route) {
		return (
			<li>
				<span>{item.title}</span>
			</li>
		);
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
		</li>
	);
}

// function DropdownNavItem({ item, level, ...props }) {
// 	const router = useRouter();

// 	const isCurrent = router.asPath.includes(item.route);

// 	const [isOpen, setIsOpen] = useState(isCurrent);

// 	return (
// 		<li className="my-2 font-light">
// 			<Link
// 				data-doc-nav-level={level}
// 				href={item.route}
// 				noDefaultStyles
// 				{...props}
// 			>
// 				<span>{item.title}</span>
// 				{isOpen ? (
// 					<ChevronDownIcon
// 						className="inline h-4 w-4"
// 						onClick={() => setIsOpen(!isOpen)}
// 					/>
// 				) : (
// 					<ChevronRightIcon className="inline h-4 w-4" />
// 				)}
// 			</Link>
// 			{isCurrent && <DocsNav level={level + 1} routes={item.children} />}
// 		</li>
// 	);
// }
