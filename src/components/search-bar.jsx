// components/SearchBar.js

import React, { useState, useEffect, useRef } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

// Function to call specific search APIs (MDX and WP)
async function fetchFromApi(route, query) {
  try {
    const res = await fetch(`/api/${route}?query=${encodeURIComponent(query)}`);
    if (!res.ok) throw new Error(`Error: ${res.status} - ${res.statusText}`);
    const data = await res.json();
    return data.results || [];
  } catch (error) {
    console.error("Fetch error:", error);
    return [];
  }
}

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const dialogRef = useRef(null);

  const openModal = () => dialogRef.current?.showModal();
  const closeModal = () => {
    dialogRef.current?.close();
    setQuery("");
    setResults([]);
  };

  const handleOutsideClick = (event) => {
    if (event.target === dialogRef.current) closeModal();
  };

  const handleKeyDown = (event) => {
    if (event.metaKey && event.key === "k") {
      event.preventDefault();
      openModal();
    }
    if (event.key === "Escape") closeModal();
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (query) {
      setLoading(true);
      Promise.all([
        fetchFromApi("search-mdx", query),
        fetchFromApi("search-wp", query),
      ])
        .then(([mdxResults, wpResults]) => {
          const prioritizedResults = [...mdxResults, ...wpResults];
          setResults(prioritizedResults);
          setLoading(false);
        })
        .catch((err) => {
          setError(err);
          setLoading(false);
        });
    }
  }, [query]);

  const cleanSnippet = (snippet) => {
    if (!snippet) return "No description available.";
    return snippet
      .replace(/export\s+const\s+metadata\s+=\s+{[^}]*};/, "")
      .trim();
  };

  function renderSearchResults() {
    return results
      .filter((result) => result.title && result.title !== "Untitled") // Filter out "Untitled" items
      .map((result, index) => {
        const title = result.title || "Untitled";
        const snippet = cleanSnippet(result.snippet);
        const type = result.type === "blog" ? "Blog Post" : "Documentation";

        let path = result.path;
        if (result.type === "doc") {
          path = path.replace(/^\/pages/, "").replace(/\/index\.mdx$/, "");
        } else if (result.type === "blog") {
          path = path.replace(/^\/blog\/blog\//, "/blog/");
        }

        return (
          <div key={index} className="border-b border-gray-700 p-2">
            <a href={path} className="text-white hover:underline">
              {title} <span className="text-gray-500">({type})</span>
            </a>
            {result.type === "blog" ? (
              <p
                className="text-sm text-gray-400"
                dangerouslySetInnerHTML={{ __html: snippet }}
              />
            ) : (
              <p className="text-sm text-gray-400">{snippet}</p>
            )}
          </div>
        );
      });
  }

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

      <dialog
        ref={dialogRef}
        className="relative w-full max-w-3xl rounded-lg bg-gray-900 p-6 shadow-lg"
        onClick={handleOutsideClick}
      >
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
          {loading && <p className="text-white">Loading...</p>}
          {error && <p className="text-white">Error: {error.message}</p>}
          {results.length === 0 && query && !loading && (
            <p className="text-white">No results found.</p>
          )}
          {renderSearchResults()}
        </div>
      </dialog>
    </>
  );
}
