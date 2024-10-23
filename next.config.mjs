import { withFaust, getWpHostname } from "@faustwp/core";
import { createSecureHeaders } from "next-secure-headers";
import createMDX from "@next/mdx";
import rehypeMdxImportMedia from 'rehype-mdx-import-media'
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import { transformerNotationDiff } from '@shikijs/transformers';

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

const withMDX = createMDX({
  options: {
    // remarkPlugins: [],
    rehypePlugins: [rehypeMdxImportMedia, rehypeSlug, [rehypePrettyCode, {
      transformers: [transformerNotationDiff()],
      theme: 'github-dark-dimmed',
    }]],
  }
});

export default withFaust(withMDX(nextConfig));
