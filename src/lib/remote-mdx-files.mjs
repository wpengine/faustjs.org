import path from "node:path";
import { env } from "node:process";
import { Octokit } from "@octokit/core";
import {
	DOCS_OWNER,
	DOCS_REPO,
	DOCS_BRANCH,
	DOCS_FOLDER,
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

export const DOCS_PATH = `https://raw.githubusercontent.com/${DOCS_OWNER}/${DOCS_REPO}/refs/heads/${DOCS_BRANCH}/${DOCS_FOLDER}`;

const DOCS_NAV_CONFIG_URL = `${DOCS_PATH}/nav.json`;

function docUrlFromSlug(slug = []) {
	return path.join(DOCS_PATH, ...slug, "index.md");
}

/**
 * Returns the URL of an image from its path and the URL of the page it's on.
 *
 * @param {string} imgPath
 * @param {string[]} pageUrl
 * @returns
 */
function imgUrlFromPath(imgPath, pageUrl) {
	if (!Array.isArray(pageUrl)) {
		throw new TypeError("pageUrl should be an array");
	}

	return `${DOCS_PATH}/${pageUrl.join("/")}/${imgPath}`;
}

/**
 * Returns the URL of an image from its local path and the URL of the page it's on.
 *
 * @param {string} localPath
 * @param {string[]} pageUrl
 * @returns {string}
 */
export function getRemoteImgUrl(localPath, pageUrl) {
	return imgUrlFromPath(localPath.match(IMG_PATH_REG).groups.slug, pageUrl);
}

/**
 * Retrieves the metadata for all documents in the docs folder.
 *
 */
export async function getAllDocMeta(pathToFolder = DOCS_FOLDER) {
	const { status, data } = await octokit.request(
		"GET /repos/{owner}/{repo}/contents/{path}",
		{
			owner: DOCS_OWNER,
			repo: DOCS_REPO,
			path: pathToFolder,
			ref: DOCS_BRANCH, // This makes it so only released features show up in the docs.
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
			subItems.push(getAllDocMeta(item.path));
		}
	}

	const subFolderItems = await Promise.all(subItems);

	return [...items, ...subFolderItems.flat()];
}

/**
 * Retrieves the nav.json file from the docs folder.
 *
 */
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
			accumulator.push(getDocUriFromPath(file.path));
		}
	}

	return accumulator;
}

export function getDocUriFromPath(ghPath) {
	return path.join("/", ghPath.match(DOCS_EXT_REG).groups.slug);
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
 * @returns {ReturnType<typeof import("./remark-parsing.mjs").getSerializedContextFromMd>}
 */
export async function getParsedDoc(slug) {
	const content = await getRawDocContent(docUrlFromSlug(slug));

	return getSerializedContextFromMd(content, slug);
}
