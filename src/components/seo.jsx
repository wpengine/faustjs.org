import process from "node:process"; // Import process from 'node:process'
import { URL } from "node:url"; // Import URL from the 'url' module
import Head from "next/head";

export default function SEO({ title, description, imageUrl, url }) {
	let canonicalUrl = url
		? new URL(url, process.env.NEXT_PUBLIC_SITE_URL)
		: undefined;

	// If the URL contains query parameters, strip them out
	if (canonicalUrl && canonicalUrl.includes("?")) {
		const stripQueryParameters = (path) => path.split("?")[0];
		canonicalUrl = stripQueryParameters(url);
		canonicalUrl = new URL(canonicalUrl, process.env.NEXT_PUBLIC_SITE_URL);
	}

	return (
		<Head>
			<meta content="website" property="og:type" />
			<meta content="summary_large_image" property="twitter:card" />

			{title && (
				<>
					<title>{`${title} | Faust.js`}</title>
					<meta content={title} name="title" />
					<meta content={title} property="og:title" />
					<meta content={title} property="twitter:title" />
				</>
			)}

			{description && (
				<>
					<meta content={description} name="description" />
					<meta content={description} property="og:description" />
					<meta content={description} property="twitter:description" />
				</>
			)}

			{imageUrl && (
				<>
					<meta content={imageUrl} property="og:image" />
					<meta content={imageUrl} property="twitter:image" />
				</>
			)}

			{canonicalUrl && (
				<>
					<link rel="canonical" href={canonicalUrl} />
					<meta content={canonicalUrl} property="og:url" />
					<meta content={canonicalUrl} property="twitter:url" />
				</>
			)}
		</Head>
	);
}
