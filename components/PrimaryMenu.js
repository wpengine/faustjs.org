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
    <nav className="w-full bg-black p-4 text-white">
      <div className="flex items-center justify-between">
        <div className="text-xl font-bold"></div>
        <button
          className="border-none bg-transparent text-2xl text-white md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>
      <ul
        className={`md:flex ${
          isOpen ? "mt-4 flex flex-col items-center" : "hidden"
        } md:flex-row md:gap-5`}
      >
        {menuItems.length > 0 ? (
          menuItems.map((item) => (
            <li key={item.databaseId} className="my-2 md:my-0">
              <Link href={item.uri} className="text-white no-underline hover:underline">

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
