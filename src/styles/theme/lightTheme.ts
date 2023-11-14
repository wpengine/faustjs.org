import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#ffffff',
      contrastText: '#002838',
    },
    secondary: {
      main: '#7a1ba6',
    },
    text: {
      primary: '#002838',
      secondary: '#002838',
      disabled: 'rgba(0,40,45,0.38)',
    },
    error: {
      main: '#d21b46',
    },
  },
  typography: {
    fontFamily: 'Open Sans, tahoma, sans-serif',
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      mdl: 960,
      lg: 1200,
      xl: 1536,
    },
  }
});

export default lightTheme;
