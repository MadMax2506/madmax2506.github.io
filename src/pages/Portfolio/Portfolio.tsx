import { AboutMe } from 'pages/Portfolio/AboutMe/AboutMe';
import { Contact } from 'pages/Portfolio/Contact/Contact';
import { Home } from 'pages/Portfolio/Home/Home';
import { MonoRoute } from 'routes/MonoRoute';
import { MonoNavigationAnchors } from 'routes/types';
import { Projects } from './Projects/Projects';

export const Portfolio = (): JSX.Element => {
  return (
    <>
      <MonoRoute anchor={MonoNavigationAnchors.HOME}>
        <Home />
      </MonoRoute>

      <MonoRoute anchor={MonoNavigationAnchors.ABOUT_ME}>
        <AboutMe />
      </MonoRoute>

      <MonoRoute anchor={MonoNavigationAnchors.PROJECTS}>
        <Projects />
      </MonoRoute>

      <MonoRoute anchor={MonoNavigationAnchors.CONTACT}>
        <Contact />
      </MonoRoute>
    </>
  );
};
