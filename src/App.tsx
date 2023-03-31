import { ThemeProvider } from 'context/ThemeContext/ThemeContext';
import { CookiesProvider } from 'react-cookie';
import { Home } from 'pages/Home/Home';
import { Route } from 'components/Route/Route';
import { NavigationAnchors } from 'components/Route/types';
import { AboutMe } from 'pages/AboutMe/AboutMe';
import { Projects } from 'pages/Projects/Projects';
import { Contact } from 'pages/Contact/Contact';

export const App = () => {
  return (
    <CookiesProvider>
      <ThemeProvider>
        <Home />

        <Route anchor={NavigationAnchors.ABOUT_ME}>
          <AboutMe />
        </Route>

        <Route anchor={NavigationAnchors.PROJECTS}>
          <Projects />
        </Route>

        <Route anchor={NavigationAnchors.CONTACT}>
          <Contact />
        </Route>
      </ThemeProvider>
    </CookiesProvider>
  );
};
