import { gql } from "@apollo/client";

export default function Document(props) {
  const { title, content } = props.data.doc;

  return (
    <>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </>
  );
}

Document.variables = ({ uri }) => {
  return { uri };
};

Document.query = gql`
  query GetDocByUri($uri: ID!) {
    doc(id: $uri, idType: URI) {
      content
      databaseId
      slug
      title
    }
  }
`;
