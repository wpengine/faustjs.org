import DocsNav from "@/components/docs-nav";
// import OnThisPageNav from "@/components/on-this-page-nav";

import routes from "@/pages/docs/nav.json";

export default function DocumentPage({ children }) {
	return (
		<div className="lg:max-w-8xl mx-auto flex flex-col lg:flex-row gap-6 ">
			<nav className="w-60 p-6 lg:block ">
				<DocsNav routes={routes} />
			</nav>
			<main className="container-main container prose prose-invert prose-lg px-8 py-14 lg:px-16 lg:py-241">
				{children}
			</main>
			<section className="w-70 hidden p-6 min-[1100px]:block">
				{/* <OnThisPageNav editorBlocks={editorBlocks} /> */}
			</section>
		</div>
	);
}
