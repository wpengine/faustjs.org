import { gql, useQuery } from "@apollo/client";
import Link from "next/link";

export default function PrimaryMenu() {
  const { data, loading, error } = useQuery(GET_PRIMARY_NAV);

  if (loading) return <p>Loading...</p>;
  if (error) {
    console.error(error);
    return <p>Error loading navigation items.</p>;
  }

  const menuItems = data?.menu?.menuItems?.nodes || [];

  return (
    <nav className="flex gap-5">
      {menuItems.length > 0 ? (
        menuItems.map((item) => (
          <Link key={item.databaseId} href={item.uri}>
            {item.label}
          </Link>
        ))
      ) : (
        <p>No menu items found</p>
      )}
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
