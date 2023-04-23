import { BrowserRouter as Router, Route as ReactRoute, Routes as ReactRoutes } from 'react-router-dom';
import { paths } from './paths';
import { Portfolio } from 'pages/Portfolio/Portfolio';
import { PrivacyPolicy } from 'pages/PrivacyPolicy/PrivacyPolicy';
import { Imprint } from 'pages/Imprint/Imprint';

export function Routes(): JSX.Element {
  return (
    <Router>
      <ReactRoutes>
        <ReactRoute path="*" element={<h1>Page not found</h1>} />
        <ReactRoute index path={paths.root.pattern} element={<Portfolio />} />
        <ReactRoute index path={paths.imprint.pattern} element={<Imprint />} />
        <ReactRoute index path={paths.privacyPolicy.pattern} element={<PrivacyPolicy />} />
      </ReactRoutes>
    </Router>
  );
}
