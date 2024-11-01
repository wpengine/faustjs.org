import { gql, useQuery } from "@apollo/client";
import Link from "@/components/link";

export default function Footer() {
	const { data, loading, error } = useQuery(GET_FOOTER_NAV_ITEMS);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error! {error.message}</p>;

	return (
		<footer className="bg-gray-800">
			<div className="container mx-auto px-4 pb-8 pt-16 sm:px-6 md:max-w-6xl md:px-8">
				<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
					<FooterColumns data={data} />
				</div>
				<div className="mt-24 text-center text-sm text-gray-500">
					<p className="font-medium">
						Powered by <Link href="/">Faust.js</Link> &amp; WP Engine&apos;s{" "}
						<Link href="https://wpengine.com/headless-wordpress/">
							Headless platform
						</Link>
					</p>
					<p className="text-xs text-gray-600">
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
				<h6 className="text-sm font-extrabold uppercase tracking-wider text-gray-500">
					{columnTitle}
				</h6>
				<ul>
					{column.map((item) => (
						<li className="space-y-2" key={item.id}>
							<Link
								className="inline-flex items-center gap-1 text-sm text-gray-400 transition duration-150 ease-in-out hover:text-gray-200"
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
