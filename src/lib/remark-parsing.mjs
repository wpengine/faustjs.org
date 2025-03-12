import remarkFm from "remark-frontmatter";
import remarkParse from "remark-parse";
import remarkStringify from "remark-stringify";
import remarkStrip from "strip-markdown";
import { unified } from "unified";
import { matter } from "vfile-matter";

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
