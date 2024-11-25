import { WordPressBlocksProvider } from "@faustwp/blocks";
import { FaustProvider } from "@faustwp/core";
import { useRouter } from "next/router";
import { useEffect } from "react";
import "../../faust.config";
import "./global.css";
import Layout from "@/components/layout";
import "@faustwp/core/dist/css/toolbar.css";
import * as gtag from "@/lib/gtag";
import blocks from "@/wp-blocks";

export default function MyApp({ Component, pageProps }) {
	const router = useRouter();

	// Record a Google Analytics pageview on route change
	useEffect(() => {
		const handleRouteChange = (url) => gtag.logPageview(url);

		router.events.on("routeChangeComplete", handleRouteChange);
		return () => {
			router.events.off("routeChangeComplete", handleRouteChange);
		};
	}, [router.events]);

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
