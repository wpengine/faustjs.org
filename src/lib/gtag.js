import process from "process"; // eslint-disable-line unicorn/prefer-node-protocol

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_KEY;

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const logPageview = (url) => {
	window.gtag("config", GA_TRACKING_ID, {
		page_path: url,
	});
};
