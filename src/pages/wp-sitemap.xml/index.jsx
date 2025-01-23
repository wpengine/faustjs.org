import { env } from "node:process";
import { URL } from "node:url";
import { gql } from "@apollo/client";
import { getApolloClient } from "@faustwp/core";
import { getServerSideSitemapLegacy } from "next-sitemap";

export const getServerSideProps = async (ctx) => {
	const client = getApolloClient();

	async function getPaginatedQuery(query, previousPosts = []) {
		const res = await client.query(query);

		const newPosts = [...previousPosts, ...res.data.posts.nodes];
		if (res.data.posts.pageInfo.hasNextPage) {
			return getPaginatedQuery(
				{
					query: query.query,
					variables: {
						after: res.data.posts.pageInfo.endCursor,
						first: query.variables.first,
					},
				},
				newPosts,
			);
		}

		return newPosts;
	}

	const posts = await getPaginatedQuery({
		query: gql`
			query getPosts($first: Int!, $after: String) {
				posts(first: $first, after: $after) {
					nodes {
						uri
						modified
					}
					pageInfo {
						hasNextPage
						endCursor
					}
				}
			}
		`,
		variables: { first: 10 },
	});

	const fields = posts.map((post) => ({
		loc: new URL(post.uri, env.NEXT_PUBLIC_SITE_URL).href, // Absolute url
		lastmod: post.modified,
	}));

	return getServerSideSitemapLegacy(ctx, fields);
};

// Default export to prevent next.js errors
export default function Sitemap() {}
