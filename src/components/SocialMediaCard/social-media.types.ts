import { SvgIconComponent } from '@mui/icons-material';

export enum SocialMedia {
  XING = 'xing',
  LINKED_IN = 'linked-in',
  GIT_HUB = 'git-hub',
  MAIL = 'mail',
  INSTAGRAM = 'instagram',
}

export type SocialMediaDetails = {
  icon: SvgIconComponent;
  textKey: string;
};
