import { getApolloClient } from '@faustwp/core';
import { gql } from '__generated__/gql';
import { useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';

const SEARCH_RESULTS_QUERY = gql(`
  query SEARCH_RESULTS($searchTerm: String!) {
    contentNodes(where: { search: $searchTerm }) {
      edges {
        node {
          id
          ... on NodeWithTitle {
            title
          }
          uri
        }
      }
    }
  }
`);

export function useIsSearchVisible(ref: React.MutableRefObject<any>) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function handleClickOutside(event: Event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    }

    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);

  return isVisible;
}

export default function useSearch() {
  const [searchInput, setSearchInput] = useState('');
  const [debouncedSearchInput] = useDebounce(searchInput, 250);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      if (debouncedSearchInput === '') {
        return;
      }

      const client = getApolloClient();

      setLoading(true);
      const { data, error } = await client.query({
        query: SEARCH_RESULTS_QUERY,
        variables: {
          searchTerm: debouncedSearchInput,
        },
      });

      const dataResults = data.contentNodes.edges;
      setResults(
        dataResults.map((obj) => {
          return {
            title: obj.node.title,
            uri: obj.node.uri,
          };
        }),
      );
      setLoading(false);
    })();
  }, [debouncedSearchInput]);

  return {
    debouncedSearchInput,
    searchInput,
    setSearchInput,
    searchResults: results,
    loading,
  };
}
