import { createHash } from "node:crypto";
import { getApolloClient } from "@faustwp/core/dist/mjs/client";
import { parseISO, compareAsc } from "date-fns"; // Replaced Temporal with date-fns
import { StatusCodes, getReasonPhrase } from "http-status-codes";
import { FEED_QUERY, createFeed } from "@/lib/feed";

const client = getApolloClient();

export default async function HandleFeeds(req, res) {
	try {
		// Get needed Request info
		const if_modified_since = req.headers["if-modified-since"];
		const if_none_match = req.headers["if-none-match"];
		const { "feed-type": feedType } = req.query;

		// Fetch content from WP
		const { data: feed_data } = await client.query({
			query: FEED_QUERY,
		});

		const last_modified = parseISO(
			feed_data.last_modified.nodes[0].modifiedGmt,
		); // Replaced Temporal.PlainDateTime.from

		// Create feed
		const feed = createFeed({ feed_data, last_modified });

		// Generate Response Body and Content-Type
		let resp;

		switch (feedType) {
			case "feed.json": {
				resp = {
					content_type: "application/feed+json",
					body: feed.json1(),
				};
				break;
			}

			case "feed.atom": {
				resp = {
					content_type: "application/atom+xml",
					body: feed.atom1(),
				};
				break;
			}

			case "rss.xml": {
				resp = {
					content_type: "application/rss+xml",
					body: feed.rss2(),
				};
				break;
			}

			default: {
				const error = new Error(getReasonPhrase(StatusCodes.NOT_FOUND));
				error.status = StatusCodes.NOT_FOUND;
				throw error;
			}
		}

		// Spec specifies hash being in quotes
		const etag_for_body = `"${createHash("md5")
			.update(resp.body)
			.digest("hex")}"`;

		res.setHeader("Vary", "if-modified-since, if-none-match");
		res.setHeader(
			"Cache-Control",
			"max-age=0, must-revalidate, stale-if-error=86400",
		);
		res.setHeader("Content-Type", resp.content_type);
		res.setHeader("ETag", etag_for_body);
		res.setHeader("Last-Modified", last_modified.toUTCString()); // Adjusted to use Date's toUTCString()

		if (
			// Checks if the `if_none_match` header matches current response' etag
			if_none_match === etag_for_body ||
			// Checks `if_modified_since` is after `last_modified`
			(if_modified_since &&
				compareAsc(last_modified, new Date(if_modified_since)) < 0) // Replaced Temporal.PlainDateTime.compare
		) {
			res.status(StatusCodes.NOT_MODIFIED);
			res.end();
		} else {
			res.status(StatusCodes.OK);
			res.end(resp.body);
		}
	} catch (error) {
		if (error.message && error.status) {
			res.status(error.status);
			res.send(error.message);
		} else {
			console.error(error);
			res.status(StatusCodes.INTERNAL_SERVER_ERROR);
			res.send(getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR));
		}
	}
}
