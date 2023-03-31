import { MemoryRouter as Router, Route as ReactRoute, Routes as ReactRoutes } from 'react-router-dom';
import { paths } from './paths';
import { Home } from 'pages/Home/Home';
import { AboutMe } from 'pages/AboutMe/AboutMe';

export function Routes(): JSX.Element {
  return (
    <Router>
      <ReactRoutes>
        {/** Public routes */}
        <ReactRoute path="*" element={<h1>Page not found</h1>} />
        <ReactRoute index path={paths.root.pattern} element={<Home />} />
        <ReactRoute index path={paths.aboutMe.pattern} element={<AboutMe />} />
      </ReactRoutes>
    </Router>
  );
}
