import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState, useCallback } from "react";
import CustomLink from "./link";

export default function PrimaryMenu() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	// Use useCallback to memoize the toggle handler
	const handleMenuToggle = useCallback(() => {
		setIsMenuOpen((previous) => !previous);
	}, []);

	const navItemClass =
		"text-gray-200 hover:text-white transition-colors duration-200";

	return (
		<nav className="flex items-center gap-8">
			<div className="hidden items-center gap-8 md:flex">
				<CustomLink
					className={navItemClass}
					noDefaultStyles
					href="/docs/"
					activeClassName="text-purple-500"
				>
					Docs
				</CustomLink>
				<CustomLink
					className={navItemClass}
					noDefaultStyles
					href="/blog/"
					activeClassName="text-purple-500"
				>
					Blog
				</CustomLink>
				<CustomLink
					className={navItemClass}
					noDefaultStyles
					href="/showcase/"
					activeClassName="text-purple-500"
				>
					Showcase
				</CustomLink>
			</div>

			<Menu>
				<MenuButton
					className="group rounded-md px-2 py-1.5 text-white/70 hover:text-white md:hidden"
					onClick={handleMenuToggle}
				>
					<span className="sr-only">
						{isMenuOpen ? "Close menu" : "Open menu"}
					</span>
					{isMenuOpen ? (
						<XMarkIcon className="size-6" />
					) : (
						<Bars3Icon className="size-6" />
					)}
				</MenuButton>

				{isMenuOpen && (
					<MenuItems
						static
						className="absolute top-[84.5px] -left-4 flex w-full flex-col items-center justify-around gap-4 border-b-[.5px] border-gray-400 bg-gray-900/80 py-4 text-lg"
					>
						<MenuItem>
							<CustomLink
								className={navItemClass}
								noDefaultStyles
								href="/docs/"
								activeClassName="text-purple-500"
							>
								Docs
							</CustomLink>
						</MenuItem>
						<MenuItem>
							<CustomLink
								className={navItemClass}
								noDefaultStyles
								href="/blog/"
								activeClassName="text-purple-500"
							>
								Blog
							</CustomLink>
						</MenuItem>
						<MenuItem>
							<CustomLink
								className={navItemClass}
								noDefaultStyles
								href="/showcase/"
								activeClassName="text-purple-500"
							>
								Showcase
							</CustomLink>
						</MenuItem>
					</MenuItems>
				)}
			</Menu>
		</nav>
	);
}
