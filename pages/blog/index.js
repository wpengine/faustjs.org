import { gql } from "@apollo/client";
import { getApolloClient } from "@faustwp/core";

import Link from "next/link";

// The Component is required
export default function BlogIndex(props) {
    const { loading, error, posts } = props;

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error! {error.message}</p>;

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="mb-8 text-3xl font-bold">Faust.js news</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.databaseId} className="mb-8">
                        <div className="mb-2 text-gray-600">
                            {new Date(post.date).toLocaleDateString()}
                        </div>
                        <Link href={post.uri}>

                            <h2 className="mb-2 text-2xl font-semibold">{post.title}</h2>

                        </Link>
                        <div
                            className="mb-4"
                            dangerouslySetInnerHTML={{ __html: post.excerpt }}
                        />
                        <Link href={post.uri} className="text-blue-500 hover:underline">
                            Read more
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export async function getStaticProps(ctx) {
    const client = getApolloClient(ctx);

    const { data } = await client.query({
        query: gql`
        query getPosts {
          posts {
            nodes {
              title
              excerpt
              date
              databaseId
              uri
            }
          }
        }
      `})
    return {
        props: {
            posts: data.posts.nodes,
        },
        revalidate: 60,
    }
}