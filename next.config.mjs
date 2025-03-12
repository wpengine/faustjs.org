import { withFaust, getWpHostname } from "@faustwp/core";
import { withWPEConfig } from "@wpengine/atlas-next";
import { createSecureHeaders } from "next-secure-headers";
import redirectsOldSite from "./redirects-old-site.mjs";
import { DOCS_PATH } from "./src/lib/remote-mdx-files.mjs";

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
				pathname: DOCS_PATH + "/**",
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
};

export default withWPEConfig(withFaust(nextConfig));
