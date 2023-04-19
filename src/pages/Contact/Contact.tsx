import { SectionContainer } from 'components/Container/SectionContainer';
import { SocialMediaCard } from 'components/SocialMediaCard/SocialMediaCard';
import { Grid } from '@mui/material';
import { SocialMedia } from 'components/SocialMediaCard/social-media.types';

export const Contact = (): JSX.Element => {
  return (
    <SectionContainer titleTextKey="pages.contact">
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
          <SocialMediaCard type={SocialMedia.MAIL} />
        </Grid>

        <Grid item>
          <SocialMediaCard type={SocialMedia.INSTAGRAM} />
        </Grid>

        <Grid item>
          <SocialMediaCard type={SocialMedia.XING} />
        </Grid>
      </Grid>
    </SectionContainer>
  );
};
