const redirectsOldSite = [
	{
		source: "/guide/how-to-create-a-block-from-a-third-party-plugin",
		destination: "/docs/how-to/custom-blocks/",
		permanent: true,
	},
	{
		source: "/guide/how-to-migrate-from-legacy-faust",
		destination: "/docs/how-to/migrate-from-legacy-faust/",
		permanent: true,
	},
	{
		source: "/tutorial/get-started-with-wp-graphql-content-blocks",
		destination: "/docs/how-to/rendering-blocks/",
		permanent: true,
	},
	{
		source: "/tutorial/react-components-to-gutenberg-blocks",
		destination: "/docs/how-to/react-components-to-blocks/",
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
		source: "/guide/how-to-register-decoupled-blocks",
		destination: "/docs/reference/blockset/",
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
		source: "/reference/wordpressblocksprovider",
		destination: "/docs/reference/wordpress-blocks-provider/",
		permanent: true,
	},
	{
		source: "/reference/getnextstaticprops",
		destination: "/docs/reference/get-next-static-props/",
		permanent: true,
	},
	{
		source: "/reference/useauth",
		destination: "/docs/how-to/authentication//",
		permanent: true,
	},
	{
		source: "/reference/getwordpressprops",
		destination: "/docs/reference/get-wordpress-props/",
		permanent: true,
	},
	{
		source: "/explanation/faq",
		destination: "/docs/",
		permanent: true,
	},
	{
		source: "/reference/withfaust",
		destination: "/docs/reference/with-faust/",
		permanent: true,
	},
	{
		source: "/reference/useblockstheme",
		destination: "/docs/reference/use-blocks-theme/",
		permanent: true,
	},
	{
		source: "/reference/getnextserversideprops",
		destination: "/docs/reference/get-next-server-side-props/",
		permanent: true,
	},
	{
		source: "/reference/getsitemapprops",
		destination: "/docs/reference/get-site-map-props/",
		permanent: true,
	},
	{
		source: "/reference/fromthemejson",
		destination: "/docs/reference/from-theme-json/",
		permanent: true,
	},
	{
		source: "/reference/uselogin",
		destination: "/docs/reference/use-login/",
		permanent: true,
	},
	{
		source: "/reference/uselogout",
		destination: "/docs/reference/use-logout/",
		permanent: true,
	},
	{
		source: "/reference/getapolloclient",
		destination: "/docs/",
		permanent: true,
	},
	{
		source: "/reference/debugging",
		destination: "/docs/",
		permanent: true,
	},
	{
		source: "/reference/getstyles",
		destination: "/docs/reference/get-styles/",
		permanent: true,
	},
	{
		source: "/reference/wordpressblocksviewer",
		destination: "/docs/reference/wordpress-blocks-viewer/",
		permanent: true,
	},
	{
		source: "/reference-page/",
		destination: "/docs/",
		permanent: true,
	},
	{
		source: "/contact",
		destination: "/",
		permanent: true,
	},
	{
		source: "/reference/seed-query",
		destination:
			"/docs/reference/faust-plugin-system-filters/#seedquerydocumentnode",
		permanent: true,
	},
	{
		source: "/reference/template-system",
		destination: "/docs/how-to/rendering-blocks/",
		permanent: true,
	},
	{
		source: "/reference/api-router",
		destination: "/docs/",
		permanent: true,
	},
	{
		source: "/reference/wordpress-plugin-settings/",
		destination: "/docs/how-to/basic-setup/",
		permanent: true,
	},
	{
		source: "/tag/:slug",
		destination: "/",
		permanent: true,
	},
	{
		source: "/reference/faust-plugin-system-filters",
		destination: "/docs/reference/faust-plugin-system-filters/",
		permanent: true,
	},
	{
		source: "/faust-update-feb-3-2023",
		destination: "/blog/",
		permanent: true,
	},
	{
		source: "/guide/debugging-with-vs-code",
		destination: "/docs/",
		permanent: true,
	},
	{
		source: "/guide/creating-a-custom-block",
		destination: "/docs/how-to/rendering-blocks/",
		permanent: true,
	},
	{
		source: "/reference/faust-wordpress-plugin-filters",
		destination: "/docs/reference/faust-plugin-system-filters/",
		permanent: true,
	},
	{
		source: "/guide/how-to-toggle-telemetry",
		destination: "/docs/explanation/telemetry/",
		permanent: true,
	},
	{
		source: "/guide/how-to-query-blocks",
		destination: "/docs/",
		permanent: true,
	},
	{
		source: "/tutorial/get-started-with-faust/",
		destination: "/docs/",
		permanent: true,
	},
	{
		source: "/reference/configuring-a-faust-plugin/",
		destination: "/docs/",
		permanent: true,
	},
	{
		source: "/faust-update-mar-15-2023",
		destination: "/blog/",
		permanent: true,
	},
	{
		source: "/faust-update-jan-18-202",
		destination: "/blog/",
		permanent: true,
	},
	{
		source: "/reference/wp-graphql-content-blocks-filters",
		destination: "/docs/",
		permanent: true,
	},
	{
		source: "/guide/how-to-use-apollo-dev-tools",
		destination: "/docs/",
		permanent: true,
	},
	{
		source: "/guide/how-to-deploy-your-faust-js-app",
		destination: "/docs/explanation/deploy-your-app/",
		permanent: true,
	},
	{
		source: "/reference/add-pagination-to-your-faust-js-site",
		destination: "/docs/",
		permanent: true,
	},
	{
		source: "/guide/how-to-use-the-faust-example-project",
		destination: "/docs/",
		permanent: true,
	},
	{
		source: "/guide/how-to-use-acf-blocks-with-acf-pro",
		destination: "/docs/",
		permanent: true,
	},
	{
		source: "/tutorial/get-started-with-gutenberg-blocks-provider-and-viewer",
		destination: "/docs/",
		permanent: true,
	},
	{
		source: "/tutorial/getting-started-with-the-block-support-example-project",
		destination: "/docs/",
		permanent: true,
	},
	{
		source: "/guide/how-to-migrate-portfolio-blueprint-to-new-faust-js",
		destination: "/docs/",
		permanent: true,
	},
	{
		source: "/guide/how-to-identify-legacy-faust/",
		destination: "/docs/",
		permanent: true,
	},
	{
		source: "/author/chriswiegman-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2",
		destination: "/",
		permanent: true,
	},
	{
		source: "/author/faustjsorg-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-3",
		destination: "/",
		permanent: true,
	},
	{
		source: "/a-retrospective-on-4-years-of-faust-js",
		destination: "/blog/a-retrospective-on-4-years-of-faust-js/",
		permanent: true,
	},
	{
		source: "/faust-we-made-contact",
		destination: "/blog/",
		permanent: true,
	},
	{
		source: "/taking-customer-inspired-up-a-level",
		destination: "/blog/",
		permanent: true,
	},
	{
		source: "/its-time-to-start-saying-goodbye-to-gqty",
		destination: "/blog/its-time-to-start-saying-goodbye-to-gqty/",
		permanent: true,
	},
	{
		source:
			"/faust-js-telemetry-please-help-us-understand-how-youre-using-faust-js",
		destination:
			"/blog/faust-js-telemetry-please-help-us-understand-how-youre-using-faust-js/",
		permanent: true,
	},
	{
		source: "/help-us-learn-about-how-you-use-faust-js",
		destination: "/blog/help-us-learn-about-how-you-use-faust-js/",
		permanent: true,
	},
	{
		source:
			"/announcing-app-router-support-and-a-pathway-to-turn-react-components-into-gutenberg-blocks",
		destination:
			"/blog/announcing-app-router-support-and-a-pathway-to-turn-react-components-into-gutenberg-blocks/",
		permanent: true,
	},
	{
		source: "/faust-js-showcase-october-2023",
		destination: "/blog/faust-js-showcase-october-2023/",
		permanent: true,
	},
	{
		source: "/whats-new-in-faust-js-october-2023",
		destination: "/blog/whats-new-in-faust-js-october-2023/",
		permanent: true,
	},
	{
		source: "/whats-new-in-faust-js-september-2023",
		destination: "/blog/whats-new-in-faust-js-september-2023/",
		permanent: true,
	},
	{
		source: "/faust-js-august-update",
		destination: "/blog/faust-js-august-update/",
		permanent: true,
	},
	{
		source: "/faust-js-new-features-and-more",
		destination: "/blog/faust-js-new-features-and-more/",
		permanent: true,
	},
	{
		source:
			"/announcing-a-block-library-to-get-you-started-with-faust-js-and-gutenberg",
		destination:
			"/blog/announcing-a-block-library-to-get-you-started-with-faust-js-and-gutenberg/",
		permanent: true,
	},
	{
		source: "/faust-js-updates-for-july-2023",
		destination: "/blog/faust-js-updates-for-july-2023/",
		permanent: true,
	},
	{
		source: "/powered-by-faust",
		destination: "/blog/",
		permanent: true,
	},
	{
		source: "/faust-update-may-01-2023",
		destination: "/blog/",
		permanent: true,
	},
	{
		source: "/faust-update-mar-1-2023",
		destination: "/blog/",
		permanent: true,
	},
	{
		source: "/faust-update-jan-18-2023",
		destination: "/blog/",
		permanent: true,
	},
	{
		source: "/faust-update-jan-04-2023",
		destination: "/blog/",
		permanent: true,
	},
	{
		source: "/sprint-25-update",
		destination: "/blog/sprint-25-update/",
		permanent: true,
	},
	{
		source: "/sprint-24-update",
		destination: "/blog/",
		permanent: true,
	},
	{
		source: "/sprint-23-update",
		destination: "/blog/sprint-23-update/",
		permanent: true,
	},
	{
		source: "/sprint-22-update",
		destination: "/blog/",
		permanent: true,
	},
	{
		source: "/sprint-21-update",
		destination: "/blog/sprint-21-update/",
		permanent: true,
	},
	{
		source: "/sprint-20-update",
		destination: "/blog/sprint-20-update/",
		permanent: true,
	},
	{
		source: "/sprint-19-update",
		destination: "/blog/sprint-19-update/",
		permanent: true,
	},
	{
		source: "/sprint-18-update",
		destination: "/blog/sprint-18-update/",
		permanent: true,
	},
	{
		source: "/sprint-17-update",
		destination: "/blog/sprint-17-update/",
		permanent: true,
	},
	{
		source: "/sprint-16-update",
		destination: "/blog/sprint-16-update/",
		permanent: true,
	},
	{
		source: "/sprint-15-update",
		destination: "/blog/sprint-15-update/",
		permanent: true,
	},
	{
		source: "/sprint-14-update",
		destination: "/blog/sprint-14-update/",
		permanent: true,
	},
	{
		source: "/the-future-of-faust",
		destination: "/blog/",
		permanent: true,
	},
	{
		source: "/upgrading-to-faustwp",
		destination: "/blog/upgrading-to-faustwp/",
		permanent: true,
	},
	{
		source: "/faust_showcase/koko",
		destination: "/showcase/",
		permanent: true,
	},
	{
		source: "/faust_showcase/socialwork-org",
		destination: "/showcase/",
		permanent: true,
	},
	{
		source: "/faust_showcase/combat-corner",
		destination: "/showcase/",
		permanent: true,
	},
	{
		source: "/faust_showcase/wpgraphql-com",
		destination: "/showcase/",
		permanent: true,
	},
];

export default redirectsOldSite;
