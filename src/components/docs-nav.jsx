import { CloseButton } from "@headlessui/react";
import Link from "@/components/link";
import { normalizeHref, classNames } from "@/utils/strings";

export default function DocsNav({
	isMobileMenu,
	routes,
	level = 0,
	className,
}) {
	return (
		<ul
			className={classNames(className, "my-1", {
				"ml-2 border-l-[1px] border-gray-800 pl-3": level > 0,
			})}
			data-doc-nav-level={level}
		>
			{routes.map((item) => (
				<NavItem
					key={item.title}
					item={item}
					level={level}
					isMobileMenu={isMobileMenu}
				/>
			))}
		</ul>
	);
}

function NavItem({ item, level, isMobileMenu, ...props }) {
	if (!item?.route) {
		throw new Error("Item must have a route");
	}

	const Component = isMobileMenu ? CloseButton : Link;

	return (
		<li className="py-2 text-gray-400">
			<Component
				as={isMobileMenu ? Link : undefined}
				data-doc-nav-level={level}
				href={normalizeHref(item.route)}
				noDefaultStyles
				prefetch={false}
				activeClassName="text-blue-500 active"
				{...props}
			>
				{item.title}
			</Component>
			{item.children && (
				<DocsNav
					isMobileMenu={isMobileMenu}
					level={level + 1}
					routes={item.children}
				/>
			)}
		</li>
	);
}
