import { MDXRemote } from "next-mdx-remote";
import { useMDXComponents } from "@/components/mdx-components";
import { getParsedDoc, getDocsNav } from "@/lib/remote-mdx-files";

export default function Doc({ source }) {
	return <MDXRemote {...source} components={useMDXComponents()} />;
}

export async function getStaticProps({ params }) {
	try {
		const { source } = await getParsedDoc(params.slug);
		const docsNavData = await getDocsNav();

		return {
			props: {
				source,
				docsNavData,
			},
			revalidate: 1,
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
		paths: docs_menu_paths ?? [],
		fallback: "blocking",
	};
}
