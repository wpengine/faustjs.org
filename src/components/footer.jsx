import Link from "@/components/link";

export default function Footer() {
	return (
		<footer className="bg-gray-950 px-8 pb-14 lg:px-16 lg:pb-24">
			<div className="container-main container-max prose prose-invert container border-t border-gray-900">
				<div className="grid grid-cols-1 gap-8 pt-14 sm:grid-cols-2 lg:grid-cols-3 lg:pt-24">
					<FooterColumns />
				</div>
				<div className="mt-2 text-gray-500 lg:mt-24">
					<p>
						Powered by{" "}
						<Link
							className="font-normal text-gray-300 no-underline"
							href="/"
							noDefaultStyles
						>
							Faust.js
						</Link>{" "}
						&amp; WP Engine&apos;s{" "}
						<Link
							className="font-normal text-gray-300 no-underline"
							href="https://wpengine.com/headless-wordpress/"
							noDefaultStyles
						>
							Headless platform
						</Link>
					</p>
					<p className="text-gray-600">
						&copy; 2013-{new Date().getFullYear()} WP Engine, Inc. All rights
						reserved.
					</p>
				</div>
			</div>
		</footer>
	);
}

function FooterColumns() {
	const columnClass = "col-span-1 flex flex-col gap-4";
	const listClass = "my-0 list-none ps-0";
	const headingClass = "font-bold uppercase tracking-wider text-gray-300";
	const listItemClass = "my-0 space-y-2 ps-0";
	const linkClass =
		"inline-flex items-center gap-1 font-normal text-gray-400 no-underline transition duration-150 ease-in-out hover:text-gray-200";

	return (
		<>
			<div className={columnClass}>
				<h6 className={headingClass}>Downloads</h6>
				<ul className={listClass}>
					<li className={listItemClass}>
						<Link
							className={linkClass}
							href="https://www.npmjs.com/package/@faustwp/cli"
							noDefaultStyles
						>
							@faustwp/cli
						</Link>
					</li>
					<li className={listItemClass}>
						<Link
							className={linkClass}
							href="https://www.npmjs.com/package/@faustwp/core"
							noDefaultStyles
						>
							@faustwp/core
						</Link>
					</li>
					<li className={listItemClass}>
						<Link
							className={linkClass}
							href="https://www.npmjs.com/package/@faustwp/blocks"
							noDefaultStyles
						>
							@faustwp/blocks
						</Link>
					</li>
					<li className={listItemClass}>
						<Link
							className={linkClass}
							href="https://github.com/wpengine/faustjs/tree/canary/plugins/faustwp"
							noDefaultStyles
						>
							Faust.js Companion Plugin
						</Link>
					</li>
					<li className={listItemClass}>
						<Link
							className={linkClass}
							href="https://github.com/wpengine/wp-graphql-content-blocks"
							noDefaultStyles
						>
							WPGraphQL Content Blocks
						</Link>
					</li>
				</ul>
			</div>
			<div className={columnClass}>
				<h6 className={headingClass}>Community</h6>
				<ul className={listClass}>
					<li className={listItemClass}>
						<Link
							className={linkClass}
							href="https://github.com/wpengine/faustjs?ref=faustjs"
							noDefaultStyles
						>
							Github
						</Link>
					</li>
					<li className={listItemClass}>
						<Link
							className={linkClass}
							href="https://twitter.com/wpengine"
							noDefaultStyles
						>
							Twitter
						</Link>
					</li>
					<li className={listItemClass}>
						<Link
							className={linkClass}
							href="https://www.youtube.com/channel/UCh1WuL54XFb9ZI6m6goFv1g"
							noDefaultStyles
						>
							YouTube
						</Link>
					</li>
					<li className={listItemClass}>
						<Link className={linkClass} href="/discord" noDefaultStyles>
							Discord
						</Link>
					</li>
				</ul>
			</div>
			<div className={columnClass}>
				<h6 className={headingClass}>WP Engine</h6>
				<ul className={listClass}>
					<li className={listItemClass}>
						<Link
							className={linkClass}
							href="/privacy-policy/"
							noDefaultStyles
							target="_self"
						>
							Privacy Policy
						</Link>
					</li>
					<li className={listItemClass}>
						<Link
							className={linkClass}
							href="https://wpengine.com/builders/headless"
							noDefaultStyles
							target="_blank"
						>
							Developers
						</Link>
					</li>
					<li className={listItemClass}>
						<Link
							className={linkClass}
							href="https://wpengine.careers/?ref=faustjs"
							noDefaultStyles
						>
							We're Hiring!
						</Link>
					</li>
					<li className={listItemClass}>
						<Link
							className={linkClass}
							href="https://wpengine.com/atlas?ref=faustjs"
							noDefaultStyles
						>
							Headless Hosting
						</Link>
					</li>
				</ul>
			</div>
		</>
	);
}
