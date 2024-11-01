// pages/api/search-mdx.js

export default async function handler(req, res) {
  const { query } = req.query;
  const endpoint = process.env.NEXT_PUBLIC_SEARCH_ENDPOINT;
  const accessToken = process.env.NEXT_SEARCH_ACCESS_TOKEN;

  if (!query) {
    return res.status(400).json({ error: "Search query is required." });
  }

  const graphqlQuery = `
      query FindDocuments($query: String!) {
        find(query: $query) {
          total
          documents {
            id
            data
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
        variables: { query },
      }),
    });

    const result = await response.json();
    if (result.errors) {
      console.error("MDX GraphQL Errors:", result.errors);
      return res.status(500).json({ errors: result.errors });
    }

    const formattedResults = result.data.find.documents.map((doc) => ({
      id: doc.id,
      title: doc.data.title || "Untitled",
      snippet: doc.data.snippet || "No description available.",
      path: doc.data.path || "#",
      type: "doc",
    }));

    return res.status(200).json({ results: formattedResults });
  } catch (error) {
    console.error("Error fetching MDX data:", error);
    return res.status(500).json({ error: error.message });
  }
}
