import { Components } from '@mui/material/styles/components';
import { Theme, ThemeOptions } from '@mui/material/styles/createTheme';

/**
 * General styling for light and dark mode
 */
export const generalSettings: Partial<Omit<ThemeOptions, 'palette' | 'components'>> = {
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
  MuiTypography: {
    defaultProps: {
      color: 'text.primary',
    },
  },
  MuiDivider: {
    styleOverrides: {
      flexItem: true,
    },
  },
  MuiLink: {
    styleOverrides: {
      root: {
        textDecoration: 'none',
      },
    },
  },
};

/**
 * Custom type definition
 */
declare module '@mui/material/styles' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface Theme {
    highlighting: string;
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface ThemeOptions {
    highlighting: string;
  }
}
