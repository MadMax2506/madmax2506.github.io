import { TextKey } from 'types';

export type NavigationPage = {
  textKey: TextKey;
  navigate: () => void;
};
