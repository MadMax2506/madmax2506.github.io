export enum SocialMedia {
  XING = 'xing',
  LINKED_IN = 'linked-in',
  GIT_HUB = 'git-hub',
  MAIL = 'mail',
  INSTAGRAM = 'instagram',
}

export type SocialMediaDetails = {
  /**
   * Icon of the social media platform
   */
  icon?: () => JSX.Element;
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
