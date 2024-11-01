import Head from "next/head";

export default function SEO({ title, description, imageUrl, url }) {
	if (!title && !description && !imageUrl && !url) {
		return;
	}

	return (
		<Head>
				<meta content="website" property="og:type" />
				<meta content="summary_large_image" property="twitter:card" />

				{title && (
					<>
						<title>{title}</title>
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

				{url && (
					<>
						<meta content={url} property="og:url" />
						<meta content={url} property="twitter:url" />
					</>
				)}
			</Head>
	);
}
