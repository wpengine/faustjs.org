import { withFaust, getWpHostname } from "@faustwp/core";
import { withWPEConfig } from "@wpengine/atlas-next";
import { createSecureHeaders } from "next-secure-headers";
import redirectsOldSite from "./redirects-old-site.mjs";
import {
	DOCS_BRANCH,
	DOCS_FOLDER,
	DOCS_OWNER,
	DOCS_REPO,
} from "./src/constants/repo.mjs";

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
			{
				protocol: "https",
				hostname: "raw.githubusercontent.com",
				pathname: `/${DOCS_OWNER}/${DOCS_REPO}/refs/heads/${DOCS_BRANCH}/${DOCS_FOLDER}/**`,
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
			// Fix for ISR pages - ensure proper Cache-Control headers
			{
				source: "/blog/:path*",
				headers: [
					{
						key: "Cache-Control",
						value: "public, max-age=60, stale-while-revalidate=300",
					},
				],
			},
			{
				source: "/docs/:path*",
				headers: [
					{
						key: "Cache-Control",
						value: "public, max-age=600, stale-while-revalidate=3600",
					},
				],
			},
			// Ensure ISR pages have proper headers
			{
				source: "/:path*",
				headers: [
					{
						key: "Vary",
						value: "Accept-Encoding",
					},
				],
			},
		];
	},
};

export default withWPEConfig(withFaust(nextConfig));
