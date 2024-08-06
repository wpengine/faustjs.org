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
        <Link href="/test-post">
          <a className="underline">Post: Faust, We Made Contact</a>
        </Link>
        <br />
        <Link href="/sample-page">
          <a className="underline">Page: Reference Page</a>
        </Link>
        <br />
        <Link href="/docs/test-doc">
          <a className="underline">Docs: Doc Page</a>
        </Link>
        <br />
        <Link href="/blog-page">
          <a className="underline">Blog Posts Page</a>
        </Link>
        <br />
        <Link href="/docs">
          <a className="underline">Docs Main Page</a>
        </Link>
      </div>
    </>
  );
}
