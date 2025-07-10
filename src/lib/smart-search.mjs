import { env } from "node:process";
import { URL } from "node:url";

const url = env.NEXT_PUBLIC_SEARCH_ENDPOINT ?? "";
const token = env.NEXT_SEARCH_ACCESS_TOKEN ?? "";

// Field might need to be adjusted to include the correct field for your search index, e.g. "content", "post_title", etc.
export async function getContext(message) {
	const query = `query GetContext($message: String!) {
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

function cleanPath(filePath) {
	return (
		filePath
			.replace(/^\/?src\/pages/, "")
			.replace(/^\/?pages/, "")
			.replace(/\/index\.mdx$/, "")
			.replace(/\.mdx$/, "") || "/"
	);
}

export function normalizeSmartSearchResponse(results) {
	if (!results || !Array.isArray(results)) {
		throw new TypeError("An array of results was expected");
	}

	return results.map((result) => {
		const { id, data } = result;
		switch (data.post_type) {
			case "mdx_doc": {
				const path = data.post_url ? cleanPath(data.post_url) : "/";

				return {
					id,
					title: data.post_title,
					href: path,
					type: data.post_type,
					content: data.post_content,
				};
			}

			case "post":
			case "page": {
				return {
					id,
					title: data.post_title,
					href: new URL(data.post_url).pathname,
					type: data.post_type,
					content: data.post_content,
				};
			}

			default: {
				throw new TypeError(`Unknown content type: ${data.post_type}`);
			}
		}
	});
}

export const smartSearchConfig = {
	fields: ["post_title", "post_content"],
	chunking: {
		enabled: true,
	},
};
