import React, { useState, useEffect, useRef } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { MDXProvider } from "@mdx-js/react"; // For rendering MDX

// Function to call your Lunr-based search API
async function performSearch(query) {
  try {
    const res = await fetch(`/api/search?query=${encodeURIComponent(query)}`);

    if (!res.ok) {
      throw new Error(`Error: ${res.status} - ${res.statusText}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("An error occurred while performing the search:", error);
    return [];
  }
}

export default function SearchBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const modalRef = useRef(null);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setQuery("");
    setResults([]);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      closeModal();
    }
  };

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  async function handleSearch() {
    if (query) {
      const searchResults = await performSearch(query);
      setResults(searchResults);
    }
  }

  useEffect(() => {
    handleSearch();
  }, [query]);

  return (
    <>
      <button
        className="inline-flex items-center rounded-md bg-gray-800 px-2 py-1.5 text-sm font-medium text-gray-400 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-700"
        type="button"
        onClick={openModal}
      >
        <MagnifyingGlassIcon className="h-6 w-6 text-gray-400 md:hidden" />
        <span className="hidden md:inline">
          <span className="pl-3">Search docs...</span>
          <kbd className="ml-8 rounded bg-gray-700 px-2 py-1 text-gray-400">
            ⌘K
          </kbd>
        </span>
      </button>

      {isOpen && (
        <div className="bg-black fixed inset-0 z-50 flex items-center justify-center bg-opacity-50">
          <div
            className="relative w-full max-w-3xl rounded-lg bg-gray-900 p-6 shadow-lg"
            ref={modalRef}
          >
            <button
              className="absolute right-4 top-4 rounded-md bg-gray-800 px-2 py-1 text-xs text-gray-400 hover:bg-gray-700"
              onClick={closeModal}
              style={{ zIndex: 60 }}
            >
              Esc
            </button>
            <div className="relative mt-8 flex items-center">
              <input
                type="text"
                placeholder="Search documentation..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full rounded-lg bg-gray-800 py-2 pl-10 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <MagnifyingGlassIcon className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            </div>
            <div id="searchResults" className="mt-4 max-h-96 overflow-y-auto">
              {results.length === 0 && query && <p>No results found.</p>}
              {results.map((result) => (
                <Result key={result.ref} result={result} />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// Helper component to display search results with MDX content
function Result({ result }) {
  return (
    <a
      href={`${result.path}`} // Adjust this to match your desired URL structure
      className="block text-white hover:underline"
    >
      <h3>{result.title}</h3>
      {/* Render the excerpt as MDX */}
      <MDXProvider>
        <div>{result.excerpt}</div>
      </MDXProvider>
    </a>
  );
}
