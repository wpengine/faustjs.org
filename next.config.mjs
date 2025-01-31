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
		return [
			{
				source: "/tutorial/get-started-with-wp-graphql-content-blocks",
				destination: "/docs/how-to/rendering-blocks/",
				permanent: true,
			},
			{
				source: "/guide/how-to-use-sitemaps",
				destination: "/docs/how-to/sitemaps/",
				permanent: true,
			},
			{
				source: "/guide/how-to-customize-the-toolbar",
				destination: "/docs/how-to/customize-the-toolbar/",
				permanent: true,
			},
			{
				source: "/guide/setting-up-custom-post-types-cpts-in-faust",
				destination: "/docs/how-to/setup-cpt-in-faustjs/",
				permanent: true,
			},
			{
				source: "/guide/how-to-create-a-plugin",
				destination: "/docs/how-to/create-a-plugin/",
				permanent: true,
			},
			{
				source: "/guide/how-to-use-apollo-in-faust",
				destination: "/docs/how-to/use-wpgraphql-smart-cache/",
				permanent: true,
			},
			{
				source: "/guide/how-to-migrate-from-wp-graphql-gutenberg",
				destination: "/docs/explanation/migrate-from-wp-graphql-gutenberg/",
				permanent: true,
			},
			{
				source: "/guide/how-to-setup-post-and-page-previews",
				destination: "/docs/how-to/post-previews/",
				permanent: true,
			},
			{
				source: "/guide/how-to-handle-authentication",
				destination: "/docs/how-to/authentication/",
				permanent: true,
			},
			{
				source: "/guide/how-to-implement-typescript",
				destination: "/docs/how-to/generate-types-with-graphql-codegen/",
				permanent: true,
			},
			{
				source: "/tutorial/get-started-with-wp-graphql-content-blocks",
				destination: "/docs/how-to/rendering-blocks/",
				permanent: true,
			},
			{
				source: "/tutorial/getting-started-with-the-experimental-app-router",
				destination:
					"https://github.com/wpengine/faustjs/blob/archive-experimental-app-router/packages/experimental-app-router/docs/getting-started.md",
				permanent: true,
			},
			{
				source: "/reference/faustroutehandler",
				destination:
					"https://github.com/wpengine/faustjs/blob/archive-experimental-app-router/packages/experimental-app-router/docs/faustroutehandler.md",
				permanent: true,
			},
			{
				source: "/reference/getauthclient",
				destination:
					"https://github.com/wpengine/faustjs/blob/archive-experimental-app-router/packages/experimental-app-router/docs/getauthclient.md",
				permanent: true,
			},
			{
				source: "/reference/getclient",
				destination:
					"https://github.com/wpengine/faustjs/blob/archive-experimental-app-router/packages/experimental-app-router/docs/getclient.md",
				permanent: true,
			},
			{
				source: "/reference/onlogin-server-action",
				destination:
					"https://github.com/wpengine/faustjs/blob/archive-experimental-app-router/packages/experimental-app-router/docs/onlogin-server-action.md",
				permanent: true,
			},
			{
				source: "/reference/onlogout-server-action",
				destination:
					"https://github.com/wpengine/faustjs/blob/archive-experimental-app-router/packages/experimental-app-router/docs/onlogout-server-action.md",
				permanent: true,
			},
			{
				source: "/discord",
				destination: "https://discord.gg/headless-wordpress-836253505944813629",
				permanent: false,
			},
		];
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
