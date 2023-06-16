import { ThemeProvider } from 'context/ThemeContext/ThemeContext';
import { CookiesProvider } from 'react-cookie';
import { Routes } from 'routes/Routes';
import { TranslationProvider } from 'context/TranslationContext/TranslationContext';
import { ComingSoon } from 'components/ComingSoon';

export const App = () => {
  // TODO Application is not ready for prod
  if (import.meta.env.PROD) return <ComingSoon />;

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
