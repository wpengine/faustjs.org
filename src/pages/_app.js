import "../faust.config";
import { WordPressBlocksProvider } from "@faustwp/blocks";
import { useRouter } from "next/router";
import { FaustProvider } from "@faustwp/core";
import "./global.css";
import Layout from "@/components/Layout";
import "@faustwp/core/dist/css/toolbar.css";
import blocks from "@/wp-blocks";

export default function MyApp({ Component, pageProps }) {
	const router = useRouter();
	const isDocsPage = router.pathname.startsWith("/docs");
	const content = <Component {...pageProps} />;

	return (
		<FaustProvider pageProps={pageProps}>
			<WordPressBlocksProvider config={{ blocks, theme: undefined }}>
				<Layout>
					{isDocsPage ? (
						<div className="prose-lg prose-invert">{content}</div>
					) : (
						content
					)}
				</Layout>
			</WordPressBlocksProvider>
		</FaustProvider>
	);
}
