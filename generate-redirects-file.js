import fs from "node:fs";

const GRAPHQL_ENDPOINT = "https://faustjsorg.wpengine.com/graphql";

const QUERY = `{
	posts(first: 100) {
		nodes {
			uri
		}
	}
	showcases {
		nodes {
			uri
		}
	}
}`;

async function createRedirectFile($filename) {
	try {
		const response = await fetch(GRAPHQL_ENDPOINT, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ query: QUERY }),
		});

		const { data } = await response.json();

		if (!data) throw new Error("No data returned from WPGraphQL.");

		const nonMigratedPosts = new Set([
			"/faust-we-made-contact/",
			"/taking-customer-inspired-up-a-level/",
			"/powered-by-faust/",
			"/faust-update-may-01-2023/",
			"/faust-update-mar-15-2023/",
			"/faust-update-mar-1-2023/",
			"/faust-update-feb-3-2023/",
			"/faust-update-jan-18-2023/",
			"/faust-update-jan-04-2023/",
			"/sprint-24-update/",
			"/sprint-22-update/",
			"/the-future-of-faust/",
		]);

		const urls = [
			...data.posts.nodes.map((post) => ({
				source: post.uri,
				destination: nonMigratedPosts.has(post.uri)
					? "/blog/"
					: "/blog" + post.uri,
				permanent: true,
			})),
			...data.showcases.nodes.map((post) => ({
				source: post.uri,
				destination: "/showcase/",
				permanent: true,
			})),
		];

		await fs.promises.writeFile($filename, JSON.stringify(urls, undefined, 2));

		console.log("Redirect file created.");
	} catch (error) {
		console.error("Error creating the redirect file. Error:", error);
	}
}

await createRedirectFile("redirects-old-site.json");
