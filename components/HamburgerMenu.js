import { useState } from "react";
import Link from "next/link";
import { Bars3Icon } from "@heroicons/react/24/solid";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleMenu}
        className="text-gray-400 hover:text-gray-300 focus:outline-none"
      >
        <Bars3Icon />
      </button>
      {isOpen && (
        <div className="absolute right-0 z-50 mt-2 w-48 rounded-md bg-gray-800 shadow-lg">
          <Link
            href="/option1"
            className="block rounded-t-md px-4 py-2 text-gray-300 hover:bg-gray-700">
            
              Option 1
            
          </Link>
          <Link
            href="/option2"
            className="block px-4 py-2 text-gray-300 hover:bg-gray-700">
            
              Option 2
            
          </Link>
          <Link
            href="/option3"
            className="block rounded-b-md px-4 py-2 text-gray-300 hover:bg-gray-700">
            
              Option 3
            
          </Link>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
