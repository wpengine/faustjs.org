import React, { useState, useEffect } from "react";
import { gql, useQuery } from "@apollo/client";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const DOC_SEARCH_QUERY = gql`
  query DOC_SEARCH_QUERY($searchTerm: String!) {
    contentNodes(where: { search: $searchTerm }) {
      nodes {
        ... on Doc {
          title
          id
          uri
        }
      }
    }
  }
`;

export default function SearchBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [isMobile, setIsMobile] = useState(false);

  const { loading, error, data } = useQuery(DOC_SEARCH_QUERY, {
    variables: { searchTerm: query },
    skip: !query,
  });

  useEffect(() => {
    if (data && data.contentNodes) {
      setResults(data.contentNodes.nodes);
    }
  }, [data]);

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

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <button
        className="inline-flex items-center rounded-md bg-gray-800 px-2 py-1.5 text-sm font-medium text-gray-400 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-700"
        type="button"
        onClick={openModal}
      >
        {isMobile ? (
          <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
        ) : (
          <>
            <span className="pl-3">Search docs...</span>
            <kbd className="ml-8 rounded bg-gray-700 px-2 py-1 text-gray-400">
              ⌘K
            </kbd>
          </>
        )}
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative w-full max-w-3xl rounded-lg bg-gray-900 p-6 shadow-lg">
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
              {loading && <p>Loading...</p>}
              {error && <p>Error: {error.message}</p>}
              {results.map((result) => (
                <div key={result.id} className="border-b border-gray-700 p-2">
                  <a href={result.uri} className="text-white hover:underline">
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
