import { gql } from "@apollo/client";
import { useFaustQuery } from "@faustwp/core";
import DocPage from "@/components/DocPage";
import { DOCS_SIDEBAR_QUERY } from "@/components/DocsSidebar";

const DOC_INTRO_PAGE = gql`
  query DocIntroPage {
    doc(id: "introduction", idType: SLUG) {
      title
      content
    }
  }
`;

export default function Docs() {
  const docsSidebarMenuData = useFaustQuery(DOCS_SIDEBAR_QUERY);
  const docsSidebarItems = docsSidebarMenuData.menu.menuItems.nodes;
  const { doc } = useFaustQuery(DOC_INTRO_PAGE);

  return <DocPage docsSidebarItems={docsSidebarItems} doc={doc} />;
}

Docs.queries = [
  {
    query: DOCS_SIDEBAR_QUERY,
  },
  {
    query: DOC_INTRO_PAGE,
  },
];
