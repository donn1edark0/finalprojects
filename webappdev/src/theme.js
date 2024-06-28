import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ff9800',
    },
    secondary: {
      main: '#ff6d00',
    },
    background: {
      default: '#2b2b2b',
      paper: '#3b3b3b',
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
  },
});

export default theme;

