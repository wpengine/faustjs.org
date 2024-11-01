import { gql, useQuery } from "@apollo/client";
import { useState, useEffect } from "react";
import Link from "@/components/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

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

export default function PrimaryMenu() {
	const { data, loading, error } = useQuery(GET_PRIMARY_NAV);
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		if (data) {
			console.log("Data received:", data);
		}
	}, [data]);

	if (loading) return <p>Loading...</p>;
	if (error) {
		console.error("Error loading navigation items:", error);
		return <p>Error loading navigation items.</p>;
	}

	const menuItems = data?.menu?.menuItems?.nodes || [];

	return (
		<nav className="relative">
			<button
				className={`group px-2 py-1.5 text-white/70 hover:text-white md:hidden ${isOpen ? "rounded-t-md bg-gray-800/80" : "rounded-md"}`}
				onClick={() => setIsOpen(!isOpen)}
			>
				{isOpen ? (
					<XMarkIcon className="relative z-20 inline h-5 w-5" />
				) : (
					<Bars3Icon className="inline h-5 w-5" />
				)}
			</button>
			<ul
				className={`md:flex ${
					isOpen
						? "absolute right-0 top-full z-10 rounded-bl-md rounded-br-md rounded-tl-md bg-gray-800/80 px-9 py-5 text-right backdrop-blur-sm"
						: "hidden"
				} md:flex-row md:gap-2 md:text-sm`}
			>
				{menuItems.length > 0 ? (
					menuItems.map((item) => (
						<li
							key={item.databaseId}
							className="text-gray-400 hover:text-gray-200"
						>
							<Link
								noDefaultStyles
								className="block px-1 py-1.5"
								href={item.uri}
							>
								{item.label}
							</Link>
						</li>
					))
				) : (
					<p>No menu items found</p>
				)}
			</ul>
		</nav>
	);
}
