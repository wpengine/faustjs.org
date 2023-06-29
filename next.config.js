const { withFaust, getWpHostname } = require('@faustwp/core');

/**
 * @type {import('next').NextConfig}
 **/
module.exports = withFaust({
  images: {
    remotePatterns: [
      {
        hostname: getWpHostname(),
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/docs/reference/useBlocksTheme',
        destination: '/reference/useblockstheme',
        permanent: true,
      },
      {
        source: '/docs/reference/getWordPressProps',
        destination: '/reference/getwordpressprops',
        permanent: true,
      },
      {
        source: '/docs/faustwp/filters',
        destination: '/reference/faust-wordpress-plugin-filters',
        permanent: true,
      },
      {
        source: '/docs/gutenberg/how-to-query-blocks',
        destination: '/guide/how-to-query-blocks',
        permanent: true,
      },
      {
        source: '/docs/gutenberg/tutorial/create-a-custom-block',
        destination: '/guide/creating-a-custom-block',
        permanent: true,
      },
      {
        source: '/docs/debugging',
        destination: '/reference/debugging',
        permanent: true,
      },
      {
        source: '/docs/guides/plugins',
        destination: '/reference/configuring-a-faust-plugin',
        permanent: true,
      },
      {
        source: '/docs/guides/custom-post-types',
        destination: '/guide/setting-up-custom-post-types-cpts-in-faust',
        permanent: true,
      },
      {
        source: '/docs/guides/typescript',
        destination: '/guide/how-to-implement-typescript',
        permanent: true,
      },
      {
        source: '/docs/getting-started',
        destination: '/tutorial/get-started-with-faust',
        permanent: true,
      },
      {
        source: '/docs/next/guides/project-walkthrough',
        destination: '/guide/how-to-use-the-faust-example-project',
        permanent: true,
      },
      {
        source: '/docs/next/guides/post-page-previews',
        destination: '/guide/how-to-setup-post-and-page-previews',
        permanent: true,
      },
      {
        source: '/docs/auth',
        destination: '/guide/how-to-handle-authentication',
        permanent: true,
      },
      {
        source: '/docs/apollo',
        destination: '/guide/how-to-use-apollo-in-faust',
        permanent: true,
      },
      {
        source: '/docs/guides/sitemaps',
        destination: '/guide/how-to-use-sitemaps',
        permanent: true,
      },
      {
        source: '/docs/migrationPath/portfolio-migration',
        destination:
          '/guide/how-to-migrate-portfolio-blueprint-to-new-faust-js',
        permanent: true,
      },
      {
        source: '/docs/faustwp/settings',
        destination: '/reference/wordpress-plugin-settings',
        permanent: true,
      },
      {
        source: '/docs/faustwp/seed-query',
        destination: '/reference/seed-query',
        permanent: true,
      },
      {
        source: '/docs/reference/useAuth',
        destination: '/reference/useauth',
        permanent: true,
      },
      {
        source: '/docs/reference/useLogin',
        destination: '/reference/uselogin',
        permanent: true,
      },
      {
        source: '/docs/reference/useLogout',
        destination: '/reference/uselogout',
        permanent: true,
      },
      {
        source: '/docs/going-to-production/deployment',
        destination: '/guide/how-to-deploy-your-faust-js-app',
        permanent: true,
      },
      {
        source: '/docs/telemetry',
        destination: '/guide/how-to-toggle-telemetry',
        permanent: true,
      },
      {
        source: '/docs/reference/WordPressBlocksProvider',
        destination: '/reference/wordpressblocksprovider',
        permanent: true,
      },
      {
        source: '/docs/reference/WordPressBlocksViewer',
        destination: '/reference/wordpressblocksviewer',
        permanent: true,
      },
      {
        source: '/docs/plugin-system/creating-a-plugin',
        destination: '/guide/how-to-create-a-plugin',
        permanent: true,
      },
      {
        source: '/docs/reference/getSitemapProps',
        destination: '/reference/getsitemapprops',
        permanent: true,
      },
      {
        source: '/docs/plugin-system/filters',
        destination: '/reference/faust-plugin-system-filters',
        permanent: true,
      },
      {
        source: '/docs/gutenberg/getting-started',
        destination:
          '/tutorial/get-started-with-gutenberg-blocks-provider-and-viewer',
        permanent: true,
      },
      {
        source: '/docs/gutenberg/filters',
        destination: '/reference/wp-graphql-content-blocks-filters',
        permanent: true,
      },
      {
        source: '/docs/gutenberg/migration-from-wp-graphql-gutenberg',
        destination: '/guide/how-to-migrate-from-wp-graphql-gutenberg',
        permanent: true,
      },
      {
        source: '/docs/gutenberg/wp-graphql-content-blocks',
        destination: '/tutorial/get-started-with-wp-graphql-content-blocks',
        permanent: true,
      },
      {
        source: '/docs/gutenberg/tutorial/create-a-block-from-wordpress-core',
        destination:
          '/guide/how-to-create-a-block-from-the-wordpress-blocks-list',
        permanent: true,
      },
      {
        source: '/docs/gutenberg/tutorial/create-a-block-from-third-party',
        destination: '/guide/how-to-create-a-block-from-a-third-party-plugin',
        permanent: true,
      },
      {
        source: '/docs/migrationPath/overview',
        destination: '/guide/how-to-migrate-from-legacy-faust',
        permanent: true,
      },
      {
        source: '/docs/faq',
        destination: '/explanation/faq',
        permanent: true,
      },
      {
        source: '/docs/next/reference/getNextServerSideProps',
        destination: '/reference/getnextserversideprops',
        permanent: true,
      },
      {
        source: '/docs/next/reference/getNextStaticProps',
        destination: '/reference/getnextstaticprops',
        permanent: true,
      },
      {
        source: '/docs/templates',
        destination: '/reference/template-system',
        permanent: true,
      },
      {
        source: '/docs/guides/custom-toolbar',
        destination: '/guide/how-to-customize-the-toolbar',
        permanent: true,
      },
      {
        source: '/blog/:slug*',
        destination: '/:slug*',
        permanent: true,
      },
    ];
  },
});
