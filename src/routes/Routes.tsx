import { BrowserRouter as Router, Route as ReactRoute, Routes as ReactRoutes } from 'react-router-dom';
import { paths } from './paths';
import { Portfolio } from 'pages/Portfolio/Portfolio';
import { PrivacyPolicy } from 'pages/PrivacyPolicy/PrivacyPolicy';
import { Imprint } from 'pages/Imprint/Imprint';
import { Navigation } from 'components/navigation/Navigation';
import { Stack } from '@mui/material';
import { Footer } from 'components/navigation/Footer';

export function Routes(): JSX.Element {
  return (
    <Router>
      <Navigation />
      <Stack alignItems="center">
        <ReactRoutes>
          <ReactRoute path="*" element={<h1>Page not found</h1>} />
          <ReactRoute index path={paths.portfolio.pattern} element={<Portfolio />} />
          <ReactRoute index path={paths.imprint.pattern} element={<Imprint />} />
          <ReactRoute index path={paths.privacyPolicy.pattern} element={<PrivacyPolicy />} />
        </ReactRoutes>
      </Stack>

      <Footer />
    </Router>
  );
}
