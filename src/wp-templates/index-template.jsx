import { gql } from "@apollo/client";
import { WordPressBlocksViewer } from "@faustwp/blocks";
import { flatListToHierarchical, useFaustQuery } from "@faustwp/core";
import Head from "next/head";

const INDEX_TEMPLATE_QUERY = gql`
	query IndexTemplate($uri: String!) {
		node: nodeByUri(uri: $uri) {
			__typename
			uri
			... on NodeWithTitle {
				title
			}
			... on DatabaseIdentifier {
				databaseId
			}
			... on NodeWithEditorBlocks {
				editorBlocks {
					__typename
					name
					renderedHtml
					id: clientId
					parentId: parentClientId
				}
			}
			... on ContentNode {
				modified
				... on NodeWithContentEditor {
					content
				}
			}
		}
	}
`;

export default function IndexTemplate() {
	const { node } = useFaustQuery(INDEX_TEMPLATE_QUERY);

	if (!node) {
		return;
	}

	const { editorBlocks } = node;

	const blockList = flatListToHierarchical(editorBlocks, {
		childrenKey: "innerBlocks",
	});

	return (
		<>
			<Head>
				<title>{`${node?.title} - WPGraphQL for ACF`}</title>
			</Head>

			{node?.modified && (
				<div className="text-sm text-gray-500" id="last-updated">
					Last Updated:{" "}
					{new Date(node.modified).toLocaleDateString("en-us", {
						weekday: "long",
						year: "numeric",
						month: "short",
						day: "numeric",
					})}
				</div>
			)}
			<div className="prose prose-lg prose-invert mx-auto">
				<WordPressBlocksViewer blocks={blockList} />
			</div>
		</>
	);
}

IndexTemplate.queries = [
	{
		query: INDEX_TEMPLATE_QUERY,
		variables: ({ uri }) => ({ uri }),
	},
];
