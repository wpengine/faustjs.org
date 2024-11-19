import { Html, Head, Main, NextScript } from "next/document";
import { GA_TRACKING_ID } from "@/lib/gtag";

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				{/* Global Site Tag (gtag.js) - Google Analytics */}
				<script
					async
					src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
				/>
				<script
					// eslint-disable-next-line react/no-danger
					dangerouslySetInnerHTML={{
						__html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
					}}
				/>
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
