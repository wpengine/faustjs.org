import { env } from "node:process";

const SITE_URL = env.NEXT_PUBLIC_SITE_URL;

export default {
	siteUrl: SITE_URL,
	generateRobotsTxt: true,
	exclude: ["/wp-sitemap.xml"],

	robotsTxtOptions: {
		additionalSitemaps: [
			`${SITE_URL}/wp-sitemap.xml`,
		],
		policies: [
			{
				userAgent: "*",
				allow: "/",
			},
		],
	},
};
