import { gql, useQuery } from "@apollo/client";
import { WordPressBlocksViewer } from "@faustwp/blocks";
import { flatListToHierarchical, getNextStaticProps } from "@faustwp/core";
import blocks from "@/wp-blocks";

export default function SinglePost(properties) {
	const {
		loading,
		error,
		data: { post },
	} = useQuery(SinglePost.query, {
		variables: properties.__PAGE_VARIABLES__,
	});

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error! {error.message}</p>;

	const { title, date, author, editorBlocks } = post;
	const blockList = flatListToHierarchical(editorBlocks, {
		childrenKey: "innerBlocks",
	});

	return (
		<div className="container mx-auto px-4 py-8">
			<h1 className="mb-4 text-3xl font-bold">{title}</h1>
			<p className="mb-8 text-white">
				{author.node.name} &middot;{" "}
				{new Date(date).toLocaleDateString("en-US", {
					year: "numeric",
					month: "short",
					day: "numeric",
				})}
			</p>
			<div className="prose-lg prose-invert">
				<WordPressBlocksViewer blocks={blockList} />
			</div>
		</div>
	);
}

SinglePost.query = gql`
  query GetPostByURI($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      title
      date
      author {
        node {
          name
        }
      }
      editorBlocks {
        __typename
        name
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
        ...${blocks.CoreCode.fragments.key}
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
  ${blocks.CoreCode.fragments.entry}
`;

SinglePost.variables = ({ params }) => ({ slug: params.slug });

export async function getStaticProps(context) {
	return getNextStaticProps(context, {
		Page: SinglePost,
		revalidate: 3_600,
	});
}

export async function getStaticPaths() {
	return {
		paths: [],
		fallback: "blocking",
	};
}
