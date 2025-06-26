import path from "node:path";
import { MDXClient } from "next-mdx-remote-client";
import { useMDXComponents } from "@/components/mdx-components";
import {
	getParsedDoc,
	getDocsNav,
	generateDocIdFromUri,
} from "@/lib/remote-mdx-files.mjs";

export default function Doc({ source }) {
	return <MDXClient {...source} components={useMDXComponents()} />;
}

export async function getStaticProps({ params }) {
	try {
		const source = await getParsedDoc(params.slug);
		const docsNavData = await getDocsNav();

		return {
			props: {
				id: generateDocIdFromUri(
					params.slug?.length > 1
						? path.join("/docs", ...params.slug, "/")
						: "/docs/",
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
	const docs_menu_paths = ["/docs/"];
	return {
		paths: docs_menu_paths,
		fallback: "blocking",
	};
}
