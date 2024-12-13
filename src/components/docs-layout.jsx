import DocsNavigation from "./docs-navigation";

export default function DocsLayout({ children }) {
	return (
		// TODO: Mobile Menu
		<div className="container-main container prose prose-invert px-8 py-14 lg:px-16 lg:py-12">
			<div className="relative mx-auto max-w-screen-xl md:flex md:flex-row">
				<article className="mt-4 w-full min-w-0 max-w-4xl px-1 md:px-6">
					<div className="max-w-none">{children}</div>
				</article>
				<div className="sticky top-[75px] hidden h-[calc(100vh-75px)] w-[256px] md:flex md:shrink-0 md:flex-col md:justify-between">
					<DocsNavigation />
				</div>
			</div>
		</div>
	);
}
