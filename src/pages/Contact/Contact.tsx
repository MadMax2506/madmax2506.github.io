import { SectionContainer } from 'components/Container/SectionContainer';
import { SocialMedia } from 'components/SocialMediaCard/social-media.types';
import { SocialMediaCard } from 'components/SocialMediaCard/SocialMediaCard';
import { Grid } from '@mui/material';

export const Contact = (): JSX.Element => {
  return (
    <SectionContainer titleTextKey="pages.contact">
      <Grid container spacing={{ xs: 2, md: 3 }} sx={{ justifyContent: 'center' }}>
        {Object.values(SocialMedia).map((socialMedia) => (
          <Grid key={socialMedia} item>
            <SocialMediaCard type={socialMedia} />
          </Grid>
        ))}
      </Grid>
    </SectionContainer>
  );
};
