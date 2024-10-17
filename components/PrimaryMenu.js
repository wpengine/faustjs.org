import { gql, useQuery } from "@apollo/client";
import { useState, useEffect } from "react";
import Link from "next/link";

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
    <nav className="text-sm">
      <div className="flex items-center justify-between">
        <button
          className="text-2xl text-white md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>
      <ul
        className={`md:flex ${
          isOpen ? "mt-4 flex flex-col items-center" : "hidden"
        } md:flex-row md:gap-6`}
      >
        {menuItems.length > 0 ? (
          menuItems.map((item) => (
            <li
              key={item.databaseId}
              className="my-2 text-gray-400 hover:text-gray-200 md:my-0"
            >
              <Link href={item.uri}>{item.label}</Link>
            </li>
          ))
        ) : (
          <p>No menu items found</p>
        )}
      </ul>
    </nav>
  );
}
