import path from "node:path";
import { env } from "node:process";
import rehypeUrlInspector from "@jsdevtools/rehype-url-inspector";
import { Octokit } from "@octokit/core";
import { transformerNotationDiff } from "@shikijs/transformers";
import { serialize } from "next-mdx-remote/serialize";
import rehypeCallouts from "rehype-callouts";
import rehypeExternalLinks from "rehype-external-links";
import { rehypePrettyCode } from "rehype-pretty-code";
// import rehypePrism from "rehype-prism-plus";
import rehypeSlug from "rehype-slug";
import remarkStringify from "rehype-stringify";
import remarkFm from "remark-frontmatter";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import withSmartQuotes from "remark-smartypants";
import slugger from "slugger";
import { unified } from "unified";
import { visit } from "unist-util-visit";

const octokit = new Octokit({
	auth: env.GITHUB_TOKEN,
});

const DOCS_OWNER = "wpengine";
const DOCS_REPO = "faustjs";
// @TODO: Change to `main/canary` for production
const DOCS_BRANCH = "new-docs";
const DOCS_FOLDER = "docs";
const DOCS_EXT_REG = new RegExp(`${DOCS_FOLDER}\/(?<slug>.*)\.md(x?)$`, "i");
const IMG_PATH_REG = /^(?<path>\.\/)?(?<slug>.+)$/i;

const DOCS_PATH = `https://raw.githubusercontent.com/${DOCS_OWNER}/${DOCS_REPO}/${DOCS_BRANCH}/${DOCS_FOLDER}`;

const DOCS_NAV_CONFIG_URL = `${DOCS_PATH}/nav.json`;

function docUrlFromSlug(slug = []) {
	return path.join(DOCS_PATH, ...slug, "index.mdx");
}

function imgUrlFromPath(imgPath) {
	return `${DOCS_PATH}/${imgPath}`;
}

export function getRemoteImgUrl(localPath) {
	return imgUrlFromPath(localPath.match(IMG_PATH_REG).groups.slug);
}

export async function getAllDocMeta() {
	const { status, data } = await octokit.request(
		"GET /repos/{owner}/{repo}/contents/{path}",
		{
			owner: DOCS_OWNER,
			repo: DOCS_REPO,
			path: DOCS_FOLDER,
			ref: DOCS_BRANCH, // This makes it so only released features show up in the docs.
		},
	);

	if (status !== 200) {
		throw new Error(status);
	}

	console.log("docMeta Data", data);

	return data;
}

export async function getDocsNav() {
	const resp = await fetch(DOCS_NAV_CONFIG_URL);

	if (!resp.ok) {
		throw new Error(resp.statusText);
	}

	return resp.json();
}

export async function getAllDocUri() {
	const data = await getAllDocMeta();

	if (!Array.isArray(data)) {
		console.error(data);
		throw new Error("GitHub response should be an array");
	}

	const accumulator = [];
	for (const file of data) {
		if (DOCS_EXT_REG.test(file.path)) {
			accumulator.push(`/docs/${file.path.match(DOCS_EXT_REG).groups.slug}`);
		}
	}

	return accumulator;
}

export async function getDocContent(slug) {
	const resp = await fetch(docUrlFromSlug(slug));

	if (!resp.ok) {
		if (resp.status >= 400 && resp.status < 500) {
			throw { notFound: true };
		}

		throw new Error(resp.statusText);
	}

	return resp.text();
}

export async function getParsedDoc(url) {
	const content = await getDocContent(url);

	const [source, toc] = await Promise.all([
		getSourceFromMd(content),
		getTOCFromMd(content),
	]);

	return { source, toc };
}

async function getSourceFromMd(mdContent) {
	return serialize(mdContent, {
		parseFrontmatter: true,
		mdxOptions: {
			remarkPlugins: [[remarkGfm, { singleTilde: false }], withSmartQuotes],
			rehypePlugins: [
				[
					rehypeUrlInspector,
					{
						selectors: ["img[src]"],
						inspectEach: ({ url, node }) => {
							node.properties.src = getRemoteImgUrl(url);
						},
					},
				],
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
	});
}

async function getTOCFromMd(mdContent) {
	const toc = [];
	const parentId = null;

	await unified()
		.use(remarkParse)
		.use(remarkFm)
		.use(remarkRehype)
		.use(() => {
			return (tree) => {
				visit(tree, "element", (node) => {
					if (
						(node.tagName === "h2" || node.tagName === "h3") &&
						node.children[0].value
					) {
						const title = node.children[0]?.value;
						const id = slugger(title);

						toc.push({
							tagName: node.tagName,
							id,
							title: title ?? "title",
							parentId: node.tagName === "h2" ? null : parentId,
						});
					}
				});
			};
		})
		.use(remarkStringify)
		.process(mdContent);

	return toc;
}
