import { gql, useQuery } from "@apollo/client";
import Link from "@/components/link";

export default function Footer() {
	const { data, loading, error } = useQuery(GET_FOOTER_NAV_ITEMS);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error! {error.message}</p>;

	return (
		<footer className="bg-gray-950 px-8 pb-14 lg:px-16 lg:pb-24">
			<div className="container-main container prose prose-invert border-t border-gray-900">
				<div className="grid grid-cols-1 gap-8 pt-14 sm:grid-cols-2 lg:grid-cols-3 lg:pt-24">
					<FooterColumns data={data} />
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

function FooterColumns({ data }) {
	const { footer1MenuItems, footer2MenuItems, footer3MenuItems } = data;
	const columns = [
		footer1MenuItems?.menuItems?.nodes,
		footer2MenuItems?.menuItems?.nodes,
		footer3MenuItems?.menuItems?.nodes,
	];

	return columns.map((column, index) => {
		if (!column || column.length === 0) {
			return; // Skip rendering if no menu items are found
		}

		const columnTitle = column[0]?.menu?.node?.name || "Menu";

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

const GET_FOOTER_NAV_ITEMS = gql`
	query GetFooterNavItems {
		footer1MenuItems: menu(id: "downloads", idType: NAME) {
			menuItems {
				nodes {
					id
					uri
					label
					target
					menu {
						node {
							name
						}
					}
				}
			}
		}
		footer2MenuItems: menu(id: "community", idType: NAME) {
			menuItems {
				nodes {
					id
					uri
					label
					target
					menu {
						node {
							name
						}
					}
				}
			}
		}
		footer3MenuItems: menu(id: "WP engine", idType: NAME) {
			menuItems {
				nodes {
					id
					uri
					label
					target
					menu {
						node {
							name
						}
					}
				}
			}
		}
	}
`;
