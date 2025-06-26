import { HiOutlineChevronRight } from "react-icons/hi2";
import Link from "@/components/link";

export default function BlogBreadcrumbs({ currentPostTitle }) {
	return (
		<div className="mt-4 mb-7 md:mt-2 md:mb-10">
			<div className="flex flex-wrap items-center gap-2 text-sm">
				<Link
					className="font-normal text-gray-400 no-underline transition duration-200 ease-in hover:text-white focus:text-white"
					href="/blog"
					noDefaultStyles
					aria-label="Blog"
				>
					<span>Blog</span>
					<span>
						<HiOutlineChevronRight className="inline h-5 w-10 pl-4 align-text-top" />
					</span>
				</Link>

				<span>{currentPostTitle}</span>
			</div>
		</div>
	);
}
