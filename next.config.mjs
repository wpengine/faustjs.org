import { withFaust, getWpHostname } from "@faustwp/core";
import { createSecureHeaders } from "next-secure-headers";
import withMDX from "@next/mdx";

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
	reactStrictMode: true,
	pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
	sassOptions: {
		includePaths: ["node_modules"],
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
};

export default withFaust(withMDX(nextConfig));
