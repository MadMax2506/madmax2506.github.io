import { ThemeProvider } from 'context/ThemeContext/ThemeContext';
import { CookiesProvider } from 'react-cookie';
import { LanguageProvider } from 'context/LanguageContext/LanguageContext';
import { Stack } from '@mui/material';
import { Navigation } from 'components/navigation/Navigation';
import RelativeTime from 'dayjs/plugin/relativeTime';
import dayjs from 'dayjs';
import { Routes } from 'routes/Routes';

export const App = () => {
  // Activate dayjs plugins
  dayjs.extend(RelativeTime);

  return (
    <CookiesProvider>
      <LanguageProvider>
        <ThemeProvider>
          <Navigation />

          <Stack alignItems="center">
            <Routes />
          </Stack>
        </ThemeProvider>
      </LanguageProvider>
    </CookiesProvider>
  );
};
