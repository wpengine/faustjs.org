import Link from "@/components/link";
import { FooterMenus, FooterMenuSections } from "@/constants/menus";

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
	const columns = [
		FooterMenus.filter((item) => item.section === "downloads"),
		FooterMenus.filter((item) => item.section === "community"),
		FooterMenus.filter((item) => item.section === "wpengine"),
	];

	return columns.map((column, index) => {
		if (!column || column.length === 0) {
			return; // Skip rendering if no menu items are found
		}

		const columnSection = column[0]?.section || "menu";
		const columnTitle = FooterMenuSections[columnSection] || "Menu";

		return (
			<div className="col-span-1 flex flex-col gap-4" key={index}>
				<h6 className="font-bold uppercase tracking-wider text-gray-300">
					{columnTitle}
				</h6>
				<ul className="my-0 list-none ps-0">
					{column.map((item) => (
						<li className="my-0 space-y-2 ps-0" key={item.id}>
							<Link
								className="inline-flex items-center gap-1 font-normal text-gray-400 no-underline transition duration-150 ease-in-out hover:text-gray-200"
								href={item.uri}
								noDefaultStyles
								target={item.target}
							>
								{item.label}
							</Link>
						</li>
					))}
				</ul>
			</div>
		);
	});
}
