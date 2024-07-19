import SEO from "../components/SEO";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <SEO />
      <h1 className="text-6xl font-extrabold font-lora mt-8 text-center">
        The Headless WordPress toolkit for Next.js
      </h1>
      <div className="mt-8 text-center">
        <Link href="/faust-we-made-contact">
          <a className="underline">Post: Faust, We Made Contact</a>
        </Link>
        <br />
        <Link href="/reference-page">
          <a className="underline">Page: Reference Page</a>
        </Link>
      </div>
    </>
  );
}
