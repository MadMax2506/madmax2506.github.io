import { ThemeProvider } from 'context/ThemeContext/ThemeContext';
import { CookiesProvider } from 'react-cookie';
import { Home } from 'pages/Home/Home';
import { MonoRoute } from 'components/Route/MonoRoute';
import { MonoNavigationAnchors } from 'components/Route/types';
import { AboutMe } from 'pages/AboutMe/AboutMe';
import { Projects } from 'pages/Projects/Projects';
import { Contact } from 'pages/Contact/Contact';
import { TranslationProvider } from 'context/TranslationContext/TranslationContext';
import { Stack } from '@mui/material';
import { Experience } from 'pages/Experience/Experience';
import { Navigation } from 'navigation/Navigation';

export const App = () => {
  return (
    <CookiesProvider>
      <TranslationProvider>
        <ThemeProvider>
          <Navigation />

          <Stack alignItems="center">
            <Home />

            <MonoRoute anchor={MonoNavigationAnchors.ABOUT_ME}>
              <AboutMe />
            </MonoRoute>

            <MonoRoute anchor={MonoNavigationAnchors.EXPERIENCE}>
              <Experience />
            </MonoRoute>

            <MonoRoute anchor={MonoNavigationAnchors.PROJECTS}>
              <Projects />
            </MonoRoute>

            <MonoRoute anchor={MonoNavigationAnchors.CONTACT}>
              <Contact />
            </MonoRoute>
          </Stack>
        </ThemeProvider>
      </TranslationProvider>
    </CookiesProvider>
  );
};
