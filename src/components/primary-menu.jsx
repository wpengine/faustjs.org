import { Menu } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { createPortal } from "react-dom";
import CustomLink from "./link";

// A helper that portals children to the body (or a different root).
function MenuPortal({ children }) {
	if (typeof globalThis === "undefined") return;
	return createPortal(children, document.body);
}

export default function PrimaryMenu() {
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

			<div className="md:hidden">
				<Menu as="div">
					{({ open }) => (
						<>
							<Menu.Button
								className="rounded-md px-2 py-1.5 text-white/70 hover:text-white focus:ring-2 focus:ring-purple-500 focus:outline-none"
								aria-label={open ? "Close menu" : "Open menu"}
							>
								{open ? (
									<XMarkIcon className="size-6" />
								) : (
									<Bars3Icon className="size-6" />
								)}
							</Menu.Button>

							{open && (
								<MenuPortal>
									<Menu.Items
										static
										className="fixed inset-x-0 top-[60px] z-50 border-b-[.5px] border-gray-400 bg-gray-900 outline-none"
									>
										<div className="flex flex-col items-center justify-around gap-4 py-4 text-lg">
											<Menu.Item>
												{({ active }) => (
													<CustomLink
														className={`block w-full p-4 text-center ${navItemClass} ${
															active ? "bg-purple-500/20" : ""
														} hover:bg-purple-500/20 focus:bg-purple-500/20 focus:outline-none`}
														noDefaultStyles
														href="/docs/"
														activeClassName="text-purple-500"
													>
														Docs
													</CustomLink>
												)}
											</Menu.Item>
											<Menu.Item>
												{({ active }) => (
													<CustomLink
														className={`block w-full p-4 text-center ${navItemClass} ${
															active ? "bg-purple-500/20" : ""
														} hover:bg-purple-500/20 focus:bg-purple-500/20 focus:outline-none`}
														noDefaultStyles
														href="/blog/"
														activeClassName="text-purple-500"
													>
														Blog
													</CustomLink>
												)}
											</Menu.Item>
											<Menu.Item>
												{({ active }) => (
													<CustomLink
														className={`block w-full p-4 text-center ${navItemClass} ${
															active ? "bg-purple-500/20" : ""
														} hover:bg-purple-500/20 focus:bg-purple-500/20 focus:outline-none`}
														noDefaultStyles
														href="/showcase/"
														activeClassName="text-purple-500"
													>
														Showcase
													</CustomLink>
												)}
											</Menu.Item>
										</div>
									</Menu.Items>
								</MenuPortal>
							)}
						</>
					)}
				</Menu>
			</div>
		</nav>
	);
}
