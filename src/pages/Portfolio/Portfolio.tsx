import { Home } from 'pages/Portfolio/Home/Home';
import { MonoRoute } from 'routes/MonoRoute';
import { MonoNavigationAnchors } from 'routes/types';
import { AboutMe } from 'pages/Portfolio/AboutMe/AboutMe';
import { Experience } from 'pages/Portfolio/Experience/Experience';
import { Projects } from 'pages/Portfolio/Projects/Projects';
import { Contact } from 'pages/Portfolio/Contact/Contact';

export const Portfolio = (): JSX.Element => {
  return (
    <>
      <MonoRoute anchor={MonoNavigationAnchors.HOME}>
        <Home />
      </MonoRoute>

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
    </>
  );
};
