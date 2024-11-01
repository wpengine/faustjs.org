import { withFaust, getWpHostname } from "@faustwp/core";
import createMDX from "@next/mdx";
import { transformerNotationDiff } from "@shikijs/transformers";
import { createSecureHeaders } from "next-secure-headers";
import rehypeMdxImportMedia from "rehype-mdx-import-media";
import { rehypePrettyCode } from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import smartSearchPlugin from "@/lib/smart-search-plugin";
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
				source: "/discord",
				destination: "https://discord.gg/J2khkF9XYK",
				permanent: false,
			},
		];
	},
	images: {
		domains: [getWpHostname()],
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
		if (!isServer) {
			// Apply smartSearchPlugin only on the client side
			config.plugins.push(
				smartSearchPlugin({
					endpoint: process.env.NEXT_PUBLIC_SEARCH_ENDPOINT,
					accessToken: process.env.NEXT_SEARCH_ACCESS_TOKEN,
				}),
			);
		}
		return config;
	},
};

const withMDX = createMDX({
	options: {
		// remarkPlugins: [],
		rehypePlugins: [
			rehypeMdxImportMedia,
			rehypeSlug,
			[
				rehypePrettyCode,
				{
					transformers: [transformerNotationDiff()],
					theme: "github-dark-dimmed",
					defaultLang: "plaintext",
					bypassInlineCode: false,
				},
			],
		],
	},
});

export default withFaust(withMDX(nextConfig));
