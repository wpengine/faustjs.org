export default {
	siteUrl: "https://faustjs.org",
	generateRobotsTxt: true,
	exclude: ["/wp-sitemap.xml"], // <= exclude here

	robotsTxtOptions: {
		additionalSitemaps: [
			"https://faustjs.org/wp-sitemap.xml", // <==== Add here
		],
		policies: [
			{
				userAgent: "*",
				disallow: "/",
			},
		],
	},
};
