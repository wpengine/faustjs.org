import DocsSidebar from "@/components/DocsSidebar";
import DocPageContent from "@/components/DocPageContent";

export default function DocPage({ docsSidebarItems, doc }) {
  // const { editorBlocks } = doc;

  // TODO
  // let toc = [];

  // editorBlocks.map((block) => {
  //   if (!block.attributes || !block.attributes.level) {
  //     return null;
  //   }

  //   if (block.attributes.level === 2 || block.attributes.level === 3) {
  //     let heading = {
  //       tagName: `h${block.attributes.level}`,
  //       children: [
  //         {
  //           type: "text",
  //           value: block.attributes.content,
  //         },
  //       ],
  //     };
  //     toc.push(heading);
  //   }
  // });

  return (
    <div className="max-w-8xl mx-auto flex gap-6">
      <section className="hidden w-60 p-6 lg:block">
        <DocsSidebar docsSidebarItems={docsSidebarItems} />
      </section>
      <section className="flex-1 p-6">
        <DocPageContent doc={doc} />
      </section>
      <section className="hidden w-60 p-6 min-[1100px]:block">
        (On-this-page nav)
      </section>
    </div>
  );
}
