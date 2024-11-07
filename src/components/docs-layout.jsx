// import OnThisPageNav from "@/components/on-this-page-nav";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import DocsNav from "@/components/docs-nav";
import routes from "@/pages/docs/nav.json";
import { classNames } from "@/utils/strings";

export default function DocumentPage({ children }) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<div className="sticky top-[84px] border-b-[.5px] border-gray-500 bg-gray-900/80 backdrop-blur-sm lg:hidden">
				<button
					className={`group flex items-center px-2 py-1.5 text-white/70 hover:text-white ${isOpen ? "rounded-t-md bg-gray-800/80" : "rounded-md"}`}
					onClick={() => setIsOpen(!isOpen)}
					type="button"
				>
					{isOpen ? (
						<ChevronDownIcon className="relative z-20 inline h-4 w-4" />
					) : (
						<ChevronRightIcon className="inline h-4 w-4" />
					)}
					<span className="pl-1">Menu</span>
				</button>
				<nav className={classNames({ hidden: !isOpen })}>
					<DocsNav routes={routes} />
				</nav>
			</div>
			<div className="lg:max-w-8xl mx-auto flex flex-col gap-6 lg:flex-row">
				<nav className="hidden w-60 p-6 lg:block">
					<DocsNav routes={routes} />
				</nav>
				<main className="container-main lg:py-241 container prose prose-lg prose-invert px-8 py-14 lg:px-16">
					{children}
				</main>
				<section className="w-70 hidden p-6 min-[1100px]:block">
					{/* <OnThisPageNav editorBlocks={editorBlocks} /> */}
				</section>
			</div>
		</>
	);
}
