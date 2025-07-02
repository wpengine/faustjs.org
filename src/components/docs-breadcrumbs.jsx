import { useRouter } from "next/router";
import { HiOutlineChevronRight } from "react-icons/hi2";
import Link from "@/components/link";
import { sendSelectItemEvent } from "@/lib/analytics.mjs";
import { classNames, normalizeHref } from "@/utils/strings";

export default function DocsBreadcrumbs({ routes, className }) {
	const generateBreadcrumbs = (breadcrumbRoutes, currentRoute) => {
		const breadcrumbs = [];

		const traverse = (navigationRoutes, path) => {
			const currentIndex = navigationRoutes.findIndex(
				(route) => normalizeHref(route.route) === normalizeHref(path),
			);

			if (currentIndex === -1) {
				return;
			}

			breadcrumbs.unshift(navigationRoutes[currentIndex]);

			const parentPath = navigationRoutes[currentIndex].parentPath;
			if (!parentPath) {
				return;
			}

			traverse(navigationRoutes, parentPath);
		};

		traverse(routes, currentRoute);
		return breadcrumbs;
	};

	const router = useRouter();
	const currentPath = router.asPath;
	const breadcrumbLinks = generateBreadcrumbs(routes, currentPath);

	if (breadcrumbLinks.length === 0) {
		return;
	}

	const homeRoute = routes[0];
	homeRoute.title = "Docs";
	breadcrumbLinks.unshift(homeRoute);

	if (currentPath === "/docs/") {
		breadcrumbLinks.shift(0);
	}

	return (
		<nav
			className={classNames(
				"flex flex-wrap items-center gap-2 text-sm",
				className,
			)}
		>
			{breadcrumbLinks.map((breadcrumb, index) =>
				normalizeHref(breadcrumb.route) === normalizeHref(currentPath) ? (
					<span key={index}>{breadcrumb.title}</span>
				) : (
					<Link
						key={index}
						className="font-normal text-gray-400 no-underline transition duration-200 ease-in hover:text-white focus:text-white"
						href={breadcrumb.route}
						noDefaultStyles
						aria-label={breadcrumb.title}
						onClick={() => {
							sendSelectItemEvent({
								list: { id: "docs_breadcrumbs", name: "Docs Breadcrumbs" },
								item: {
									item_id: breadcrumb.route,
									item_name: breadcrumb.title,
									item_category: "mdx_doc",
								},
							});
						}}
					>
						<span>{breadcrumb.title}</span>
						<span>
							<HiOutlineChevronRight className="inline h-5 w-10 pl-4 align-text-top" />
						</span>
					</Link>
				),
			)}
		</nav>
	);
}
