import { QueryClientProvider } from '@tanstack/react-query';
import { ComingSoon } from 'components/ComingSoon';
import { LanguageProvider } from 'context/LanguageContext/LanguageContext';
import { ThemeProvider } from 'context/ThemeContext/ThemeContext';
import dayjs from 'dayjs';
import RelativeTime from 'dayjs/plugin/relativeTime';
import { CookiesProvider } from 'react-cookie';
import { ParallaxProvider } from 'react-scroll-parallax';
import { Routes } from 'routes/Routes';
import { queryClient } from 'utils/query-client.utils';

export const App = () => {
  // TODO Application is not ready for prod
  if (import.meta.env.PROD) return <ComingSoon />;

  // Activate dayjs plugins
  dayjs.extend(RelativeTime);

  return (
    <QueryClientProvider client={queryClient}>
      <CookiesProvider>
        <LanguageProvider>
          <ThemeProvider>
            <ParallaxProvider>
              <Routes />
            </ParallaxProvider>
          </ThemeProvider>
        </LanguageProvider>
      </CookiesProvider>
    </QueryClientProvider>
  );
};
