import { Grid } from '@mui/material';
import { SocialMediaCard } from 'components/Card/SocialMediaCard/SocialMediaCard';
import { SocialMedia } from 'components/Card/SocialMediaCard/social-media.types';
import { JSX } from 'react';

/**
 * Display all social media references
 */
export const SocialMediaList = (): JSX.Element => {
  return (
    <Grid container spacing={{ xs: 2, md: 3 }} sx={{ justifyContent: 'center' }}>
      <Grid item>
        <SocialMediaCard type={SocialMedia.GIT_HUB} />
      </Grid>

      <Grid item>
        <SocialMediaCard type={SocialMedia.LINKED_IN} />
      </Grid>

      <Grid item>
        <SocialMediaCard type={SocialMedia.TELEGRAM} />
      </Grid>

      <Grid item>
        <SocialMediaCard type={SocialMedia.INSTAGRAM} />
      </Grid>

      <Grid item>
        <SocialMediaCard type={SocialMedia.XING} />
      </Grid>
    </Grid>
  );
};
