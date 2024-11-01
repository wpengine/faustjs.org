import slugify from "@sindresorhus/slugify";
import Link from "@/components/link";

export default function OnThisPageNav({ editorBlocks }) {
	const headingBlocks = editorBlocks.filter(
		(block) =>
			block.name === "core/heading" &&
			(block.attributes.level === 2 || block.attributes.level === 3),
	);

	return (
		<>
			<h2 className="font-semibold">On This Page</h2>
			<ul className="mt-4 space-y-2.5 text-sm text-gray-400">
				{headingBlocks.map((block) => {
					const anchor =
						block.attributes.anchor || slugify(block.attributes.content);

					return (
						<li
							className={block.attributes.level === 3 ? "ml-4" : ""}
							key={block.id}
						>
							<Link
								dangerouslySetInnerHTML={{ __html: block.attributes.content }}
								href={`#${anchor}`}
							/>
						</li>
					);
				})}
			</ul>
		</>
	);
}
