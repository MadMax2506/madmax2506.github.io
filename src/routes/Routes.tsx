import { Stack } from '@mui/material';
import { Footer } from 'components/navigation/Footer';
import { Navigation } from 'components/navigation/Navigation';
import { getScrollToY, scrollTo } from 'hooks/useNavigation/navigation.utils';
import { Imprint } from 'pages/Imprint/Imprint';
import { Portfolio } from 'pages/Portfolio/Portfolio';
import { PrivacyPolicy } from 'pages/PrivacyPolicy/PrivacyPolicy';
import { useEffect } from 'react';
import {
  Navigate,
  Route as ReactRoute,
  Routes as ReactRoutes,
  BrowserRouter as Router,
  useLocation,
} from 'react-router-dom';
import { MonoNavigationAnchors } from 'routes/types';
import { paths } from './paths';

const resetState = (e: BeforeUnloadEvent) => {
  e.preventDefault();
  window.history.pushState({}, '');
};

export function RouterBody(): JSX.Element {
  const { state } = useLocation();

  // Scroll to the anchor
  window.requestAnimationFrame(() => scrollTo(getScrollToY(state?.anchor as MonoNavigationAnchors)));
  useEffect(() => {
    window.addEventListener('beforeunload', resetState);
    return () => {
      window.removeEventListener('beforeunload', resetState);
    };
  }, []);

  return (
    <>
      <Navigation />
      <Stack alignItems="center">
        <ReactRoutes>
          <ReactRoute path="*" element={<Navigate to={paths.portfolio.pattern} />} />
          <ReactRoute index path={paths.portfolio.pattern} element={<Portfolio />} />
          <ReactRoute index path={paths.imprint.pattern} element={<Imprint />} />
          <ReactRoute index path={paths.privacyPolicy.pattern} element={<PrivacyPolicy />} />
        </ReactRoutes>
      </Stack>

      <Footer />
    </>
  );
}

export function Routes(): JSX.Element {
  return (
    <Router>
      <RouterBody />
    </Router>
  );
}
