// import OnThisPageNav from "@/components/on-this-page-nav";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import DocsNav from "@/components/docs-nav";
import routes from "@/pages/docs/nav.json";

export default function DocumentPage({ children }) {
	return (
		<>
			<Menu
				as="div"
				className="sticky top-[84px] border-b-[.5px] border-gray-500 bg-gray-900/80 backdrop-blur-sm md:hidden"
			>
				<MenuButton className="flex items-center rounded-md px-2 py-1.5 text-white/70 hover:text-white data-[open]:rounded-t-md data-[open]:bg-gray-800/80">
					<ChevronDownIcon className="relative z-20 hidden h-4 w-4 data-[open]:inline" />
					<ChevronRightIcon className="inline h-4 w-4 data-[open]:hidden" />
					<span className="pl-1">Menu</span>
				</MenuButton>
				<MenuItems as="nav" className="hidden data-[open]:block">
					<DocsNav as={MenuItem} routes={routes} />
				</MenuItems>
			</Menu>
			<div className="mx-auto flex flex-col gap-6 md:max-w-screen-xl md:flex-row">
				<nav className="hidden w-60 p-6 md:block">
					<DocsNav routes={routes} />
				</nav>
				<main className="container-main md:py-241 container prose prose-lg prose-invert px-8 py-14 md:px-16">
					{children}
				</main>
				<nav className="w-70 hidden p-6 min-[1100px]:block">
					{/* <OnThisPageNav editorBlocks={editorBlocks} /> */}
				</nav>
			</div>
		</>
	);
}
