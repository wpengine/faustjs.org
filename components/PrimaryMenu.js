import { gql, useQuery } from "@apollo/client";
import { useState } from "react";
import Link from "next/link";

export default function PrimaryMenu() {
  const { data, loading, error } = useQuery(GET_PRIMARY_NAV);
  const [isOpen, setIsOpen] = useState(false);

  if (loading) return <p>Loading...</p>;
  if (error) {
    console.error(error);
    return <p>Error loading navigation items.</p>;
  }

  const menuItems = data?.menu?.menuItems?.nodes || [];

  return (
    <nav className="bg-black text-white w-full p-4">
      <div className="flex justify-between items-center">
        <div className="text-xl font-bold"></div>
        <button
          className="md:hidden bg-transparent border-none text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>
      <ul
        className={`md:flex ${
          isOpen ? "flex flex-col items-center mt-4" : "hidden"
        } md:flex-row md:gap-5`}
      >
        {menuItems.length > 0 ? (
          menuItems.map((item) => (
            <li key={item.databaseId} className="md:my-0 my-2">
              <Link href={item.uri}>
                <a className="text-white no-underline hover:underline">
                  {item.label}
                </a>
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
