import { gql, useQuery } from "@apollo/client";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "@/components/link";
import { classNames } from "@/utils/strings";

const GET_PRIMARY_NAV = gql`
	query GetPrimaryNav {
		menu(id: "primary-nav", idType: NAME) {
			id
			name
			menuItems {
				nodes {
					label
					uri
					databaseId
				}
			}
		}
	}
`;

const navItemClass = "text-gray-400 hover:text-gray-200";

export default function PrimaryMenu({ className }) {
	const { data, loading, error } = useQuery(GET_PRIMARY_NAV);

	if (loading) return <p>Loading...</p>;
	if (error) {
		console.error("Error loading navigation items:", error);
		return <p>Error loading navigation items.</p>;
	}

	const menuItems = data?.menu?.menuItems?.nodes || [];

	return (
		<Menu
			as="nav"
			className={classNames("flex items-center space-x-4", className)}
		>
			<MenuButton className="group rounded-md px-2 py-1.5 text-white/70 hover:text-white md:hidden">
				<span className="sr-only">Open main nav</span>
				<XMarkIcon className="z-20 hidden size-6 group-data-[open]:block" />
				<Bars3Icon className="size-6 group-data-[open]:hidden" />
			</MenuButton>
			<ul className="hidden flex-row md:flex">
				{menuItems.map((item) => (
					<li key={item.databaseId} className={navItemClass}>
						<Link className="block px-1" href={item.uri} noDefaultStyles>
							{item.label}
						</Link>
					</li>
				))}
			</ul>
			<MenuItems
				as="ul"
				transition
				className="absolute -left-4 top-[84.5px] flex w-full origin-top flex-col items-center justify-around gap-4 border-b-[.5px] border-gray-400 bg-gray-900/80 py-4 text-lg transition duration-200 ease-out data-[closed]:-translate-y-10 data-[closed]:opacity-0 md:hidden"
			>
				{menuItems.map((item) => (
					<MenuItem key={item.databaseId} as="li" className={navItemClass}>
						<Link className="block px-1" href={item.uri} noDefaultStyles>
							{item.label}
						</Link>
					</MenuItem>
				))}
			</MenuItems>
		</Menu>
	);
}
