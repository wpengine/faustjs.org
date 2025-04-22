import Head from "next/head";

export default function SEO({ title, description, imageUrl, url }) {
	let canonicalUrl = undefined;

	if (url) {
		// eslint-disable-next-line no-restricted-globals, n/prefer-global/process, n/prefer-global/url
		const urlObject = new URL(url, process.env.NEXT_PUBLIC_SITE_URL);
		// Remove any query string as search is writable so we remove any potential query string
		urlObject.search = "";
		canonicalUrl = urlObject.toString();
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
