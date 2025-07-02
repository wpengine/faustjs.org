import { createContext, useContext, useMemo, useRef } from "react";

const SearchContext = createContext();

export const useSearch = () => {
	return useContext(SearchContext);
};

export const SearchProvider = ({ children }) => {
	const dialog = useRef(null);

	const value = useMemo(() => ({ dialog }), [dialog]);

	return (
		<SearchContext.Provider value={value}>{children}</SearchContext.Provider>
	);
};
