import { ChevronRightIcon } from "@heroicons/react/16/solid";
import Link from "@/components/link";

// The Component is required
export default function Index() {
	return (
		<>
			<div className="bg-100-full bg-default-pos bg-hero-gradient">
				<div className="container-main container prose prose-invert md:prose-lg lg:prose-2xl prose-h1:mb-2 prose-h1:font-bold prose-h1:leading-tight">
					<div className="mx-auto max-w-4xl px-8 py-14 text-center lg:py-24">
						<h1 className="bg-gradient-to-br from-purple-300 to-teal-300 bg-clip-text text-transparent">
							The Headless WordPress Toolkit for Next.js
						</h1>
						<p className="mx-auto max-w-xl">
							A robust set of tools for Next.js that unlock powerful headless
							WordPress capabilities.
						</p>
						<p>
							<Link
								noDefaultStyles
								className="not-prose group inline-flex items-center rounded-full border border-gray-200/20 bg-gradient-to-br from-purple-600/20 from-10% to-blue-600/20 px-8 py-2 text-base leading-none tracking-tight text-gray-200 shadow-lg backdrop-blur-lg transition duration-300 hover:border-gray-100/50 hover:bg-gradient-to-tl hover:from-gray-100/70 hover:to-white/70 hover:text-gray-900 hover:backdrop-blur-xl lg:py-3"
								href="/docs/"
							>
								Read the Docs
								<ChevronRightIcon
									focusable="false"
									className="transition-duration-150 group-hover:fill-gray-1000 inline h-6 transition group-hover:translate-x-1"
								/>
							</Link>
						</p>
					</div>
				</div>
			</div>
		</>
	);
}
