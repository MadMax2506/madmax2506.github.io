import { BrowserRouter as Router, Route as ReactRoute, Routes as ReactRoutes, useLocation } from 'react-router-dom';
import { paths } from './paths';
import { Portfolio } from 'pages/Portfolio/Portfolio';
import { PrivacyPolicy } from 'pages/PrivacyPolicy/PrivacyPolicy';
import { Imprint } from 'pages/Imprint/Imprint';
import { Navigation } from 'components/navigation/Navigation';
import { Stack } from '@mui/material';
import { Footer } from 'components/navigation/Footer';
import { getScrollToY, scrollTo } from 'hooks/useNavigation/navigation.utils';
import { MonoNavigationAnchors } from 'routes/types';
import { useEffect } from 'react';

/**
 * Reset the state in the page history
 *
 * @param e {@link BeforeUnloadEvent}
 */
const resetState = (e: BeforeUnloadEvent) => {
  e.preventDefault();
  window.history.pushState({}, '');
};

/**
 * Display all {@link ReactRoute routes} together with {@link Navigation} and {@link Footer}
 */
export function RouterBody(): JSX.Element {
  const { state } = useLocation();
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
          <ReactRoute path="*" element={<h1>Page not found</h1>} />
          <ReactRoute index path={paths.portfolio.pattern} element={<Portfolio />} />
          <ReactRoute index path={paths.imprint.pattern} element={<Imprint />} />
          <ReactRoute index path={paths.privacyPolicy.pattern} element={<PrivacyPolicy />} />
        </ReactRoutes>
      </Stack>

      <Footer />
    </>
  );
}

/**
 * Provide the {@link Router} with the {@link RouterBody}
 */
export function Routes(): JSX.Element {
  return (
    <Router>
      <RouterBody />
    </Router>
  );
}
