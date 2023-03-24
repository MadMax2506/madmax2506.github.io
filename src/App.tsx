import { ThemeProvider } from 'context/ThemeContext/ThemeContext';
import { CookiesProvider } from 'react-cookie';
import { Routes } from 'routes/Routes';
import { TranslationProvider } from 'context/TranslationContext/TranslationContext';

export const App = () => {
  return (
    <CookiesProvider>
      <ThemeProvider>
        <TranslationProvider>
          <Routes />
        </TranslationProvider>
      </ThemeProvider>
    </CookiesProvider>
  );
};
