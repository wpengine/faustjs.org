import { useState, useEffect } from "react";
import Link from "next/link";
import FaustLogo from "./FaustLogo";
import PrimaryMenu from "./PrimaryMenu";
import SearchBar from "./SearchBar";
import HamburgerMenu from "./HamburgerMenu";
import { SiDiscord, SiGithub, SiWordpress } from "@icons-pack/react-simple-icons";

export default function Header() {
  return (
    <header className="flex items-center justify-between bg-gray-900 px-4 py-6">
      <div className="flex items-center gap-5">
        <div className="flex items-center">
          <FaustLogo />
          <Link href="/" className="ml-2 text-xl font-bold">
            Faust.js&trade;
          </Link>
        </div>
        <div className="hidden lg:flex items-center">
          <PrimaryMenu />
        </div>
      </div>
      <div className="flex items-center gap-5">
        <SearchBar />
        <HamburgerMenu className="lg:hidden" />
        <div className="hidden lg:flex items-center space-x-4">
          <Link
            href="https://github.com/wpengine/faustjs"
            passHref
            target="_blank"
            className="text-white">

            {/* GitHub Icon */}
            <SiGithub />

          </Link>
          <Link
            href="https://wordpress.org/plugins/faustwp/"
            passHref
            target="_blank"
            className="text-white">

            {/* WordPress Icon */}
            <SiWordpress />

          </Link>
          <Link
            href="https://discord.gg/Ux73Pywj"
            passHref
            target="_blank"
            className="text-white">

            {/* Discord Icon */}
            <SiDiscord />

          </Link>
        </div>
      </div>
    </header>
  );
}
