// pages/api/search-wp.js

export default async function handler(req, res) {
  const { query } = req.query;
  const endpoint = process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_ENDPOINT;
  const accessToken = process.env.NEXT_SEARCH_ACCESS_TOKEN;

  if (!query) {
    return res.status(400).json({ error: "Search query is required." });
  }

  const graphqlQuery = `
    query WPPosts($searchTerm: String!) {
      posts(where: { search: $searchTerm }) {
        nodes {
          id
          title
          uri
          excerpt
        }
      }
    }
  `;

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        query: graphqlQuery,
        variables: { searchTerm: query },
      }),
    });

    const result = await response.json();
    if (result.errors) {
      console.error("WP GraphQL Errors:", result.errors);
      return res.status(500).json({ errors: result.errors });
    }

    const formattedResults = result.data.posts.nodes.map((post) => ({
      id: post.id,
      title: post.title || "Untitled",
      snippet: post.excerpt || "No description available.",
      path: `/blog${post.uri}`,
      type: "blog",
    }));

    return res.status(200).json({ results: formattedResults });
  } catch (error) {
    console.error("Error fetching WP data:", error);
    return res.status(500).json({ error: error.message });
  }
}
