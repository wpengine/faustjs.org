export const PRIMARY_LOCATION = "PRIMARY";
export const FOOTER_LOCATION = "FOOTER_1";

export const FooterMenuSections = {
	downloads: "Downloads",
	community: "Community",
	wpengine: "WP Engine",
};

export const FooterMenus = [
	{
		id: "faust-cli",
		section: "downloads",
		uri: "https://www.npmjs.com/package/@faustwp/cli",
		label: "@faustwp/cli",
		target: "_blank",
	},
	{
		id: "faust-core",
		section: "downloads",
		uri: "https://www.npmjs.com/package/@faustwp/core",
		label: "@faustwp/core",
		target: "_blank",
	},
	{
		id: "faust-blocks",
		section: "downloads",
		uri: "https://www.npmjs.com/package/@faustwp/blocks",
		label: "@faustwp/blocks",
		target: "_blank",
	},
	{
		id: "faust-js-companion-plugin",
		section: "downloads",
		uri: "https://github.com/wpengine/faustjs/tree/canary/plugins/faustwp",
		label: "Faust.js Companion Plugin",
		target: "_blank",
	},
	{
		id: "wpgraphql-content-blocks",
		section: "downloads",
		uri: "https://github.com/wpengine/wp-graphql-content-blocks",
		label: "WPGraphQL Content Blocks",
		target: "_blank",
	},
	{
		id: "github",
		section: "community",
		uri: "https://github.com/wpengine/faustjs?ref=faustjs",
		label: "Github",
		target: "_blank",
	},
	{
		id: "twitter",
		section: "community",
		uri: "https://twitter.com/wpengine",
		label: "Twitter",
		target: "_blank",
	},
	{
		id: "youtube",
		section: "community",
		uri: "https://www.youtube.com/channel/UCh1WuL54XFb9ZI6m6goFv1g",
		label: "YouTube",
		target: "_blank",
	},
	{
		id: "dicord",
		section: "community",
		uri: "https://discord.com/invite/headless-wordpress-836253505944813629",
		label: "Headless Discord",
		target: "_blank",
	},
	{
		id: "privacy",
		section: "wpengine",
		uri: "/privacy-policy/",
		label: "Privacy Policy",
		target: "_self",
	},
	{
		id: "developers",
		section: "wpengine",
		uri: "https://developers.wpengine.com/?ref=faustjs",
		label: "Developers",
		target: "_blank",
	},
	{
		id: "hiring",
		section: "wpengine",
		uri: "https://wpengine.careers/?ref=faustjs",
		label: "We're Hiring!",
		target: "_blank",
	},
	{
		id: "hosting",
		section: "wpengine",
		uri: "https://wpengine.com/atlas?ref=faustjs",
		label: "Headless Hosting",
		target: "_blank",
	},
];
