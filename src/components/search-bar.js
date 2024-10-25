import { useState, useEffect } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

// Function to call the custom search API
async function performSearch(query) {
  try {
    const res = await fetch(`/api/search?query=${encodeURIComponent(query)}`);
    if (!res.ok) throw new Error(`Error: ${res.status} - ${res.statusText}`);
    return await res.json();
  } catch (error) {
    console.error("Search failed:", error);
    return [];
  }
}

export default function SearchBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const openModal = () => setIsOpen(true);

  const closeModal = () => {
    setIsOpen(false);
    setQuery("");
    setResults([]);
  };

  const handleKeyDown = (event) => {
    if (event.metaKey && event.key === "k") {
      event.preventDefault();
      openModal();
    }
    if (event.key === "Escape") {
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (query) {
      setLoading(true);
      performSearch(query)
        .then((data) => {
          setResults(data);
          setLoading(false);
        })
        .catch((err) => {
          setError(err);
          setLoading(false);
        });
    }
  }, [query]);

  const cleanPath = (path) => {
    if (!path) return "";
    return path.replace("/pages", "").replace("/index.mdx", "");
  };

  return (
    <>
      <button
        className="inline-flex items-center rounded-md bg-gray-800 px-2 py-1.5 text-sm font-medium text-gray-400 hover:bg-gray-700"
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
          <div className="relative w-full max-w-3xl rounded-lg bg-gray-900 p-6 shadow-lg">
            <button
              className="absolute right-4 top-4 rounded-md bg-gray-800 px-2 py-1 text-xs text-gray-400 hover:bg-gray-700"
              onClick={closeModal}
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
              {loading && <p>Loading...</p>}
              {error && <p>Error: {error.message}</p>}
              {results.length === 0 && query && !loading && (
                <p>No results found.</p>
              )}
              {results.map((result) => {
                const title = result.data?.title || null;
                const path = cleanPath(result.data?.path);

                return title ? (
                  <div key={result.id} className="border-b border-gray-700 p-2">
                    <a href={path} className="text-white hover:underline">
                      {title}
                    </a>
                  </div>
                ) : null;
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
