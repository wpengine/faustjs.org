import { useState } from "react";
import Link from "next/link";

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
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
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
