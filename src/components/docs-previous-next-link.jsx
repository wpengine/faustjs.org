import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import Link from "@/components/link";

const normalizeHref = (path) => (path.endsWith("/") ? path : `${path}/`);

const flattenRoutes = (routes) => {
	const flatRoutes = [];

	const traverse = (innerRoutes, parentPath = "") => {
		for (const route of innerRoutes) {
			const fullPath = `${parentPath}${route.route}`;
			flatRoutes.push({ ...route, fullPath });

			if (route.children) {
				traverse(route.children, `${parentPath}${route.route}`);
			}
		}
	};

	traverse(routes);
	return flatRoutes;
};

export default function DocsPreviousNextLinks({ routes }) {
	const router = useRouter();
	const currentPath = router.pathname;
	const flatRoutes = flattenRoutes(routes);

	const currentIndex = flatRoutes.findIndex(
		(route) => normalizeHref(route.route) === normalizeHref(currentPath),
	);

	if (currentIndex === -1) {
		return;
	}

	const previousPage = flatRoutes[currentIndex - 1];
	const nextPage = flatRoutes[currentIndex + 1];

	return (
		<nav aria-label="pagination" className="mt-8 flex justify-between">
			{previousPage && (
				<Link
					className="max-w-[200px] font-normal text-gray-400 no-underline transition duration-200 ease-in hover:text-white focus:text-white"
					href={previousPage.route}
					noDefaultStyles
					aria-label={`Go to previous page: ${previousPage.title}`}
				>
					<span className="mb-1 ml-10 block text-sm">Previous</span>
					<span>
						<ChevronLeftIcon className="inline h-5 w-10 pr-4 align-text-top" />
					</span>
					<span className="text-white">{previousPage.title}</span>
				</Link>
			)}
			{nextPage && (
				<Link
					className="max-w-[200px] font-normal text-gray-400 no-underline transition duration-200 ease-in hover:text-white focus:text-white"
					href={nextPage.route}
					noDefaultStyles
					aria-label={`Go to next page: ${nextPage.title}`}
				>
					<span className="mb-1 block text-sm">Next</span>
					<span className="text-white">{nextPage.title}</span>
					<span>
						<ChevronRightIcon className="inline h-5 w-10 pl-4 align-text-top" />
					</span>
				</Link>
			)}
		</nav>
	);
}
