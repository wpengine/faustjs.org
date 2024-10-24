import DocsSidebar from "@/components/docs-sidebar";
import OnThisPageNav from "@/components/on-this-page-nav";

export default function DocumentPage({ docsSidebarItems, doc }) {
	const { editorBlocks } = doc;

	return (
		<div className="max-w-8xl mx-auto flex gap-6">
			<section className="hidden w-60 p-6 lg:block">
				<DocsSidebar docsSidebarItems={docsSidebarItems} />
			</section>
			<section className="flex-1 p-6">
				{/* <DocPageContent doc={doc} /> */}
			</section>
			<section className="w-70 hidden p-6 min-[1100px]:block">
				<OnThisPageNav editorBlocks={editorBlocks} />
			</section>
		</div>
	);
}
