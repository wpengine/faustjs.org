import { withFaust, getWpHostname } from "@faustwp/core";
import { createSecureHeaders } from "next-secure-headers";
import createMDX from "@next/mdx";
import rehypeMdxImportMedia from 'rehype-mdx-import-media'
import rehypeHighlight from "rehype-highlight";
import rehypeHighlightCodeLines from "rehype-highlight-code-lines";
import rehypeSlug from "rehype-slug";

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
    rehypePlugins: [rehypeMdxImportMedia, rehypeSlug, rehypeHighlight, [rehypeHighlightCodeLines, {
      showLineNumbers: true, lineContainerTagName: 'div',
    }]],
  }
});

export default withFaust(withMDX(nextConfig));
