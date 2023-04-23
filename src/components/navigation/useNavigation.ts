import { MonoNavigationAnchors } from 'routes/types';

type NavigateFunction = (anchor: MonoNavigationAnchors) => void;

type UseNavigationReturn = {
  navigate: NavigateFunction;
};

export const useNavigation = (): UseNavigationReturn => {
  const navigate: NavigateFunction = (anchor: MonoNavigationAnchors) => {
    const elementY = document.getElementById(anchor)?.getBoundingClientRect()?.top || 0;
    const scrollToY = elementY + window.scrollY;

    window.scroll({
      top: scrollToY,
      behavior: 'smooth',
    });
  };

  return {
    navigate,
  };
};
