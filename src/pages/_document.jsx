import { env } from "node:process";
import { URL } from "node:url";
import { Html, Head, Main, NextScript } from "next/document";

const SITE_URL = env.NEXT_PUBLIC_SITE_URL;

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<link href="/images/favicon-32x32.png" rel="icon" sizes="32x32" />
				<link href="/images/favicon-192x192.png" rel="icon" sizes="192x192" />
				<link
					href={new URL("/api/feeds/feed.json", SITE_URL).href}
					rel="alternate"
					type="application/feed+json"
					title="WPGraphQL Blog JSON Feed"
				/>
				<link
					href={new URL("/api/feeds/rss.xml", SITE_URL).href}
					rel="alternate"
					type="application/rss+xml"
					title="WPGraphQL Blog XML Feed"
				/>
				<link
					href={new URL("/api/feeds/feed.atom", SITE_URL).href}
					rel="alternate"
					type="application/atom+xml"
					title="WPGraphQL Blog Atom Feed"
				/>
			</Head>
			<body className="bg-gray-900 text-gray-200">
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
