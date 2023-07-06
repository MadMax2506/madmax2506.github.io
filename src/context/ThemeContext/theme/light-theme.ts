import { grey } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';
import { components, generalSettings, rgbWhite } from 'context/ThemeContext/theme/theme-options';

const scrollbarGrey = {
  100: '#f1f1f1',
  200: '#c1c1c1',
  300: '#a8a8a8',
};

/**
 * Light theme
 */
export const lightTheme = createTheme({
  ...generalSettings,
  components: {
    ...components,
    // Scrollbar
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          scrollbarColor: `${scrollbarGrey[200]} ${scrollbarGrey[100]}`,
          '&::-webkit-scrollbar, & *::-webkit-scrollbar': {
            backgroundColor: scrollbarGrey[100],
          },
          '&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb': {
            borderRadius: 8,
            backgroundColor: scrollbarGrey[200],
            minHeight: 24,
            border: '3px solid #f1f1f1',
          },
          '&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus': {
            backgroundColor: scrollbarGrey[300],
          },
          '&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active': {
            backgroundColor: scrollbarGrey[300],
          },
          '&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover': {
            backgroundColor: scrollbarGrey[300],
          },
          '&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner': {
            backgroundColor: scrollbarGrey[100],
          },
        },
      },
    },
  },
  palette: {
    mode: 'light',
    primary: {
      dark: grey[800],
      main: grey[800],
      light: grey[800],
    },
    secondary: {
      dark: rgbWhite,
      main: rgbWhite,
      light: rgbWhite,
    },
    background: {
      default: rgbWhite,
      paper: rgbWhite,
    },
    text: {
      primary: grey[900],
      secondary: rgbWhite,
    },
  },
});
