import { useState, useEffect } from "react";
import Link from "next/link";
import FaustLogo from "./FaustLogo";
import PrimaryMenu from "./PrimaryMenu";
import SearchBar from "./SearchBar";
import HamburgerMenu from "./HamburgerMenu";

export default function Header() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640); // Tailwind's sm breakpoint is 640px
    };

    handleResize(); // Check on mount
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="flex items-center justify-between bg-gray-900 px-4 py-6">
      <div className="flex items-center gap-5">
        <div className="flex items-center">
          <FaustLogo />
          <Link href="/">
            <a className="ml-2 text-xl font-bold">Faust.js&trade;</a>
          </Link>
        </div>
        {!isMobile && (
          <div className="flex items-center">
            <PrimaryMenu />
          </div>
        )}
      </div>
      <div className="flex items-center gap-5">
        <SearchBar />
        {isMobile ? (
          <HamburgerMenu />
        ) : (
          <button className="rounded-lg bg-blue-500 px-4 py-2 text-white">
            Deploy
          </button>
        )}
      </div>
    </header>
  );
}
