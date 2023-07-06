import { CssBaseline, ThemeProvider as MuiThemeProvider, PaletteMode, ScopedCssBaseline } from '@mui/material';
import { darkTheme } from 'context/ThemeContext/theme/dark-theme';
import { lightTheme } from 'context/ThemeContext/theme/light-theme';
import { PropsWithChildren, createContext, useContext, useEffect, useMemo, useState } from 'react';
import { useCookies } from 'react-cookie';

export enum ThemeMode {
  LIGHT = 'light',
  DARK = 'dark',
  SYNC = 'sync',
}

type ChangeThemeModeFunction = (mode: ThemeMode) => void;

type Theme = {
  paletteMode: PaletteMode;
  themeMode: ThemeMode;
  changeThemeMode: ChangeThemeModeFunction;
};

const osThemeEventList = () => window.matchMedia('(prefers-color-scheme: dark)');

const COOKIE_KEY = 'palette-mode';

const osTheme = (): PaletteMode => (osThemeEventList().matches ? 'dark' : 'light');

const paletteModeByThemeMode = (themeMode: ThemeMode): PaletteMode => {
  return themeMode !== ThemeMode.SYNC ? themeMode : osTheme();
};

const ThemeContext = createContext<Theme>({} as Theme);

export function ThemeProvider(props: PropsWithChildren): JSX.Element {
  const { children } = props;

  const [cookies, setCookie] = useCookies([COOKIE_KEY]);
  const [themeMode, setThemeMode] = useState<ThemeMode>(cookies[COOKIE_KEY] ?? ThemeMode.SYNC);
  const [paletteMode, setPaletteMode] = useState<PaletteMode>(paletteModeByThemeMode(themeMode));

  const theme = useMemo(() => (paletteMode === 'dark' ? darkTheme : lightTheme), [paletteMode]);

  const changeThemeMode: ChangeThemeModeFunction = (themeMode) => {
    setThemeMode(themeMode);
    setPaletteMode(paletteModeByThemeMode(themeMode));
  };

  useEffect(() => {
    if (cookies[COOKIE_KEY] === paletteMode) return;
    setCookie(COOKIE_KEY, paletteMode);
  }, [paletteMode, cookies]);

  osThemeEventList().addEventListener('change', () => {
    if (ThemeMode.SYNC !== themeMode) return;
    setPaletteMode(osTheme());
  });

  return (
    <ThemeContext.Provider value={{ paletteMode, themeMode, changeThemeMode }}>
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
