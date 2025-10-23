import path from "node:path";
import { MDXClient } from "next-mdx-remote-client";
import { getMDXComponents } from "@/components/mdx-components";
import {
	getParsedDoc,
	getDocsNav,
	generateDocIdFromUri,
	findAppendForRoute,
} from "@/lib/remote-mdx-files.mjs";

export default function Doc({ source }) {
	return <MDXClient {...source} components={getMDXComponents()} />;
}

export async function getStaticProps({ params }) {
	try {
		const docsNavData = await getDocsNav("toolkit");

		const currentRoute =
			params.slug?.length > 1
				? path.join("/toolkit", ...params.slug, "/")
				: "/toolkit/";

		const append = findAppendForRoute(docsNavData, currentRoute);

		const source = await getParsedDoc(params.slug, "toolkit", append);

		return {
			props: {
				id: generateDocIdFromUri(
					params.slug?.length > 1
						? path.join("/toolkit", ...params.slug, "/")
						: "/toolkit/",
				),
				source,
				docsNavData,
			},
			revalidate: 600,
		};
	} catch (error) {
		if (error.notFound) {
			console.error(params, error);
			return error;
		}

		throw error;
	}
}

export async function getStaticPaths() {
	const toolkit_menu_paths = ["/toolkit/"];
	return {
		paths: toolkit_menu_paths,
		fallback: "blocking",
	};
}
