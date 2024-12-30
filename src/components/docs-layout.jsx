import {
	Disclosure,
	DisclosureButton,
	DisclosurePanel,
} from "@headlessui/react";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import OnThisPageNav from "./on-this-page-nav";
import DocsNav from "@/components/docs-nav";
import routes from "@/pages/docs/nav.json";
import "rehype-callouts/theme/vitepress";

export default function DocumentPage({ children, metadata }) {
	return (
		<>
			<Disclosure
				as="div"
				className="sticky top-[85px] z-10 border-b-[1px] border-gray-800 bg-gray-900/80 backdrop-blur-sm md:hidden"
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
			<main className="relative mx-auto flex grid-cols-[1fr_auto_1fr] flex-col gap-6 md:grid">
				<nav className="sticky top-[84px] hidden h-min w-60 overflow-y-auto p-6 md:block">
					<DocsNav routes={routes} />
				</nav>
				<nav className="sticky top-[84px] order-last hidden h-min w-[240px] overflow-y-auto p-6 lg:block">
					<OnThisPageNav>{children}</OnThisPageNav>
				</nav>
				<article className="container-main prose prose-invert min-h-[calc(100vh-120px)] max-w-[80ch] py-14 md:py-24">
					{metadata?.title && (
						<h1 className="article-title">{metadata.title}</h1>
					)}
					{children}
				</article>
			</main>
		</>
	);
}
