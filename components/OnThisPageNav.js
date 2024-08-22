import slugify from "@sindresorhus/slugify";

export default function OnThisPageNav({ editorBlocks }) {
  const headingBlocks = editorBlocks.filter((block) => {
    return (
      block.name === "core/heading" &&
      (block.attributes.level === 2 || block.attributes.level === 3)
    );
  });

  return (
    <>
      <h2 className="font-semibold">On This Page</h2>
      <ul className="mt-4 space-y-2.5 text-sm text-gray-400">
        {headingBlocks.map((block) => {
          const anchor = !block.attributes.anchor
            ? slugify(block.attributes.content)
            : block.attributes.anchor;

          return (
            <li
              key={block.id}
              className={block.attributes.level === 3 ? "ml-4" : ""}
            >
              <a href={`#${anchor}`}>{block.attributes.content}</a>
            </li>
          );
        })}
      </ul>
    </>
  );
}
