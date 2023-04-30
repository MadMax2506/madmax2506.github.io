import { MonoNavigationAnchors } from 'routes/types';
import { useLocation, useNavigate as useReactRouterNavigate } from 'react-router-dom';
import { Paths } from 'routes/paths';

type NavigateMonoFunction = (anchor?: MonoNavigationAnchors) => void;
type NavigateReactRouterFunction = (path: Paths) => void;

const getScrollToY = (anchor?: MonoNavigationAnchors) => {
  if (!anchor) return 0;

  const elementY = document.getElementById(anchor)?.getBoundingClientRect()?.top || 0;
  return elementY + window.scrollY;
};

type UseNavigationReturn = {
  navigateMono: NavigateMonoFunction;
  navigateReactRouter: NavigateReactRouterFunction;
};

/**
 * Navigation for the application
 */
export const useNavigation = (): UseNavigationReturn => {
  const { pathname } = useLocation();
  const reactRouterNavigate = useReactRouterNavigate();

  /**
   * Navigates via react router to another page
   *
   * @param path react router {@link Path}
   */
  const navigateReactRouter: NavigateReactRouterFunction = (path) => {
    reactRouterNavigate(path.pattern);

    window.scroll({ top: 0, behavior: 'smooth' });
  };

  /**
   * Navigates to the{@code anchor} of the {@link paths.root Root-Page}
   *
   * @param anchor of the section
   */
  const navigateMono: NavigateMonoFunction = (anchor?: MonoNavigationAnchors) => {
    // TODO use react router if not on the portfolio page
    console.log(pathname);
    window.scroll({ top: getScrollToY(anchor), behavior: 'smooth' });
  };

  return {
    navigateMono,
    navigateReactRouter,
  };
};
