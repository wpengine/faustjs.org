import { gql } from "@apollo/client";

/**
 * Extracts a YouTube video ID from any of the common URL shapes:
 *   - https://www.youtube.com/watch?v=ID
 *   - https://youtu.be/ID
 *   - https://www.youtube.com/embed/ID
 *   - https://www.youtube.com/shorts/ID
 */
function getYouTubeId(url) {
	if (!url) return;
	try {
		// eslint-disable-next-line n/prefer-global/url
		const parsed = new URL(url);
		const host = parsed.hostname.replace(/^www\./, "");
		if (host === "youtu.be") {
			return parsed.pathname.slice(1).split("/")[0] || undefined;
		}

		if (host.endsWith("youtube.com") || host.endsWith("youtube-nocookie.com")) {
			if (parsed.pathname === "/watch") {
				return parsed.searchParams.get("v");
			}

			const match = parsed.pathname.match(
				/^\/(?:embed|shorts|v)\/(?<id>[^/?#]+)/,
			);
			if (match) return match.groups?.id;
		}
	} catch {
		// Fall through to regex below
	}

	const fallback = url.match(
		/(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/|v\/)|youtu\.be\/)(?<id>[\w-]{11})/,
	);
	return fallback ? fallback.groups?.id : undefined;
}

export default function CoreEmbed(props) {
	const { attributes, renderedHtml } = props;
	const { url, providerNameSlug, caption, className } = attributes ?? {};

	if (providerNameSlug === "youtube" || /youtu\.?be/i.test(url ?? "")) {
		const videoId = getYouTubeId(url);
		if (videoId) {
			return (
				<figure className={["my-6", className].filter(Boolean).join(" ")}>
					<div className="relative aspect-video w-full overflow-hidden rounded-lg">
						{/* eslint-disable-next-line react/iframe-missing-sandbox */}
						<iframe
							className="absolute inset-0 h-full w-full border-0"
							src={`https://www.youtube-nocookie.com/embed/${videoId}`}
							title={caption || "YouTube video"}
							loading="lazy"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							referrerPolicy="strict-origin-when-cross-origin"
							allowFullScreen
						/>
					</div>
					{caption ? (
						<figcaption
							className="mt-2 text-center text-sm text-gray-400"
							// eslint-disable-next-line react/no-danger
							dangerouslySetInnerHTML={{ __html: caption }}
						/>
					) : undefined}
				</figure>
			);
		}
	}

	// Fallback: trust whatever WP gave us.
	if (renderedHtml) {
		return (
			<div
				// eslint-disable-next-line react/no-danger
				dangerouslySetInnerHTML={{ __html: renderedHtml }}
			/>
		);
	}
}

CoreEmbed.displayName = "CoreEmbed";
CoreEmbed.config = { name: "CoreEmbed" };
CoreEmbed.fragments = {
	key: "CoreEmbedBlockFragment",
	entry: gql`
		fragment CoreEmbedBlockFragment on CoreEmbed {
			renderedHtml
			attributes {
				url
				providerNameSlug
				caption
				className
				type
			}
		}
	`,
};
