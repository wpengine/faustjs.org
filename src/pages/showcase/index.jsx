import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "@/components/link";
import Seo from "@/components/seo";

const showcases = [
	{
		title: "koko.co.uk",
		image: "/images/koko.png",
		url: "https://www.koko.co.uk",
	},
	{
		title: "socialwork.org",
		image: "/images/socialwork.png",
		url: "https://www.socialwork.org",
	},
	{
		title: "combatcorner.com",
		image: "/images/combatcorner.png",
		url: "https://www.combatcorner.com",
	},
	{
		title: "wpgraphql.com",
		image: "/images/wpgraphql.png",
		url: "https://www.wpgraphql.com",
	},
];

export default function Showcase() {
	return (
		<main className="container-main container-max prose prose-invert md:prose-lg lg:prose-xl prose-h1:mb-2 prose-h1:font-semibold prose-h1:leading-tight prose-img:my-0 container px-8 py-14 lg:px-16 lg:py-24">
			<Seo
				title="Showcase"
				description="Faust.js showcase with sites powered by Faust."
				url="/showcase/"
			/>
			<h1 className="bg-linear-to-br from-white/80 to-gray-300 bg-clip-text text-center text-transparent">
				Faust.js™ Showcase
			</h1>
			<p className="text-center">
				New to Faust? Check out these Faust-powered sites for inspiration.
			</p>
			<div className="mt-8 grid grid-cols-6 gap-4 md:grid-cols-12 md:gap-6 xl:gap-8">
				{showcases.map((showcase) => (
					<Link
						className="group bg-blue-1000/20 hover:bg-blue-1100/90 col-span-full flex flex-col rounded-xl p-2 no-underline ring-1 shadow-md ring-blue-900/30 transition duration-120 hover:shadow-lg md:col-span-6"
						disableExternalIcon
						href={showcase.url}
						key={showcase.url}
					>
						{/* Using Next.js Image for optimized image loading */}
						<Image
							alt={showcase.title}
							className="aspect-video h-80 w-full rounded-t-lg object-cover object-top"
							height={300}
							src={showcase.image}
							width={500}
						/>

						{/* Applying solid blue background with opacity and making it fit the card width */}
						<div className="flex items-center justify-between px-4 pt-4 pb-2 text-gray-300 group-hover:text-gray-100">
							<span className="text-xl font-normal">{showcase.title}</span>
							<ArrowTopRightOnSquareIcon className="h-6 w-6" />
						</div>
					</Link>
				))}
			</div>
		</main>
	);
}
