import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import { useState } from "react";
import Link from "@/components/link";
import { classNames } from "@/utils/strings";

export default function DocsNav({ routes, className, level = 0 }) {
	return (
		<ul
			className={classNames("my-1", className, {
				"ml-2 border-l-[.5px] border-gray-500": level > 0,
			})}
			data-doc-nav-level={level}
		>
			{routes.map((item) => (
				<NavItem item={item} key={item.title} level={level} />
			))}
		</ul>
	);
}

function NavItem({ item, level }) {
	// If the item doesn't have a route, it's a heading
	if (!item?.route) {
		return (
			<li>
				<span>{item.title}</span>
			</li>
		);
	}

	if (!item.children) {
		return (
			<li>
				<Link data-doc-nav-level={level} href={item.route} noDefaultStyles>
					{item.title}
				</Link>
			</li>
		);
	}

	return <DropdownNavItem item={item} level={level} />;
}

function DropdownNavItem({ item, level }) {
	const router = useRouter();

	const isCurrent = router.asPath.includes(item.route);

	const [isOpen, setIsOpen] = useState(isCurrent);

	return (
		<li className="my-2 font-light">
			<Link data-doc-nav-level={level} href={item.route} noDefaultStyles>
				<span>{item.title}</span>
				{isOpen ? (
					<ChevronDownIcon
						className="inline h-4 w-4"
						onClick={() => setIsOpen(!isOpen)}
					/>
				) : (
					<ChevronRightIcon className="inline h-4 w-4" />
				)}
			</Link>
			{isCurrent && <DocsNav level={++level} routes={item.children} />}
		</li>
	);
}
