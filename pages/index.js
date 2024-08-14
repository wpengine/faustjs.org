import SEO from "@/components/SEO";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <SEO />
      <h1 className="mt-8 text-center font-lora text-6xl font-extrabold">
        The Headless WordPress toolkit for Next.js
      </h1>
      <div className="mt-8 text-center">
        <Link href="/blog/hello-world/">
          <a className="underline">Single blog post</a>
        </Link>
        <br />
        <Link href="/sample-page">
          <a className="underline">Single page</a>
        </Link>
        <br />
        <Link href="/docs/test-doc">
          <a className="underline">Single doc</a>
        </Link>
        <br />
        <Link href="/blog">
          <a className="underline">Blog posts index page</a>
        </Link>
        <br />
        <Link href="/docs">
          <a className="underline">Docs index page</a>
        </Link>
      </div>
    </>
  );
}
