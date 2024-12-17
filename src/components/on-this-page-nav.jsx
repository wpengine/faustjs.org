import { useEffect, useState } from "react";
import Link from "@/components/link";
import { classNames } from "@/utils/strings";

export default function OnThisPageNav({ children }) {
	const [headings, setHeadings] = useState([]);
	const [activeId, setActiveId] = useState();

	useEffect(() => {
		const headingsArray = [];
		const headingElements = document.querySelectorAll("h2, h3");

		for (const heading of headingElements) {
			if (heading.id) {
				headingsArray.push({
					id: heading.id,
					text: heading.textContent,
					level: Number.parseInt(heading.tagName[1], 10),
				});
			}
		}

		setHeadings(headingsArray);
	}, [children]);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						setActiveId(entry.target.id);
					}
				}
			},
			{
				rootMargin: "0px 0px -50% 0px",
				threshold: 0,
			},
		);

		const headingElements = document.querySelectorAll("h2, h3");
		for (const heading of headingElements) observer.observe(heading);
		return () => {
			observer.disconnect(); // Cleanup observer on unmount
		};
	}, [headings]);

	return (
		<>
			<h2 className="font-semibold">On This Page</h2>
			{headings.length > 0 ? (
				<ul className="mt-4 space-y-2.5 text-sm text-gray-400">
					{headings.map((heading) => (
						<li
							key={heading.id}
							className={classNames(
								{ "active text-blue-500": activeId === heading.id },
								{ "ml-4": heading.level === 3 },
								"w-full whitespace-normal break-words",
							)}
						>
							<Link href={`#${heading.id}`} noDefaultStyles>
								{heading.text}
							</Link>
						</li>
					))}
				</ul>
			) : (
				<p>Loading...</p>
			)}
		</>
	);
}
