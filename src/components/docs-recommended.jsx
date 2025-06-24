import { useEffect, useState } from "react";

export default function DocsRecommended({ docID, count = 5 }) {
	const [recommendations, setRecommendations] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		async function fetchRecommendations() {
			try {
				const response = await fetch(
					`/api/recommend?docID=${docID}&count=${count}`,
				);
				if (!response.ok) {
					throw new Error("Failed to fetch recommendations");
				}

				const data = await response.json();
				setRecommendations(data.recommendations);
			} catch (error) {
				console.error("Error fetching recommendations:", error);
			} finally {
				setLoading(false);
			}
		}

		fetchRecommendations();
	}, [docID, count]);

	if (loading) {
		return <div>Loading recommendations...</div>;
	}

	if (recommendations.length === 0) {
		return <div>No recommendations available.</div>;
	}

	return (
		<div className="docs-recommended">
			<h2>Recommended Articles</h2>
			<ul>
				{recommendations.map((rec) => (
					<li key={rec.docID}>
						<a href={rec.source}>{rec.source}</a> (Score: {rec.score.toFixed(2)}
						)
					</li>
				))}
			</ul>
		</div>
	);
}
