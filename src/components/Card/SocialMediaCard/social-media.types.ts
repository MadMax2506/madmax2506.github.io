export enum SocialMedia {
  GIT_HUB = 'git-hub',
  LINKED_IN = 'linked-in',
  XING = 'xing',
  TELEGRAM = 'telegram',
  INSTAGRAM = 'instagram',
  MAIL = 'mail',
}

export type SocialMediaDetails = {
  /**
   * Icon of the social media platform
   */
  icon: () => JSX.Element;
} & (
  | {
      /**
       * Reference to the online account
       */
      link: string;
      mailTo?: never;
    }
  | {
      link?: never;
      /**
       * E-Mail Address
       */
      mailTo: string;
    }
);
