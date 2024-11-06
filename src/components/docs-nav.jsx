import Link from "@/components/link";
import { classNames } from "@/utils/strings";

export default function DocsNav({ routes, className }) {
	return (
		<ul className={classNames("", className)}>
			{routes.map((item) => (
				<NavItem key={item.title} item={item} />
			))}
		</ul>
	);
}

function NavItem({ item, level = 0 }) {
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
			<Link href={item.route} data-doc-nav-level={level} noDefaultStyles>
				{item.title}
			</Link>
			{item.children && <DocsNav routes={item.children} level={++level} />}
		</li>
	);
}
