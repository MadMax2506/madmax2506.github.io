import { MonoNavigationAnchors } from 'routes/types';

type NavigateFunction = (anchor: MonoNavigationAnchors) => void;

type UseNavigationReturn = {
  navigate: NavigateFunction;
};

/**
 * Navigation for the application
 */
export const useNavigation = (): UseNavigationReturn => {
  const navigate: NavigateFunction = (anchor: MonoNavigationAnchors) => {
    const elementY = document.getElementById(anchor)?.getBoundingClientRect()?.top || 0;
    const scrollToY = elementY + window.scrollY;
    // TODO use react router if not on the portfolio page
    window.scroll({
      top: scrollToY,
      behavior: 'smooth',
    });
  };

  return {
    navigate,
  };
};
