import path from "node:path";
import { MDXClient } from "next-mdx-remote-client";
import { getMDXComponents } from "@/components/mdx-components";
import {
	getParsedDoc,
	getDocsNav,
	generateDocIdFromUri,
} from "@/lib/remote-mdx-files.mjs";

export default function Doc({ source }) {
	return <MDXClient {...source} components={getMDXComponents()} />;
}

export async function getStaticProps({ params }) {
	try {
		const source = await getParsedDoc(params.slug, "toolkit");
		const docsNavData = await getDocsNav("toolkit");

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
