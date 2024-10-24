import { gql } from "@apollo/client";
import Link from "next/link";

export const DOCS_SIDEBAR_QUERY = gql`
  query DocsSidebarMenu {
  	menu(id: "docs-sidebar", idType: NAME) {
  		menuItems {
  			nodes {
  				databaseId
  				label
  				uri
  			}
  		}
  	}
  }
`;

export default function DocsSidebar({ docsSidebarItems }) {
	return (
		<ul>
			{docsSidebarItems.map((item) => (
				<li key={item.databaseId}>
					<Link href={item.uri}>{item.label}</Link>
				</li>
			))}
		</ul>
	);
}
