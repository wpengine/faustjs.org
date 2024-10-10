import React from "react";
import { gql, useQuery } from "@apollo/client";
import Link from "next/link";

export default function Footer() {
  const { data, loading, error } = useQuery(GET_FOOTER_NAV_ITEMS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error! {error.message}</p>;

  const { footer1MenuItems, footer2MenuItems, footer3MenuItems } = data;

  const renderFooterColumns = () => {
    const columns = [
      footer1MenuItems?.menuItems?.nodes,
      footer2MenuItems?.menuItems?.nodes,
      footer3MenuItems?.menuItems?.nodes,
    ];

    return columns.map((column, index) => {
      if (!column || column.length === 0) {
        return null; // Skip rendering if no menu items are found
      }

      const columnTitle = column[0]?.menu?.node?.name || "Menu";

      return (
        <div key={index} className="col-span-1 pb-8">
          <h6 className="mb-4 text-lg font-bold">{columnTitle}</h6>
          <ul>
            {column.map((item) => (
              <li key={item.id} className="mb-2">
                <Link
                  href={item.uri}
                  className="text-white transition duration-150 ease-in-out hover:text-gray-400">

                  {item.label}

                </Link>
              </li>
            ))}
          </ul>
        </div>
      );
    });
  };

  return (
    <footer className="bg-gray-900 py-8 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {renderFooterColumns()}
        </div>

        <div className="mt-8 text-center">
          <p className="text-lg text-white">
            Powered by Faust.js & WP Engine’s Headless WordPress platform
          </p>
          <p className="text-gray-400">
            &copy; 2013-{new Date().getFullYear()} WP Engine, Inc. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
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
