import { BrowserRouter as Router, Route as ReactRoute, Routes as ReactRoutes } from 'react-router-dom';
import { paths } from './paths';
import { Portfolio } from 'pages/Portfolio/Portfolio';

export function Routes(): JSX.Element {
  return (
    <Router>
      <ReactRoutes>
        <ReactRoute path="*" element={<h1>Page not found</h1>} />
        <ReactRoute index path={paths.root.pattern} element={<Portfolio />} />
      </ReactRoutes>
    </Router>
  );
}
