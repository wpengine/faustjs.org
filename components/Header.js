import { useState, useEffect } from "react";
import Link from "next/link";
import FaustLogo from "./FaustLogo";
import PrimaryMenu from "./PrimaryMenu";
import SearchBar from "./SearchBar";
import HamburgerMenu from "./HamburgerMenu";
import {
  SiDiscord,
  SiGithub,
  SiWordpress,
} from "@icons-pack/react-simple-icons";

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
    <header className="container mx-auto flex items-center justify-between bg-gray-900 px-4 py-6 sm:px-6 md:max-w-7xl md:px-8">
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-3">
          <FaustLogo />
          <Link href="/" className="text-xl font-bold">
            Faust.js
            <span className="align-super text-xs font-light text-gray-500">
              &trade;
            </span>
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
          <div className="flex items-center space-x-4">
            <Link
              href="https://github.com/wpengine/faustjs"
              passHref
              target="_blank"
              className="text-gray-500 hover:text-gray-400"
            >
              {/* GitHub Icon */}
              <SiGithub />
            </Link>
            <Link
              href="https://wordpress.org/plugins/faustwp/"
              passHref
              target="_blank"
              className="text-gray-500 hover:text-gray-400"
            >
              {/* WordPress Icon */}
              <SiWordpress />
            </Link>
            <Link
              href="https://discord.gg/Ux73Pywj"
              passHref
              target="_blank"
              className="text-gray-500 hover:text-gray-400"
            >
              {/* Discord Icon */}
              <SiDiscord />
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
