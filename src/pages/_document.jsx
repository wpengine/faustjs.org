import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<link href="/images/favicon-32x32.png" rel="icon" sizes="32x32" />
				<link href="/images/favicon-192x192.png" rel="icon" sizes="192x192" />
			</Head>
			<body className="bg-gray-900 text-gray-200">
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
