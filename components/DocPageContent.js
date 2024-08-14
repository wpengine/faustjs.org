import { WordPressBlocksViewer } from "@faustwp/blocks";
import { flatListToHierarchical } from "@faustwp/core";

export default function DocPageContent({ doc }) {
  const { title, editorBlocks } = doc;
  const blockList = flatListToHierarchical(editorBlocks, {
    childrenKey: "innerBlocks",
  });

  return (
    <article className="prose prose-invert">
      <h1>{title}</h1>
      <WordPressBlocksViewer blocks={blockList} />
    </article>
  );
}
