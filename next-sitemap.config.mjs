import { env } from "node:process";
import { URL } from "node:url";

const SITE_URL = env.NEXT_PUBLIC_SITE_URL;
const HP_ENV_NAME = env.HEADLESS_METADATA_ENV_NAME;

const policy =
	HP_ENV_NAME === "faust-prod"
		? {
				userAgent: "*",
				allow: "/",
			}
		: {
				userAgent: "*",
				disallow: "/",
			};

export default {
	siteUrl: SITE_URL,
	generateRobotsTxt: true,
	exclude: ["/wp-sitemap.xml"], // <= exclude here

	robotsTxtOptions: {
		additionalSitemaps: [
			new URL("/wp-sitemap.xml", SITE_URL), // <==== Add here
		],
		policies: [policy],
	},
};
