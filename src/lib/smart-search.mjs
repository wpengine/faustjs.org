import { URL } from "node:url";

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
		// console.log("Data:", result);
		switch (data.post_type) {
			case "mdx_doc": {
				const path = data.post_url ? cleanPath(data.post_url) : "/";

				return {
					id,
					title: data.post_title,
					href: path,
					type: data.post_type,
				};
			}

			case "post":
			case "page": {
				return {
					id,
					title: data.post_title,
					href: new URL(data.post_url).pathname,
					type: data.post_type,
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
