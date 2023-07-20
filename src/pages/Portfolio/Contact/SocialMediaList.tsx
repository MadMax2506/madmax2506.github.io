import { Grid, Stack } from '@mui/material';
import { SocialMediaCard } from 'components/Card/SocialMediaCard/SocialMediaCard';
import { SocialMedia } from 'components/Card/SocialMediaCard/social-media.types';
import { JSX } from 'react';

const SOCIAL_MEDIA_TYPES = [
  SocialMedia.GIT_HUB,
  SocialMedia.LINKED_IN,
  SocialMedia.TELEGRAM,
  SocialMedia.INSTAGRAM,
  SocialMedia.XING,
];

/**
 * Display all social media references
 */
export const SocialMediaList = (): JSX.Element => (
  <>
    {/* Show Stack for very small display */}
    <Stack spacing={2} sx={{ alignItems: 'center', display: { xs: 'flex', sm: 'none' } }}>
      {SOCIAL_MEDIA_TYPES.map((type) => (
        <SocialMediaCard key={type} type={type} />
      ))}
    </Stack>

    {/* Show Grid for a display bigger as small */}
    <Grid container spacing={2} sx={{ justifyContent: 'center', display: { xs: 'none', sm: 'flex' } }}>
      {SOCIAL_MEDIA_TYPES.map((type) => (
        <Grid key={type} item>
          <SocialMediaCard type={type} />
        </Grid>
      ))}
    </Grid>
  </>
);
