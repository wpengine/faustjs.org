/* eslint-disable n/prefer-global/process */
/* eslint-disable no-restricted-globals */
import { WordPressBlocksProvider } from "@faustwp/blocks";
import { FaustProvider } from "@faustwp/core";
import { GoogleAnalytics } from "@next/third-parties/google";
import { useRouter } from "next/router";
import DocsLayout from "@/components/docs-layout";
import Layout from "@/components/layout";
import blocks from "@/wp-blocks";
import "../../faust.config";
import "./global.css";
import "@faustwp/core/dist/css/toolbar.css";

const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID;

export default function MyApp({ Component, pageProps }) {
	const router = useRouter();
	const isDocsRoute = router.pathname.startsWith("/docs");

	return (
		<FaustProvider pageProps={pageProps}>
			<GoogleAnalytics gaId={GA_TRACKING_ID} />
			{/*  eslint-disable-next-line unicorn/no-null */}
			<WordPressBlocksProvider config={{ blocks, theme: null }}>
				<Layout>
					{isDocsRoute ? (
						<DocsLayout {...pageProps}>
							<Component {...pageProps} />
						</DocsLayout>
					) : (
						<Component {...pageProps} />
					)}
				</Layout>
			</WordPressBlocksProvider>
		</FaustProvider>
	);
}
