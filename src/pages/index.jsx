import {
	ArrowTopRightOnSquareIcon,
	ChevronRightIcon,
	CodeBracketIcon,
	CursorArrowRaysIcon,
	KeyIcon,
	RectangleGroupIcon,
} from "@heroicons/react/24/outline";
import Card from "@/components/card";
import Link from "@/components/link";

// The Component is required
export default function Index() {
	return (
		<main>
			<section className="bg-100-full bg-default-pos bg-hero-gradient">
				<div className="container-main container prose prose-invert mt-0 md:prose-lg lg:prose-2xl prose-h1:mb-2 prose-h1:font-bold prose-h1:leading-tight">
					<div className="mx-auto max-w-4xl px-8 py-14 text-center lg:py-24">
						<h1 className="bg-gradient-to-br from-purple-300 to-teal-300 bg-clip-text text-transparent">
							The Headless WordPress Toolkit for Next.js
						</h1>
						<p className="mx-auto max-w-xl">
							A robust set of tools for Next.js that unlock powerful headless
							WordPress capabilities.
						</p>
						<p className="not-prose inline-flex gap-4">
							<Link
								className="not-prose text-gray-1000 group inline-flex items-center gap-1 rounded-full border border-blue-800/20 bg-gradient-to-tr from-blue-600/50 from-20% to-blue-900/50 px-8 py-2 text-base leading-none tracking-tight shadow-lg backdrop-blur-lg transition duration-75 hover:border-gray-100/50 hover:bg-gradient-to-tl hover:from-gray-100/70 hover:to-white/70 hover:text-gray-900 hover:backdrop-blur-xl lg:py-3"
								href="/docs/"
								noDefaultStyles
							>
								Read the Docs
								<ChevronRightIcon
									className="group-hover:fill-gray-1000 inline h-5 w-5 transition group-hover:translate-x-1"
									focusable="false"
								/>
							</Link>
							<Link
								className="not-prose group inline-flex items-center gap-1 rounded-full border border-gray-200/20 bg-gradient-to-br from-purple-600/20 from-10% to-blue-600/20 px-8 py-2 text-base leading-none tracking-tight text-gray-200 shadow-lg backdrop-blur-lg transition duration-75 hover:border-gray-100/50 hover:bg-gradient-to-tl hover:from-gray-100/70 hover:to-white/70 hover:text-gray-900 hover:backdrop-blur-xl lg:py-3"
								disableExternalIcon
								href="https://discord.gg/J2khkF9XYK"
								noDefaultStyles
							>
								Join the Discord
								<ArrowTopRightOnSquareIcon
									className="group-hover:fill-gray-1000 inline h-5 transition group-hover:translate-x-1"
									focusable="false"
								/>
							</Link>
						</p>
					</div>
				</div>
			</section>
			<section className="bg-gray-950">
				<div className="container-main container prose prose-invert px-8 py-14 prose-h2:font-medium prose-h3:my-4 lg:px-16 lg:py-24">
					<h2 className="bg-gradient-to-tr from-blue-200 to-teal-300 bg-clip-text text-transparent">
						The features you need to build a headless WordPress site with.
					</h2>
					<div className="mt-8 grid grid-cols-6 gap-4 md:grid-cols-12 md:gap-6 xl:gap-8">
						<Card
							as="div"
							className="col-span-full flex flex-col overflow-hidden rounded-2xl bg-blue-1100/20 p-4 ring-1 ring-blue-500/10 md:col-span-6 md:p-6 lg:col-span-7 lg:p-8"
						>
							<div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-800 bg-opacity-30 text-teal-200">
								<KeyIcon className="h-8 w-8" />
							</div>
							<h3 className="text-purple-100">Authentication</h3>
							<p>
								Easily authenticate users so your Next.js app &quot;knows&quot;
								who&apos;s logged in and what capabilities that person has.
							</p>
						</Card>
						<Card
							as="div"
							className="col-span-full flex flex-col overflow-hidden rounded-2xl bg-blue-1100/20 p-4 ring-1 ring-blue-500/10 md:col-span-6 md:p-6 lg:col-span-5 lg:p-8"
						>
							<div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-800 bg-opacity-30 text-teal-200">
								<CursorArrowRaysIcon className="h-8 w-8" />
							</div>
							<h3 className="text-purple-100">Post previews</h3>
							<p>
								When a content creator adds content to WordPress, they can click
								the &quot;Preview&quot; link to preview that page in the
								decoupled Next.js app before the change goes live.
							</p>
						</Card>
						<Card
							as="div"
							className="col-span-full flex flex-col overflow-hidden rounded-2xl bg-blue-1100/20 p-4 ring-1 ring-blue-500/10 md:col-span-6 md:p-6 lg:col-span-5 lg:p-8"
						>
							<div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-800 bg-opacity-30 text-teal-200">
								<CodeBracketIcon className="h-8 w-8" />
							</div>
							<h3 className="text-purple-100">Template hierarchy</h3>
							<p>
								Bring{" "}
								<Link
									href="https://developer.wordpress.org/themes/basics/template-hierarchy/"
									noDefaultStyles
								>
									template hierarchy
								</Link>{" "}
								support to your headless WordPress project. Automatically render
								the appropriate Next.js page template depending on the type of
								WordPress content being displayed.
							</p>
						</Card>
						<Card
							as="div"
							className="col-span-full flex flex-col overflow-hidden rounded-2xl bg-blue-1100/20 p-4 ring-1 ring-blue-500/10 md:col-span-6 md:p-6 lg:col-span-7 lg:p-8"
						>
							<div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-800 bg-opacity-30 text-teal-200">
								<RectangleGroupIcon className="h-8 w-8" />
							</div>
							<h3 className="text-purple-100">Block editor support</h3>
							<p>
								Create one-to-one mappings between WordPress block editor blocks
								and components in your Next.js app. This unlocks powerful
								features like the ability to easily replace internal links with
								Next.js <code className="not-prose">Link</code> components,
								override core block markup, render third party blocks in
								Next.js, and more.
							</p>
						</Card>
					</div>
					<p className="mt-16 text-center">
						<Link
							className="not-prose group inline-flex items-center gap-1 rounded-full border border-gray-200/20 bg-gradient-to-br from-purple-600/20 from-10% to-blue-600/20 px-8 py-2 text-base leading-none tracking-tight text-gray-200 shadow-lg backdrop-blur-lg transition duration-75 hover:border-gray-100/50 hover:bg-gradient-to-tl hover:from-gray-100/70 hover:to-white/70 hover:text-gray-900 hover:backdrop-blur-xl lg:py-3"
							href="/docs/"
							noDefaultStyles
						>
							Get Started
							<ChevronRightIcon
								className="group-hover:fill-gray-1000 inline h-5 w-5 transition group-hover:translate-x-1"
								focusable="false"
							/>
						</Link>
					</p>
				</div>
			</section>
		</main>
	);
}
