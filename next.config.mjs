import { env } from "node:process";
import { withFaust, getWpHostname } from "@faustwp/core";
import { withWPEConfig } from "@wpengine/atlas-next";
import { createSecureHeaders } from "next-secure-headers";
// import recmaNextjsStaticProps from "recma-nextjs-static-props";
// import remarkGfm from "remark-gfm";
import redirectsOldSite from "./redirects-old-site.mjs";
import smartSearchPlugin from "./src/lib/smart-search-plugin.mjs";

const newRedirects = [
	{
		source: "/discord",
		destination: "https://discord.gg/headless-wordpress-836253505944813629",
		permanent: false,
	},
	{
		source: "/community-meeting",
		destination:
			"https://discord.gg/headless-wordpress-836253505944813629?event=1336404483013480588",
		permanent: false,
	},
];

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
		return [...redirectsOldSite, ...newRedirects];
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

// const withMDX = createMDX({
// 	options: {
// 		recmaPlugins: [recmaNextjsStaticProps],
// 		remarkPlugins: [remarkGfm],
// 		rehypePlugins: [
// 			rehypeCallouts,

// 		],
// 	},
// });

export default withWPEConfig(withFaust(nextConfig));
