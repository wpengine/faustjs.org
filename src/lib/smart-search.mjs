import { env } from "node:process";

const url = env.NEXT_PUBLIC_SEARCH_ENDPOINT ?? "";
const token = env.NEXT_SEARCH_ACCESS_TOKEN ?? "";

// Field might need to be adjusted to include the correct field for your search index, e.g. "content", "post_title", etc.
export async function getContext(message) {
	const query = `query GetRagContext($message: String!) {
    similarity(
      input: {
        nearest: {
          text: $message,
          field: "post_content"
        }
      }) {
      total
      docs {
        id
        data
        score
      }
    }
  }`;

	const response = await fetch(url, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${token}`,
		},
		body: JSON.stringify({ query, variables: { message } }),
	});

	return response.json();
}
