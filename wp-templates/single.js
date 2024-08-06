import { gql } from "@apollo/client";
import Link from "next/link";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";

// GraphQL Query
const GET_POST_BY_URI = gql`
  query GetPostByURI($uri: ID!) {
    post(id: $uri, idType: URI) {
      title
      date
      author {
        node {
          name
        }
      }
      editorBlocks {
        ...CoreParagraphFragment
      }
    }
  }

  fragment CoreParagraphFragment on CoreParagraph {
    attributes {
      content
    }
  }
`;

// Single Post Component
export default function SinglePost(props) {
  const { loading, error, data } = props;

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error! {error.message}</p>;

  const { title, date, author, editorBlocks } = data.post;

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
      <div className="prose prose-lg prose-invert">
        {editorBlocks.map((block, index) => (
          <div
            key={index}
            dangerouslySetInnerHTML={{ __html: block.attributes.content }}
          />
        ))}
      </div>
    </div>
  );
}

SinglePost.query = GET_POST_BY_URI;

SinglePost.variables = (seedQuery, context) => {
  return {
    uri: seedQuery?.uri,
  };
};
