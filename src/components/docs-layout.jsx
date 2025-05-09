import {
	Disclosure,
	DisclosureButton,
	DisclosurePanel,
} from "@headlessui/react";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import DocsBreadcrumbs from "./docs-breadcrumbs";
import DocsPreviousNextLinks from "./docs-previous-next-link";
import OnThisPageNav from "./on-this-page-nav";
import DocsNav from "@/components/docs-nav";
import Link from "@/components/link";
import Seo from "@/components/seo";
import "rehype-callouts/theme/vitepress";
import { generateGitHubEditUrl } from "@/lib/github";

const flattenRoutes = (routeConfig) => {
	const flatRoutes = [];

	const traverse = (innerRoutes, parentPath = "") => {
		for (const route of innerRoutes) {
			const fullPath = `${parentPath}${route.route}`;
			flatRoutes.push({ ...route, fullPath, parentPath });

			if (route.children) {
				traverse(route.children, `${parentPath}${route.route}`);
			}
		}
	};

	traverse(routeConfig);
	return flatRoutes;
};

export default function DocumentPage({
	children,
	docsNavData: routes,
	source: { frontmatter, scope },
}) {
	const flatRoutes = flattenRoutes(routes);
	const {
		query: { slug = [] },
	} = useRouter();

	// Build the path from slug
	const canonicalPath =
		Array.isArray(slug) && slug.length > 0
			? `/docs/${slug.join("/")}/`
			: "/docs/";

	const canonicalUrl = `${canonicalPath}`;

	return (
		<>
			<Seo
				title={frontmatter?.title ?? "FALLBACK TITLE"}
				description={frontmatter?.description}
				url={canonicalUrl}
			/>
			<Disclosure
				as="div"
				className="sticky top-[84px] z-5 border-b-[1px] border-gray-800 bg-gray-900/80 backdrop-blur-xs md:hidden"
			>
				<DisclosureButton className="group flex items-center rounded-md px-2 py-1.5 text-white/70 hover:text-white">
					<ChevronDownIcon className="relative z-20 hidden h-4 w-4 group-data-open:inline" />
					<ChevronRightIcon className="inline h-4 w-4 group-data-open:hidden" />
					<span className="pl-1">Menu</span>
				</DisclosureButton>
				<DisclosurePanel as="nav" className="hidden data-open:block">
					<DocsNav
						className="container-main h-screen max-h-screen overflow-y-scroll"
						routes={routes}
						isMobileMenu
					/>
				</DisclosurePanel>
			</Disclosure>
			<main
				id="main-content"
				className="relative mx-auto flex max-w-full grid-cols-[1fr_auto_1fr] flex-col gap-6 md:grid"
				style={{ lineHeight: "1.6em" }}
			>
				<nav className="custom-scrollbar sticky top-[84px] hidden h-[calc(100vh-84px)] w-64 overflow-y-auto p-4 md:block">
					<a href="#docs-article" className="faust-skip-link">
						Skip navigation
					</a>
					<DocsNav routes={routes} />
				</nav>
				<nav className="sticky top-[84px] order-last hidden h-[calc(100vh-84px)] w-[240px] overflow-y-auto p-6 lg:block">
					<OnThisPageNav headings={scope.toc} />

					<div className="my-6 border-t border-gray-700" />

					<Link
						className="text-xs leading-loose font-normal text-gray-400 no-underline hover:text-blue-500"
						href={generateGitHubEditUrl(slug.join("/"))}
						noDefaultStyles
					>
						Edit this doc on GitHub
					</Link>
				</nav>
				<article
					id="docs-article"
					className="container-main xs:py-20 prose prose-invert min-h-[calc(100vh-120px)] max-w-full py-0 sm:max-w-[80ch] sm:py-20 md:py-8"
				>
					<DocsBreadcrumbs routes={flatRoutes} />
					{frontmatter?.title && (
						<h1 className="article-title break-words">{frontmatter.title}</h1>
					)}
					{children}
					<DocsPreviousNextLinks routes={flatRoutes} />
				</article>
			</main>
		</>
	);
}
