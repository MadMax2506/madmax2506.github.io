import { MonoNavigationAnchors } from 'routes/types';
import { Paths } from 'routes/paths';

export type NavigateMonoFunction = (anchor?: MonoNavigationAnchors) => void;
export type NavigateReactRouterFunction = (path: Paths) => void;

export type UseNavigationReturn = {
  navigateMono: NavigateMonoFunction;
  navigateReactRouter: NavigateReactRouterFunction;
};
