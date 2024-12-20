import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";

export default function DocsPageTitle() {
	const [metadata, setMetadata] = useState();
	const router = useRouter();

	useEffect(() => {
		const fetchMetadata = async () => {
			try {
				const path = router.asPath.replace("/docs", "").replace(/\/$/, "");

				const pageData = await import(`../pages/docs${path}/index.mdx`).then(
					(module) => module.metadata,
				);
				setMetadata(pageData);
			} catch (error) {
				console.error("Failed to load metadata:", error);

				return <h1>Docs</h1>;
			}
		};

		if (router.isReady) {
			fetchMetadata();
		}
	}, [router.isReady, router.asPath]);

	if (!metadata) {
		return <h1>Docs</h1>;
	}

	return <h1>{metadata.title}</h1>;
}
