import { TextKey } from 'types';
import { SvgIconComponent } from '@mui/icons-material';

export type NavigationPage = {
  icon: SvgIconComponent;
  textKey: TextKey;
  navigate: () => void;
};
