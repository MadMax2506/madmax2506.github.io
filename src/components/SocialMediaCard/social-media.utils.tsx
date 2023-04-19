import { SocialMedia, SocialMediaDetails } from 'components/SocialMediaCard/social-media.types';
import {
  GitHub as GitHubIcon,
  Instagram as InstagramIcon,
  LinkedIn as LinkedInIcon,
  Mail as MailIcon,
} from '@mui/icons-material';

/**
 * @param {SocialMediaCardProps['type']} type for a social media platform
 * @return {SocialMediaDetails} for a specific {@link SocialMedia type}
 */
export const getSocialMediaDetails = (type: SocialMedia): SocialMediaDetails => {
  switch (type) {
    case SocialMedia.GIT_HUB:
      return {
        icon: () => <GitHubIcon />,
        link: 'https://github.com/MadMax2506',
      };
    case SocialMedia.INSTAGRAM:
      return {
        icon: () => <InstagramIcon />,
        link: 'https://www.instagram.com/mm_mad.max/',
      };
    case SocialMedia.LINKED_IN:
      return {
        icon: () => <LinkedInIcon />,
        link: 'https://www.linkedin.com/in/max-janorschke-5b6973225',
      };
    case SocialMedia.MAIL:
      return {
        icon: () => <MailIcon />,
        mailTo: 'info@max-janorschke.de',
      };
    case SocialMedia.XING:
      return {
        link: 'https://www.xing.com/profile/Max_Janorschke',
      };
    default:
      throw Error('Invalid social-media type');
  }
};
