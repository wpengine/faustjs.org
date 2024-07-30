import Link from "next/link";
import FaustLogo from "./FaustLogo";
import PrimaryMenu from "./PrimaryMenu";
import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <header className="flex px-4 py-6 justify-between items-center">
      <div className="flex gap-5 items-center">
        <div className="flex items-center">
          <FaustLogo />
          <Link href="/">
            <a className="ml-2 text-xl font-bold">Faust.js&trade;</a>
          </Link>
        </div>
        <div className="flex items-center">
          <PrimaryMenu />
        </div>
      </div>
      <div className="flex gap-5 items-center">
        <SearchBar />
        <div className="flex gap-5 items-center">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
            Deploy
          </button>
        </div>
      </div>
    </header>
  );
}
