import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
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
		<main className="container-main container mb-24 mt-16 lg:mb-32 lg:mt-16">
			<h1 className="mb-12 text-center text-4xl font-bold">
				Faust.js™ Showcase
			</h1>
			<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
				{showcases.map((showcase) => (
					<Link
						className="relative block overflow-hidden rounded-lg shadow-md transition duration-300 hover:shadow-lg"
						disableExternalIcon
						href={showcase.url}
						key={showcase.url}
					>
						{/* Using Next.js Image for optimized image loading */}
						<Image
							alt={showcase.title}
							className="h-full w-full rounded-lg object-cover"
							height={300}
							src={showcase.image}
							width={500}
						/>

						{/* Applying solid blue background with opacity and making it fit the card width */}
						<div className="absolute inset-x-0 bottom-0 flex items-center justify-between rounded-b-lg bg-blue-800 bg-opacity-80 p-4 text-white">
							<span className="text-xl font-semibold">{showcase.title}</span>
							<ArrowTopRightOnSquareIcon className="h-6 w-6 text-white" />
						</div>
					</Link>
				))}
			</div>
		</main>
	);
}
