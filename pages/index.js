import { gql, useQuery } from "@apollo/client";
import { getNextStaticProps } from "@faustwp/core";


// The Component is required
export default function Index() {
    const { data } = useQuery(Index.query);
  return (
    <>
      <h1>{data.page.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: data.page.content }} />
    </>
  );
}

Index.query = gql`
  query GetIndexPage {
    page(id: "/", idType: URI) {
      title
      content
      slug
    }
  }
`;

export async function getStaticProps(ctx) {
  return getNextStaticProps(ctx, {
    Page: Index,
    revalidate: 60,
  });
}
