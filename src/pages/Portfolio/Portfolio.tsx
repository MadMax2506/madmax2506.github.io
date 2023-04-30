import { Home } from 'pages/Portfolio/Home/Home';
import { MonoRoute } from 'routes/MonoRoute';
import { MonoNavigationAnchors } from 'routes/types';
import { AboutMe } from 'pages/Portfolio/AboutMe/AboutMe';
import { Experience } from 'pages/Portfolio/Experience/Experience';
import { Projects } from 'pages/Portfolio/Projects/Projects';
import { Contact } from 'pages/Portfolio/Contact/Contact';
import { useLocation } from 'react-router-dom';
import { getScrollToY, scrollTo } from 'hooks/useNavigation/navigation.utils';

export const Portfolio = (): JSX.Element => {
  const { state } = useLocation();
  window.requestAnimationFrame(() => scrollTo(getScrollToY(state?.anchor as MonoNavigationAnchors)));

  return (
    <>
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
    </>
  );
};
