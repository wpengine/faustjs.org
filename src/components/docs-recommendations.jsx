import { useCallback, useEffect, useState } from "react";
import { HiOutlineArrowPath } from "react-icons/hi2";
import { useInView } from "react-intersection-observer";
import DocTypeTag from "./doc-type-tag";
import Link from "./link";

export default function DocsRecommended({ docID, count = 5 }) {
	const [recommendations, setRecommendations] = useState([]);
	const [loading, setLoading] = useState(true);

	const { ref, inView } = useInView({
		/* Optional options */
		threshold: 0.1,
		triggerOnce: true, // Fetch only once when the component comes into view
	});
	const fetchRecommendations = useCallback(async () => {
		try {
			const response = await fetch(
				`/api/recommend/?docID=${docID}&count=${count}`,
			);
			if (!response.ok) {
				throw new Error("Failed to fetch recommendations");
			}

			const data = await response.json();
			setRecommendations(data);
		} catch (error) {
			console.error("Error fetching recommendations:", error);
		} finally {
			setLoading(false);
		}
	}, [docID, count]);

	useEffect(() => {
		if (!inView) return;
		fetchRecommendations();
	}, [inView, fetchRecommendations]);

	return (
		<div
			ref={ref}
			className="docs-recommended bg-blue-1100/20 rounded-lg p-6 text-white shadow-lg ring-1 ring-blue-500/10"
		>
			<h2 className="pb-8 font-semibold">Related</h2>

			{loading ? (
				<HiOutlineArrowPath className="mx-auto h-5 w-5 animate-spin" />
			) : !recommendations || recommendations.length === 0 ? (
				<p>No related content available.</p>
			) : (
				<ul className="flex flex-col gap-4">
					{recommendations?.map((rec) => (
						<li key={rec.id}>
							<Link href={rec.href} prefetch={false}>
								<DocTypeTag type={rec.type} />
								{rec.title}
							</Link>
						</li>
					))}
				</ul>
			)}
		</div>
	);
}
