import { ThemeProvider } from 'context/ThemeContext/ThemeContext';
import { CookiesProvider } from 'react-cookie';
import { LanguageProvider } from 'context/LanguageContext/LanguageContext';
import RelativeTime from 'dayjs/plugin/relativeTime';
import dayjs from 'dayjs';
import { Routes } from 'routes/Routes';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from 'utils/query-client.utils';
import { ComingSoon } from 'components/ComingSoon';

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
            <Routes />
          </ThemeProvider>
        </LanguageProvider>
      </CookiesProvider>
    </QueryClientProvider>
  );
};
