// import OnThisPageNav from "@/components/on-this-page-nav";
import {
	Disclosure,
	DisclosureButton,
	DisclosurePanel,
} from "@headlessui/react";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import DocsNav from "@/components/docs-nav";
import routes from "@/pages/docs/nav.json";
import "rehype-callouts/theme/vitepress";

export default function DocumentPage({ children }) {
	return (
		<>
			<Disclosure
				as="div"
				className="sticky top-[84px] border-b-[.5px] border-gray-500 bg-gray-900/80 backdrop-blur-sm md:hidden"
			>
				<DisclosureButton className="group flex items-center rounded-md px-2 py-1.5 text-white/70 hover:text-white">
					<ChevronDownIcon className="relative z-20 hidden h-4 w-4 group-data-[open]:inline" />
					<ChevronRightIcon className="inline h-4 w-4 group-data-[open]:hidden" />
					<span className="pl-1">Menu</span>
				</DisclosureButton>
				<DisclosurePanel as="nav" className="hidden data-[open]:block">
					<DocsNav className="container-main" routes={routes} />
				</DisclosurePanel>
			</Disclosure>
			<div className="mx-auto flex grid-cols-[1fr_auto_1fr] flex-col gap-6 md:grid">
				<nav className="hidden w-60 p-6 md:block">
					<DocsNav routes={routes} />
				</nav>
				<main className="container-main prose prose-invert max-w-[80ch] py-14 md:py-24">
					{children}
				</main>
				<nav className="w-70 hidden p-6 lg:block">
					{/* <OnThisPageNav editorBlocks={editorBlocks} /> */}
				</nav>
			</div>
		</>
	);
}
