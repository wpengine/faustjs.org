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
    background: {
      default: '#ffffff',
    },
    error: {
      main: '#d21b46',
    },
  },
  typography: {
    fontFamily: 'Open Sans, tahoma, sans-serif',
  },
});

export default lightTheme;
