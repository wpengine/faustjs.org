import { gql } from "@apollo/client";
import { useFaustQuery } from "@faustwp/core";
import blocks from "@/wp-blocks";
import DocPage from "@/components/DocPage";
import { DOCS_SIDEBAR_QUERY } from "@/components/DocsSidebar";

const DOC_INTRO_PAGE = gql`
  query DocIntroPage {
    doc(id: "introduction", idType: SLUG) {
      title
      content
      editorBlocks {
        __typename
        name
        renderedHtml
        id: clientId
        parentId: parentClientId
        ...${blocks.CoreParagraph.fragments.key}
        ...${blocks.CoreColumns.fragments.key}
        ...${blocks.CoreColumn.fragments.key}
        ...${blocks.CoreCode.fragments.key}
        ...${blocks.CoreButtons.fragments.key}
        ...${blocks.CoreButton.fragments.key}
        ...${blocks.CoreQuote.fragments.key}
        ...${blocks.CoreImage.fragments.key}
        ...${blocks.CoreSeparator.fragments.key}
        ...${blocks.CoreList.fragments.key}
        ...${blocks.CoreHeading.fragments.key}
        ...${blocks.KevinbatdorfCodeBlockPro.fragments.key}
      }
    }
  }
  ${blocks.CoreParagraph.fragments.entry}
  ${blocks.CoreColumns.fragments.entry}
  ${blocks.CoreColumn.fragments.entry}
  ${blocks.CoreCode.fragments.entry}
  ${blocks.CoreButtons.fragments.entry}
  ${blocks.CoreButton.fragments.entry}
  ${blocks.CoreQuote.fragments.entry}
  ${blocks.CoreImage.fragments.entry}
  ${blocks.CoreSeparator.fragments.entry}
  ${blocks.CoreList.fragments.entry}
  ${blocks.CoreHeading.fragments.entry}
  ${blocks.KevinbatdorfCodeBlockPro.fragments.entry}
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
