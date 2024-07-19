import Link from "next/link";

export default function PrimaryMenu() {
  return (
    <nav className="flex gap-5">
      <Link href="/docs">Docs</Link>
      <Link href="/blog">Blog</Link>
    </nav>
  );
}
