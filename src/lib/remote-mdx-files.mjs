import { hash } from "node:crypto";
import path from "node:path";
import { env } from "node:process";
import { Octokit } from "@octokit/core";
import {
	DOCS_OWNER,
	DOCS_REPO,
	DOCS_BRANCH,
	DOCS_FOLDER,
	TOOLKIT_OWNER,
	TOOLKIT_REPO,
	TOOLKIT_BRANCH,
	TOOLKIT_FOLDER,
} from "../constants/repo.mjs";
import { getSerializedContextFromMd } from "./remark-parsing.mjs";

if (!env.GITHUB_TOKEN) {
	throw new Error("GITHUB_TOKEN is required");
}

const octokit = new Octokit({
	auth: env.GITHUB_TOKEN,
});

const DOCS_EXT_REG = /(?<slug>.*)index.md(?:x?)$/i;
const IMG_PATH_REG = /^(?<path>\.\/)?(?<slug>.+)$/i;

function getRepoConfig(type = "docs") {
	switch (type) {
		case "toolkit": {
			return {
				owner: TOOLKIT_OWNER,
				repo: TOOLKIT_REPO,
				branch: TOOLKIT_BRANCH,
				folder: TOOLKIT_FOLDER,
			};
		}

		default: {
			return {
				owner: DOCS_OWNER,
				repo: DOCS_REPO,
				branch: DOCS_BRANCH,
				folder: DOCS_FOLDER,
			};
		}
	}
}

function getDocsPath(type = "docs") {
	const { owner, repo, branch, folder } = getRepoConfig(type);
	return `https://raw.githubusercontent.com/${owner}/${repo}/refs/heads/${branch}/${folder}`;
}

function getDocsNavConfigUrl(type = "docs") {
	return `${getDocsPath(type)}/nav.json`;
}

function docUrlFromSlug(slug = [], type = "docs") {
	return path.join(getDocsPath(type), ...slug, "index.md");
}

/**
 * Returns the URL of an image from its path and the URL of the page it's on.
 *
 * @param {string} imgPath
 * @param {string[]} pageUrl
 * @param {string} type
 * @returns
 */
function imgUrlFromPath(imgPath, pageUrl, type = "docs") {
	if (!Array.isArray(pageUrl)) {
		throw new TypeError("pageUrl should be an array");
	}

	return `${getDocsPath(type)}/${pageUrl.join("/")}/${imgPath}`;
}

/**
 * Returns the URL of an image from its local path and the URL of the page it's on.
 *
 * @param {string} localPath
 * @param {string[]} pageUrl
 * @param {string} type
 * @returns {string}
 */
export function getRemoteImgUrl(localPath, pageUrl, type = "docs") {
	return imgUrlFromPath(
		localPath.match(IMG_PATH_REG).groups.slug,
		pageUrl,
		type,
	);
}

/**
 * Retrieves the metadata for all documents in the docs folder.
 *
 * @param {string} type
 * @param {string} pathToFolder
 */
export async function getAllDocMeta(type = "docs", pathToFolder) {
	const { owner, repo, branch, folder } = getRepoConfig(type);
	const { status, data } = await octokit.request(
		"GET /repos/{owner}/{repo}/contents/{path}",
		{
			owner,
			repo,
			path: pathToFolder ?? folder,
			ref: branch, // This makes it so only released features show up in the docs.
		},
	);

	if (status !== 200) {
		throw new Error(status);
	}

	const items = [];

	const subItems = [];

	for (const item of data) {
		if (item.type === "file" && item.name === "index.md") {
			items.push(item);
		} else if (item.type === "dir" && item.name !== "images") {
			subItems.push(getAllDocMeta(type, item.path));
		}
	}

	const subFolderItems = await Promise.all(subItems);

	return [...items, ...subFolderItems.flat()];
}

/**
 * Retrieves the nav.json file from the docs folder.
 *
 * @param {string} type
 */
export async function getDocsNav(type = "docs") {
	const resp = await fetch(getDocsNavConfigUrl(type));

	if (!resp.ok) {
		throw new Error(resp.statusText);
	}

	return resp.json();
}

export async function getAllDocUri(type = "docs") {
	const data = await getAllDocMeta(type);

	if (!Array.isArray(data)) {
		console.error(data);
		throw new Error("GitHub response should be an array");
	}

	const accumulator = [];
	for (const file of data) {
		if (DOCS_EXT_REG.test(file.path)) {
			accumulator.push(getDocUriFromPath(file.path, type));
		}
	}

	return accumulator;
}

export function getDocUriFromPath(ghPath, type = "docs") {
	const { folder } = getRepoConfig(type);
	const relativePath = path.relative(folder, ghPath);
	return path.join("/", relativePath.match(DOCS_EXT_REG).groups.slug);
}

/**
 * Retrieves the content of a document from its slug.
 *
 * @param {string} url
 * @returns {Promise<string>}
 */
export async function getRawDocContent(url) {
	const resp = await fetch(url);

	if (!resp.ok) {
		if (resp.status >= 400 && resp.status < 500) {
			// eslint-disable-next-line no-throw-literal
			throw { notFound: true };
		}

		throw new Error(resp.statusText);
	}

	return resp.text();
}

/**
 * Retrieves the parsed content of a document from its slug.
 *
 * @param {string} slug
 * @param {string} type
 * @returns {ReturnType<typeof import("./remark-parsing.mjs").getSerializedContextFromMd>}
 */
export async function getParsedDoc(slug, type = "docs") {
	const content = await getRawDocContent(docUrlFromSlug(slug, type));

	return getSerializedContextFromMd(content, slug, type);
}

/**
 * Generates Document ID from a URI
 *
 * @param {string} uri
 * @returns {string}
 */
export function generateDocIdFromUri(uri) {
	return `mdx:${hash("sha-1", uri)}`;
}
