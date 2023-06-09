import { MonoNavigationAnchors } from 'routes/types';
import { useNavigate as useReactRouterNavigate } from 'react-router-dom';
import { paths } from 'routes/paths';
import {
  NavigateMonoFunction,
  NavigateReactRouterFunction,
  UseNavigationReturn,
} from 'hooks/useNavigation/navigation.types';

/**
 * Navigation for the application
 */
export const useNavigation = (): UseNavigationReturn => {
  const reactRouterNavigate = useReactRouterNavigate();

  /**
   * Navigates via react router to another page
   *
   * @param path react router {@link Path}
   */
  const navigateReactRouter: NavigateReactRouterFunction = (path) => {
    reactRouterNavigate(path.pattern, { state: {} });
  };

  /**
   * Navigates to the{@code anchor} of the {@link paths.portfolio Root-Page}
   *
   * @param anchor of the section
   */
  const navigateMonoRoute: NavigateMonoFunction = (anchor?: MonoNavigationAnchors) => {
    reactRouterNavigate(paths.portfolio.pattern, { state: { anchor } });
  };

  return {
    navigateMonoRoute,
    navigateReactRouter,
  };
};
