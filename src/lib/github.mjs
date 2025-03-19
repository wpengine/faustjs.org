import {
	DOCS_BRANCH,
	DOCS_FOLDER,
	DOCS_OWNER,
	DOCS_REPO,
} from "@/constants/repo.mjs";

/**
 * Generates a URL for editing a document on GitHub.
 *
 * @param {string} slug slug with no beginning or trailing slashes
 * @returns
 */
export function generateGitHubEditUrl(slug) {
	return `https://github.com/${DOCS_OWNER}/${DOCS_REPO}/edit/${DOCS_BRANCH}/${DOCS_FOLDER}/${slug}/index.md`;
}
