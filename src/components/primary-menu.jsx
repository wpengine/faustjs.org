import {
	Popover,
	PopoverButton,
	PopoverPanel,
	CloseButton,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { forwardRef } from "react";
import Link from "@/components/link";
import { classNames } from "@/utils/strings";

const navItemClass =
	"text-gray-400 data-focus:text-purple-500 data-focus:outline rounded-md px-1";

const CustomLink = forwardRef((props, reference) => {
	return (
		<li>
			<CloseButton as={Link} {...props} ref={reference} noDefaultStyles />
		</li>
	);
});

export default function PrimaryMenu({ isMenuOpen, setIsMenuOpen, className }) {
	return (
		<nav className={classNames("flex items-center space-x-4", className)}>
			<ul className="hidden flex-row space-x-4 pl-4 md:flex">
				<li key="docs" className={navItemClass}>
					<Link
						className="block px-1"
						href="/docs/"
						noDefaultStyles
						activeClassName="text-purple-500"
					>
						Docs
					</Link>
				</li>
				<li key="blog" className={navItemClass}>
					<Link
						className="block px-1"
						href="/blog/"
						noDefaultStyles
						activeClassName="text-purple-500"
					>
						Blog
					</Link>
				</li>
				<li key="showcase" className={navItemClass}>
					<Link
						className="block px-1"
						href="/showcase/"
						noDefaultStyles
						activeClassName="text-purple-500"
					>
						Showcase
					</Link>
				</li>
			</ul>
			<Popover>
				<PopoverButton
					className="group rounded-md px-2 py-1.5 text-white/70 hover:text-white md:hidden"
					onClick={() => setIsMenuOpen(!isMenuOpen)}
				>
					<span className="sr-only hidden group-data-open:block">
						Open main nav
					</span>
					<XMarkIcon className="hidden size-6 group-data-open:block" />
					<span className="sr-only group-data-open:hidden">Open main nav</span>
					<Bars3Icon className="size-6 group-data-open:hidden" />
				</PopoverButton>
				<PopoverPanel
					as="ul"
					transition
					className="container-blur-bg absolute top-[84.5px] -left-4 flex w-full origin-top flex-col items-center justify-around gap-4 border-b-[.5px] border-gray-400 bg-gray-900/80 py-4 text-lg transition duration-200 ease-out focus-within:outline-hidden data-closed:-translate-y-10 data-closed:opacity-0 md:hidden"
				>
					<CustomLink
						key="docs"
						className={navItemClass}
						noDefaultStyles
						href="/docs/"
						activeClassName="text-purple-500"
					>
						Docs
					</CustomLink>
					<CustomLink
						key="blog"
						className={navItemClass}
						noDefaultStyles
						href="/blog/"
						activeClassName="text-purple-500"
					>
						Blog
					</CustomLink>
					<CustomLink
						key="showcase"
						className={navItemClass}
						noDefaultStyles
						href="/showcase/"
						activeClassName="text-purple-500"
					>
						Showcase
					</CustomLink>
				</PopoverPanel>
			</Popover>
		</nav>
	);
}
