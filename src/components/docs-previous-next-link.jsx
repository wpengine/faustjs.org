import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import Link from "@/components/link";
import { normalizeHref } from "@/utils/strings";

export default function DocsPreviousNextLinks({ routes }) {
	const router = useRouter();
	const currentPath = router.pathname;

	const currentIndex = routes.findIndex(
		(route) => normalizeHref(route.route) === normalizeHref(currentPath),
	);

	if (currentIndex === -1) {
		return;
	}

	const previousPage = routes[currentIndex - 1];
	const nextPage = routes[currentIndex + 1];

	return (
		<nav aria-label="pagination" className="mt-8 mb-4 flex justify-between">
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
