import React, { useState, useEffect } from "react";

export default function SearchBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
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

  const performSearch = async (query) => {
    const endpoint = process.env.NEXT_PUBLIC_SEARCH_ENDPOINT;
    const accessToken = process.env.NEXT_PUBLIC_ACCESS_TOKEN;
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        query: `
          {
            search(query: "${query}") {
              results {
                id
                title
                url
              }
            }
          }
        `,
      }),
    });
    const data = await response.json();
    setResults(data.data.search.results);
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if (query.length > 0) {
      performSearch(query);
    } else {
      setResults([]);
    }
  }, [query]);

  return (
    <>
      <button
        className="inline-flex items-center px-4 py-1.5 text-sm font-medium text-gray-400 bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-700"
        type="button"
        onClick={openModal}
      >
        <span className="flex-1 text-left">Search documentation...</span>
        <kbd className="ml-2 bg-gray-700 text-gray-400 px-2 py-1 rounded">
          ⌘K
        </kbd>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative w-full max-w-3xl p-6 bg-gray-900 rounded-lg shadow-lg">
            <button
              className="absolute top-4 right-4 text-gray-400 bg-gray-800 px-2 py-1 rounded-md text-xs hover:bg-gray-700"
              onClick={closeModal}
              style={{ zIndex: 60 }}
            >
              Esc
            </button>
            <div className="relative flex items-center mt-8">
              {" "}
              {/* Adjusted margin-top to ensure input field is not overlapped */}
              <input
                type="text"
                placeholder="Search documentation..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full py-2 pl-10 pr-4 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <svg
                className="absolute left-3 top-3 h-5 w-5 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M12.9 14.32a8 8 0 111.414-1.415l5.387 5.386a1 1 0 01-1.414 1.415l-5.387-5.386zM14 8a6 6 0 11-12 0 6 6 0 0112 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div id="searchResults" className="mt-4 max-h-96 overflow-y-auto">
              {results.map((result) => (
                <div key={result.id} className="p-2 border-b border-gray-700">
                  <a href={result.url} className="text-white hover:underline">
                    {result.title}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
