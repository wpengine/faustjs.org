import fs from "node:fs";
import { env } from "node:process";
import { withFaust, getWpHostname } from "@faustwp/core";
import createMDX from "@next/mdx";
import { transformerNotationDiff } from "@shikijs/transformers";
import { createSecureHeaders } from "next-secure-headers";
import recmaNextjsStaticProps from "recma-nextjs-static-props";
import rehypeCallouts from "rehype-callouts";
import rehypeMdxImportMedia from "rehype-mdx-import-media";
import { rehypePrettyCode } from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import smartSearchPlugin from "./src/lib/smart-search-plugin.mjs";

const redirects = JSON.parse(fs.readFileSync("./redirects.json", "utf8"));
const oldSiteRedirects = JSON.parse(
	fs.readFileSync("./redirects-old-site.json", "utf8"),
);

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
	trailingSlash: true,
	reactStrictMode: true,
	pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
	sassOptions: {
		includePaths: ["node_modules"],
	},
	eslint: {
		ignoreDuringBuilds: true,
	},
	redirects() {
		return [...redirects, ...oldSiteRedirects];
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: getWpHostname(),
				pathname: "/**",
			},
		],
	},
	i18n: {
		locales: ["en"],
		defaultLocale: "en",
	},
	async headers() {
		return [
			{
				source: "/:path*",
				headers: createSecureHeaders({
					xssProtection: false,
				}),
			},
		];
	},
	webpack: (config, { isServer }) => {
		if (isServer) {
			config.plugins.push(
				smartSearchPlugin({
					endpoint: env.NEXT_PUBLIC_SEARCH_ENDPOINT,
					accessToken: env.NEXT_SEARCH_ACCESS_TOKEN,
				}),
			);
		}

		return config;
	},
};

const withMDX = createMDX({
	options: {
		recmaPlugins: [recmaNextjsStaticProps],
		remarkPlugins: [remarkGfm],
		rehypePlugins: [
			rehypeMdxImportMedia,
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

export default withFaust(withMDX(nextConfig));
