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

	const toc = [];

	editorBlocks &&
		editorBlocks
			.filter((blocks) => blocks?.attributes?.level)
			.map((block) => {
				if (block.attributes.level === 2 || block.attributes.level === 3) {
					const heading = {
						tagName: `h${block.attributes.level}`,
						children: [
							{
								type: "text",
								value: block.attributes.content,
							},
						],
					};
					toc.push(heading);
				}
			});

	const blockList = flatListToHierarchical(editorBlocks, {
		childrenKey: "innerBlocks",
	});

	console.log({
		editorBlocks,
		blockList,
	});

	return (
		<>
			<Head>
				<title>{`${node?.title} - WPGraphQL for ACF`}</title>
			</Head>

			{node?.modified && (
				<div className="text-sm text-gray-500" id="last-updated">
					Last Upated:{" "}
					{new Date(node.modified).toLocaleDateString("en-us", {
						weekday: "long",
						year: "numeric",
						month: "short",
						day: "numeric",
					})}
				</div>
			)}
			<WordPressBlocksViewer blocks={blockList} />

			{/* <h2>Raw editorBlocks</h2> */}
			{
				/**
				 *  uncomment to debug editorBlocks
				 *  <pre>{JSON.stringify(node.editorBlocks, null, 2)}</pre>
				 */
				// <pre>{JSON.stringify(node, null, 2)}</pre>
			}
		</>
	);
}

IndexTemplate.queries = [
	{
		query: INDEX_TEMPLATE_QUERY,
		variables: ({ uri }) => ({ uri }),
	},
];
