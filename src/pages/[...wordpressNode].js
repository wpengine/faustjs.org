import { getWordPressProps, WordPressTemplate } from "@faustwp/core";

export default function Page(properties) {
	return <WordPressTemplate {...properties} />;
}

export function getStaticProps(context) {
	return getWordPressProps({ ctx: context });
}

export async function getStaticPaths() {
	return {
		paths: [],
		fallback: "blocking",
	};
}
