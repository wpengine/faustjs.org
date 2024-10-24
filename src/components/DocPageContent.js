import { WordPressBlocksViewer } from "@faustwp/blocks";
import { flatListToHierarchical } from "@faustwp/core";

export default function DocumentPageContent({ doc }) {
	const { title, editorBlocks } = doc;
	const blockList = flatListToHierarchical(editorBlocks, {
		childrenKey: "innerBlocks",
	});

	return (
		<article className="prose-lg prose-invert">
			<h1>{title}</h1>
			<WordPressBlocksViewer blocks={blockList} />
		</article>
	);
}
