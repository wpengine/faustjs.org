import { useEffect, useState } from "react";
import Link from "@/components/link";
import { classNames } from "@/utils/strings";

export default function OnThisPageNav({ headings }) {
	const [activeId, setActiveId] = useState();

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
			<h2 className="py-2 font-semibold">On This Page</h2>
			{headings.length > 0 && (
				<ul className="mt-4 text-sm text-gray-400">
					{headings.map((heading) => (
						<li
							key={heading.href}
							className={classNames(
								{
									"ml-2 border-l-[1px] border-gray-800 pl-3":
										heading.depth === 3,
									"active text-blue-500":
										activeId === heading.href.replace("#", ""),
								},
								"w-full py-2 break-words whitespace-normal",
							)}
						>
							<Link href={heading.href} noDefaultStyles>
								{heading.value}
							</Link>
						</li>
					))}
				</ul>
			)}
		</>
	);
}
