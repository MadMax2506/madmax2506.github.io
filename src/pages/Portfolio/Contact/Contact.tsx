import { SectionContainer } from 'components/Container/SectionContainer';
import { Box, Grid, Typography } from '@mui/material';
import { SocialMediaList } from 'pages/Portfolio/Contact/SocialMediaList';
import { JSX } from 'react';
import { T } from 'components/T/T';
import { SocialMediaCard } from 'components/Card/SocialMediaCard/SocialMediaCard';
import { SocialMedia } from 'components/Card/SocialMediaCard/social-media.types';
import { DiscordIntegration } from 'pages/Portfolio/Contact/DiscordIntegration';

export const Contact = (): JSX.Element => {
  return (
    <SectionContainer titleTextKey="pages.contact">
      <Grid container sx={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center' }} spacing={3}>
        <Grid xs={12} item>
          <SocialMediaList />
        </Grid>

        <Grid xs={12} item>
          <Typography variant="h4">
            <T textKey={'contact.part1'} />
          </Typography>
        </Grid>

        <Grid xs={12} item>
          <Typography variant="h6" sx={{ pb: 1 }}>
            <T textKey={'contact.part2'} />
          </Typography>

          <Box display="flex" justifyContent="center">
            <SocialMediaCard type={SocialMedia.MAIL} linkOnly />
          </Box>
        </Grid>

        <Grid xs={12} item>
          <Typography variant="h6" sx={{ pb: 1 }}>
            <T textKey={'contact.part3'} />
          </Typography>

          <Box display="flex" justifyContent="center">
            <DiscordIntegration width={300} height={300} />
          </Box>
        </Grid>
      </Grid>
    </SectionContainer>
  );
};
