import { Paper, Stack, Typography } from '@mui/material';
import { SocialMedia } from 'components/Card/SocialMediaCard/social-media.types';
import { getSocialMediaDetails } from 'components/Card/SocialMediaCard/social-media.utils';
import { T } from 'components/T/T';
import { JSX } from 'react';
import { SocialMediaCardLink } from 'components/Card/SocialMediaCard/SocialMediaCardLink';

type SocialMediaCardProps = {
  /**
   * Type of the social media card
   */
  type: SocialMedia;
  /**
   * If true only the link of the social media reference is shown
   * @default false
   */
  linkOnly?: boolean;
};

/**
 * Display a social media reference
 */
export const SocialMediaCard = (props: SocialMediaCardProps): JSX.Element => {
  const { type, linkOnly = false } = props;

  const { link, mailTo, icon: Icon } = getSocialMediaDetails(type);

  return (
    <a href={link ?? `mailto:${mailTo}`} style={{ textDecoration: 'none' }} target={link ? '_blank' : ''}>
      {linkOnly && mailTo ? (
        <SocialMediaCardLink mailTo={mailTo} />
      ) : (
        <Paper sx={{ maxWidth: 'min-content', borderRadius: 10, py: 1, px: 2 }}>
          <Stack direction="row" alignItems="center" spacing={1.2}>
            {Icon && <Icon />}
            <Typography noWrap>
              <T textKey={`social-media.${type}`} />
            </Typography>
          </Stack>
        </Paper>
      )}
    </a>
  );
};
