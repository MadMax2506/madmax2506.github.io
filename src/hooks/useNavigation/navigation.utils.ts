import { MonoNavigationAnchors } from 'routes/types';

/**
 * Scrolls smooth to the target
 *
 * @param top target position
 */
export const scrollTo = (top: number) => window.scroll({ top, behavior: 'smooth' });

/**
 * @param anchor target
 * @return target positions
 */
export const getScrollToY = (anchor?: MonoNavigationAnchors): number => {
  if (!anchor) return 0;

  const elementY = document.getElementById(anchor)?.getBoundingClientRect().top || 0;
  return elementY + window.scrollY;
};
