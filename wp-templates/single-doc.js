import { gql } from "@apollo/client";
import { useFaustQuery } from "@faustwp/core";
import DocPage from "@/components/DocPage";
import { DOCS_SIDEBAR_QUERY } from "@/components/DocsSidebar";

const DOC_QUERY = gql`
  query GetDocByUri($uri: ID!) {
    doc(id: $uri, idType: URI) {
      content
      databaseId
      slug
      title
    }
  }
`;

export default function Doc(props) {
  const docsSidebarMenuData = useFaustQuery(DOCS_SIDEBAR_QUERY);
  const docsSidebarItems = docsSidebarMenuData.menu.menuItems.nodes;
  const { doc } = useFaustQuery(DOC_QUERY);

  return <DocPage docsSidebarItems={docsSidebarItems} doc={doc} />;
}

Doc.queries = [
  {
    query: DOCS_SIDEBAR_QUERY,
  },
  {
    query: DOC_QUERY,
    variables: ({ uri }) => ({ uri }),
  },
];
