import Image from "next/image";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";

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
    <section className="pb-16 pt-8">
      <div className="container mx-auto px-4">
        <h1 className="mb-12 text-center text-4xl font-bold">
          Faust.js™ Showcase
        </h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {showcases.map((showcase, index) => (
            <a
              href={showcase.url}
              key={index}
              className="relative block overflow-hidden rounded-lg shadow-md transition duration-300 hover:shadow-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* Using Next.js Image for optimized image loading */}
              <Image
                src={showcase.image}
                alt={showcase.title}
                width={500}
                height={300}
                className="rounded-lg object-cover"
              />

              {/* Consistent dark blue gradient for title */}
              <div className="absolute bottom-0 flex w-full items-center justify-between bg-gradient-to-t from-blue-900 via-blue-800 to-transparent p-4 text-white">
                <span className="text-xl font-semibold">{showcase.title}</span>
                <ArrowTopRightOnSquareIcon className="h-6 w-6 text-white" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
