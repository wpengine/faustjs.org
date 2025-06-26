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
		if (data.content_type === "mdx_doc") {
			const path = data.path ? cleanPath(data.path) : "/";

			return {
				id,
				title: data.title,
				href: path,
				type: data.content_type,
			};
		} else if (["post", "page"].includes(data.post_type)) {
			return {
				id,
				title: data.post_title,
				href: new URL(data.post_url).pathname,
				type: data.post_type,
			};
		} else {
			throw new TypeError(
				`Unknown content type: ${data.content_type ?? data.post_type}`,
			);
		}
	});
}
