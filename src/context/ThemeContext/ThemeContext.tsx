import { createContext, PropsWithChildren, useContext, useEffect, useMemo, useState } from 'react';
import { CssBaseline, PaletteMode, ScopedCssBaseline, ThemeProvider as MuiThemeProvider } from '@mui/material';
import { useCookies } from 'react-cookie';
import { darkTheme } from 'context/ThemeContext/theme/dark-theme';
import { lightTheme } from 'context/ThemeContext/theme/light-theme';

const defaultMode = (): PaletteMode => (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

type Theme = {
  mode: PaletteMode;
  toggleMode: () => void;
};

const ThemeContext = createContext<Theme>({} as Theme);

export function ThemeProvider(props: PropsWithChildren): JSX.Element {
  const { children } = props;

  const [cookies, setCookie] = useCookies(['theme-mode']);
  const [mode, setMode] = useState<PaletteMode>(cookies['theme-mode'] ?? defaultMode());

  const theme = useMemo(() => (mode === 'dark' ? darkTheme : lightTheme), [mode]);

  const toggleMode = () => setMode((prevState) => (prevState === 'dark' ? 'light' : 'dark'));

  useEffect(() => {
    if (cookies['theme-mode'] === mode) return;
    setCookie('theme-mode', mode);
  }, [mode, cookies]);

  return (
    <ThemeContext.Provider value={{ mode, toggleMode }}>
      <MuiThemeProvider theme={theme}>
        <ScopedCssBaseline>
          <CssBaseline />
          {children}
        </ScopedCssBaseline>
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
}

export function useThemeContext(): Theme {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }
  return context;
}
