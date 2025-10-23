import rehypeUrlInspector from "@jsdevtools/rehype-url-inspector";
import { transformerNotationDiff } from "@shikijs/transformers";
import { serialize } from "next-mdx-remote-client/serialize";
import rehypeCallouts from "rehype-callouts";
import rehypeExternalLinks from "rehype-external-links";
import { rehypePrettyCode } from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkFlexibleToc from "remark-flexible-toc";
import remarkFm from "remark-frontmatter";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import withSmartQuotes from "remark-smartypants";
import remarkStringify from "remark-stringify";
import remarkStrip from "strip-markdown";
import { unified } from "unified";
import { matter } from "vfile-matter";
import { getRemoteImgUrl } from "./remote-mdx-files.mjs";
/**
 * Return Text Content of Markdown using unified
 *
 * @param {string} mdContent
 * @returns {Promise<import("vfile-matter/lib").VFile>}
 */
export async function getTextContentFromMd(mdContent) {
	return unified()
		.use(remarkParse)
		.use(addFrontmatterToVFile)
		.use(remarkFm)
		.use(remarkStrip)
		.use(remarkStringify)
		.process(mdContent);
}

function addFrontmatterToVFile() {
	return (_, file) => matter(file);
}

/**
 * Returns the parsed content of a document from its markdown content.
 *
 * @param {string} mdContent
 * @param {string} pageUrl
 * @returns {Promise<{
 * frontmatter: { title: string; description: string; }
 * compiledSource: string;
 * scope: { toc: { href: string; value: string; depth: number; }[]; }
 * }>}
 */
export async function getSerializedContextFromMd(
	mdContent,
	pageUrl,
	type = "docs",
) {
	return serialize({
		source: mdContent,
		options: {
			parseFrontmatter: true,
			vfileDataIntoScope: "toc",
			mdxOptions: {
				remarkPlugins: [
					[remarkGfm, { singleTilde: false }],
					withSmartQuotes,
					remarkFlexibleToc,
				],
				rehypePlugins: [
					[
						rehypeUrlInspector,
						{
							selectors: ["img[src]"],
							inspectEach: ({ url, node }) => {
								node.properties.src = getRemoteImgUrl(url, pageUrl, type);
							},
						},
					],
					// rehypeNextImageMetadata,
					[rehypeExternalLinks, { target: "_blank" }],
					rehypeSlug,
					rehypeCallouts,
					[
						rehypePrettyCode,
						{
							transformers: [
								transformerNotationDiff({
									matchAlgorithm: "v3",
								}),
							],
							theme: "github-dark-dimmed",
							defaultLang: "plaintext",
							bypassInlineCode: false,
						},
					],
				],
			},
		},
	});
}
