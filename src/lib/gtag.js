// eslint-disable-next-line no-restricted-globals, n/prefer-global/process
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_KEY;

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const logPageview = (url) => {
	window.gtag("config", GA_TRACKING_ID, {
		page_path: url,
	});
};
