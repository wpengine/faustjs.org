import React, { useState, useEffect } from "react";
import { gql, useQuery } from "@apollo/client";

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
        className="inline-flex items-center px-4 py-1.5 text-sm font-medium text-gray-400 bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-700"
        type="button"
        onClick={openModal}
      >
        {isMobile ? (
          <svg
            className="h-5 w-5 text-gray-400"
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
        ) : (
          <>
            <span className="flex-1 text-left">Search documentation...</span>
            <kbd className="ml-2 bg-gray-700 text-gray-400 px-2 py-1 rounded">
              ⌘K
            </kbd>
          </>
        )}
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
              {loading && <p>Loading...</p>}
              {error && <p>Error: {error.message}</p>}
              {results.map((result) => (
                <div key={result.id} className="p-2 border-b border-gray-700">
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
