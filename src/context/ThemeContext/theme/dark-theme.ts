import { grey } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';
import { components, generalSettings, palette } from 'context/ThemeContext/theme/theme-options';

const scrollbarGrey = {
  100: '#959595',
  200: '#6b6b6b',
  300: '#2b2b2b',
};

/**
 * Dark theme
 */
export const darkTheme = createTheme({
  ...generalSettings,
  components: {
    ...components,
    // Scrollbar
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          scrollbarColor: `${scrollbarGrey[200]} ${scrollbarGrey[300]}`,
          '&::-webkit-scrollbar, & *::-webkit-scrollbar': {
            backgroundColor: scrollbarGrey[300],
          },
          '&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb': {
            borderRadius: 8,
            backgroundColor: scrollbarGrey[200],
            minHeight: 24,
            border: `3px solid ${scrollbarGrey[300]}`,
          },
          '&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus': {
            backgroundColor: scrollbarGrey[100],
          },
          '&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active': {
            backgroundColor: scrollbarGrey[100],
          },
          '&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover': {
            backgroundColor: scrollbarGrey[100],
          },
          '&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner': {
            backgroundColor: scrollbarGrey[300],
          },
        },
      },
    },
  },
  palette: {
    ...palette,
    mode: 'dark',
    background: {
      default: grey[900],
    },
    text: {
      primary: 'white',
    },
  },
});
