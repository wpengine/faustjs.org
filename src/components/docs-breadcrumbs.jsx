import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import Link from "@/components/link";
import { normalizeHref } from "@/utils/strings";

export default function DocsBreadcrumbs({ routes }) {
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

	if (currentPath === "/docs") {
		breadcrumbLinks.shift(0);
	}

	return (
		<div className="mt-4 mb-7 md:mt-2 md:mb-10">
			<div className="flex flex-wrap items-center gap-2 text-sm">
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
						>
							<span>{breadcrumb.title}</span>
							<span>
								<ChevronRightIcon className="inline h-5 w-10 pl-4 align-text-top" />
							</span>
						</Link>
					),
				)}
			</div>
		</div>
	);
}
