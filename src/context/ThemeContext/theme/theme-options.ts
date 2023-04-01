import { PaletteOptions } from '@mui/material/styles';
import { Components } from '@mui/material/styles/components';
import { Theme, ThemeOptions } from '@mui/material/styles/createTheme';
import { blue, deepOrange } from '@mui/material/colors';

/**
 * General styling for light and dark mode
 */
export const generalSettings: Omit<ThemeOptions, 'palette' | 'components'> = {
  typography: {
    fontFamily: ['"Courier New"'].join(','),
  },
};

/**
 * Component styling for light and dark mode
 */
export const components: Components<Omit<Theme, 'components'>> = {
  MuiButton: {
    defaultProps: {
      variant: 'contained',
      fullWidth: true,
    },
  },
  MuiStack: {
    defaultProps: {
      width: '100%',
    },
  },
  MuiDivider: {
    defaultProps: {
      sx: {
        borderBottomWidth: 3,
        borderRadius: 4,
        backgroundColor: 'primary.main',
        boxShadow: 3,
      },
      flexItem: true,
    },
  },
};

/**
 * Palette for light and dark mode
 */
export const palette: Omit<PaletteOptions, 'mode'> = {
  primary: deepOrange,
  secondary: blue,
};

/**
 * Custom type definition
 */
declare module '@mui/material/styles' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface Theme {}

  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface ThemeOptions {}
}
