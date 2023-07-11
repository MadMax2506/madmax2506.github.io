import { AboutMe } from 'pages/Portfolio/AboutMe/AboutMe';
import { Contact } from 'pages/Portfolio/Contact/Contact';
import { Overlay } from 'pages/Portfolio/Overlay/Overlay';
import { MonoRoute } from 'routes/MonoRoute';
import { MonoNavigationAnchors } from 'routes/types';
import { Experience } from './Experience/Experience';

export const Portfolio = (): JSX.Element => (
  <Overlay>
    <MonoRoute anchor={MonoNavigationAnchors.ABOUT_ME}>
      <AboutMe />
    </MonoRoute>

    <MonoRoute anchor={MonoNavigationAnchors.EXPERIENCE}>
      <Experience />
    </MonoRoute>

    <MonoRoute anchor={MonoNavigationAnchors.CONTACT}>
      <Contact />
    </MonoRoute>
  </Overlay>
);
