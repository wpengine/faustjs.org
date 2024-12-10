import Link from "@/components/link";

export default function Footer() {
	return (
		<footer className="bg-gray-950 px-8 pb-14 lg:px-16 lg:pb-24">
			<div className="container-main container prose prose-invert border-t border-gray-900">
				<div className="grid grid-cols-1 gap-8 pt-14 sm:grid-cols-2 lg:grid-cols-3 lg:pt-24">
					<FooterColumns />
				</div>
				<div className="mt-24 text-gray-500">
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
			<div className={columnClass} key="downloads">
				<h6 className={headingClass}>Downloads</h6>
				<ul className={listClass}>
					<li className={listItemClass} key="faustwp-cli">
						<Link
							className={linkClass}
							href="https://www.npmjs.com/package/@faustwp/cli"
							noDefaultStyles
							target="_blank"
						>
							@faustwp/cli
						</Link>
					</li>
					<li className={listItemClass} key="faustwp-core">
						<Link
							className={linkClass}
							href="https://www.npmjs.com/package/@faustwp/core"
							noDefaultStyles
							target="_blank"
						>
							@faustwp/core
						</Link>
					</li>
					<li className={listItemClass} key="faustwp-blocks">
						<Link
							className={linkClass}
							href="https://www.npmjs.com/package/@faustwp/blocks"
							noDefaultStyles
							target="_blank"
						>
							@faustwp/blocks
						</Link>
					</li>
					<li className={listItemClass} key="faustwp-companion-plugin">
						<Link
							className={linkClass}
							href="https://github.com/wpengine/faustjs/tree/canary/plugins/faustwp"
							noDefaultStyles
							target="_blank"
						>
							Faust.js Companion Plugin
						</Link>
					</li>
					<li className={listItemClass} key="wpgraphql-content-blocks">
						<Link
							className={linkClass}
							href="https://github.com/wpengine/wp-graphql-content-blocks"
							noDefaultStyles
							target="_blank"
						>
							WPGraphQL Content Blocks
						</Link>
					</li>
				</ul>
			</div>
			<div className={columnClass} key="community">
				<h6 className={headingClass}>Community</h6>
				<ul className={listClass}>
					<li className={listItemClass} key="github">
						<Link
							className={linkClass}
							href="https://github.com/wpengine/faustjs?ref=faustjs"
							noDefaultStyles
							target="_blank"
						>
							Github
						</Link>
					</li>
					<li className={listItemClass} key="twitter">
						<Link
							className={linkClass}
							href="https://twitter.com/wpengine"
							noDefaultStyles
							target="_blank"
						>
							Twitter
						</Link>
					</li>
					<li className={listItemClass} key="youtube">
						<Link
							className={linkClass}
							href="https://www.youtube.com/channel/UCh1WuL54XFb9ZI6m6goFv1g"
							noDefaultStyles
							target="_blank"
						>
							YouTube
						</Link>
					</li>
					<li className={listItemClass} key="discord">
						<Link
							className={linkClass}
							href="/discord/"
							noDefaultStyles
							target="_blank"
						>
							Discord
						</Link>
					</li>
				</ul>
			</div>
			<div className={columnClass} key="wpengine">
				<h6 className={headingClass}>WP Engine</h6>
				<ul className={listClass}>
					<li className={listItemClass} key="privacy-policy">
						<Link className={linkClass} href="/privacy-policy/" noDefaultStyles>
							Privacy Policy
						</Link>
					</li>
					<li className={listItemClass} key="developers">
						<Link
							className={linkClass}
							href="https://wpengine.com/builders/headless"
							noDefaultStyles
							target="_blank"
						>
							Developers
						</Link>
					</li>
					<li className={listItemClass} key="hiring">
						<Link
							className={linkClass}
							href="https://wpengine.careers/?ref=faustjs"
							noDefaultStyles
							target="_blank"
						>
							We're Hiring!
						</Link>
					</li>
					<li className={listItemClass} key="headless-hosting">
						<Link
							className={linkClass}
							href="https://wpengine.com/atlas?ref=faustjs"
							noDefaultStyles
							target="_blank"
						>
							Headless Hosting
						</Link>
					</li>
				</ul>
			</div>
		</>
	);
}
