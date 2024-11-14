import "../../faust.config";
import { WordPressBlocksProvider } from "@faustwp/blocks";
import { FaustProvider } from "@faustwp/core";
import "./global.css";
import Layout from "@/components/layout";
import "@faustwp/core/dist/css/toolbar.css";
import blocks from "@/wp-blocks";

export default function MyApp({ Component, pageProps }) {
	return (
		<FaustProvider pageProps={pageProps}>
			{/*  eslint-disable-next-line unicorn/no-null */}
			<WordPressBlocksProvider config={{ blocks, theme: null }}>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</WordPressBlocksProvider>
		</FaustProvider>
	);
}
