import SEO from "@/components/SEO";
import Link from "next/link";

export default function HomePage() {
  return <>
    <SEO />
    <h1 className="mt-8 text-center font-lora text-6xl font-extrabold">
      The Headless WordPress toolkit for Next.js
    </h1>
    <div className="mt-8 text-center">
      <Link href="/blog/hello-world/" className="underline">
        Single blog post
      </Link>
      <br />
      <Link href="/privacy-policy" className="underline">
        Single page
      </Link>
      <br />
      <Link href="/docs/rendering-blocks/" className="underline">
        Single doc
      </Link>
      <br />
      <Link href="/blog" className="underline">
        Blog posts index page
      </Link>
      <br />
      <Link href="/docs" className="underline">
        Docs index page
      </Link>
    </div>
  </>;
}
