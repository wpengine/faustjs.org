import { env } from "node:process";
import { URL } from "node:url";
import { gql } from "@apollo/client";
import { format } from "date-fns-tz";
import { Feed } from "feed";

const SITE_URL = env.NEXT_PUBLIC_SITE_URL;

export const FEED_QUERY = gql`
	query BlogFeedQuery {
		generalSettings {
			title
			description
			timezone
		}
		posts(where: { orderby: { field: DATE, order: DESC } }, first: 10) {
			nodes {
				title
				uri
				excerpt
				content
				dateGmt
				modifiedGmt
				author {
					node {
						name
						url
					}
				}
				categories {
					nodes {
						name
						slug
						uri
					}
				}
			}
		}
		last_modified: posts(
			where: { orderby: { field: MODIFIED, order: DESC } }
			first: 1
		) {
			nodes {
				modifiedGmt
			}
		}
	}
`;

export function createFeed({ feed_data, last_modified }) {
	const feed = new Feed({
		title: `${feed_data.generalSettings.title} Blog`,
		description: feed_data.generalSettings.description,
		id: new URL("/blog/", SITE_URL).href,
		link: new URL("/blog/", SITE_URL).href,
		language: "en",
		image: new URL("/favicon-192x192.png", SITE_URL).href,
		favicon: new URL("/favicon-32x32.png", SITE_URL).href,
		copyright: format(new Date(), "yyyy", {
			timeZone: feed_data.generalSettings.timezone,
		}),
		updated: new Date(last_modified.toString()),
		feedLinks: {
			json: new URL("/api/feeds/feed.json", SITE_URL).href,
			atom: new URL("/api/feeds/feed.atom", SITE_URL).href,
			rss: new URL("/api/feeds/rss.xml", SITE_URL).href,
		},
	});

	for (const post of feed_data?.posts?.nodes || []) {
		const author = post.author.node;
		const categories = post.categories.nodes;

		feed.addItem({
			id: post.id,
			title: post.title,
			link: new URL(post.uri, SITE_URL).href,
			description: post.excerpt,
			content: post.content,
			date: new Date(post.modifiedGmt),
			published: new Date(post.dateGmt),
			author: [
				{
					name: author.name,
					link: author.url,
				},
			],
			category: categories.map((category) => {
				const link = new URL(category.uri, SITE_URL).href;
				return {
					term: category.slug,
					scheme: link,
					domain: link,
					name: category.name,
				};
			}),
		});
	}

	return feed;
}
