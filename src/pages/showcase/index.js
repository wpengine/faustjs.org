import Image from "next/image";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
import Link from "@/components/link";

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
		<main className="container-main container prose prose-invert px-8 py-14 md:prose-lg lg:prose-xl prose-h1:mb-2 prose-h1:font-semibold prose-h1:leading-tight prose-img:my-0 lg:px-16 lg:py-24">
			<h1 className="bg-gradient-to-br from-white/80 to-gray-300 bg-clip-text text-center text-transparent">
				Faust.js™ Showcase
			</h1>
			<p className="text-center">
				New to Faust? Check out these Faust-powered sites for inspiration.
			</p>
			<div className="mt-8 grid grid-cols-6 gap-4 md:grid-cols-12 md:gap-6 xl:gap-8">
				{showcases.map((showcase) => (
					<Link
						href={showcase.url}
						key={showcase.url}
						disableExternalIcon
						className="duration-120 group col-span-full flex flex-col rounded-xl bg-blue-1000/20 p-2 no-underline shadow-md ring-1 ring-blue-900/30 transition hover:bg-blue-1100/90 hover:shadow-lg md:col-span-6"
					>
						{/* Using Next.js Image for optimized image loading */}
						<Image
							src={showcase.image}
							alt={showcase.title}
							width={500}
							height={300}
							className="aspect-video h-80 w-full rounded-t-lg object-cover object-top"
						/>

						{/* Applying solid blue background with opacity and making it fit the card width */}
						<div className="flex items-center justify-between px-4 pb-2 pt-4 text-gray-300 group-hover:text-gray-100">
							<span className="text-xl font-normal">{showcase.title}</span>
							<ArrowTopRightOnSquareIcon className="h-6 w-6" />
						</div>
					</Link>
				))}
			</div>
		</main>
	);
}
