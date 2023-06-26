import SearchIcon from '@mui/icons-material/Search';
import { CircularProgress } from '@mui/material';
import InputBase from '@mui/material/InputBase';
import MenuItem from '@mui/material/MenuItem';
import { alpha, styled } from '@mui/material/styles';
import useSearch, { useIsSearchVisible } from 'hooks/useSearch';
import * as React from 'react';
import { Link } from './Link';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.075),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.black, 0.1),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
  height: 40,
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'var(--wp--preset--color--contrast)',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'var(--wp--preset--color--contrast)',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
  },
}));

const SearchResults = styled(MenuItem)(({ theme }) => ({
  width: '100%',
  display: 'block',
  top: 40,
  left: 0,
  zIndex: '1000',
  position: 'absolute',
  border: '1px solid rgba(0,0,0,.1)',
  backgroundColor: alpha(theme.palette.common.white, 1),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 1),
  },
}));

export default function HeaderSearch() {
  const { searchInput, setSearchInput, searchResults, loading } = useSearch();
  const searchBoxRef = React.useRef(null);
  const isSearchVisible = useIsSearchVisible(searchBoxRef);

  return (
    <Search
      ref={searchBoxRef}
      sx={{
        color: '#fff',
        flexGrow: 0,
        display: { xs: 'none', md: 'flex' },
      }}>
      <SearchIconWrapper>
        {loading && <CircularProgress size="1em" />}
        {!loading && <SearchIcon />}
      </SearchIconWrapper>
      <StyledInputBase
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        placeholder="Search…"
        inputProps={{ 'aria-label': 'search' }}
        sx={{ width: '50ch' }}
      />

      {searchResults.length > 0 && isSearchVisible && (
        <SearchResults>
          {searchResults.map((result) => (
            <Link
              href={result.uri}
              style={{ textDecoration: 'none', color: 'black' }}>
              <MenuItem>{result.title}</MenuItem>
            </Link>
          ))}
        </SearchResults>
      )}
    </Search>
  );
}
