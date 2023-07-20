import { Box, Grid, Typography } from '@mui/material';
import { SocialMediaCard } from 'components/Card/SocialMediaCard/SocialMediaCard';
import { SocialMedia } from 'components/Card/SocialMediaCard/social-media.types';
import { SectionContainer } from 'components/Container/SectionContainer';
import { T } from 'components/T/T';
import { SocialMediaList } from 'pages/Portfolio/Contact/SocialMediaList';
import { JSX } from 'react';

export const Contact = (): JSX.Element => (
  <SectionContainer titleTextKey="pages.contact">
    <Grid container sx={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center' }} spacing={6}>
      <Grid xs={12} item>
        <SocialMediaList />
      </Grid>

      <Grid xs={12} item>
        <Typography variant="h4" pb={1}>
          <T textKey={'contact.part1'} />
        </Typography>

        <Typography variant="h6" pb={1}>
          <T textKey={'contact.part2'} />
        </Typography>

        <Box display="flex" justifyContent="center">
          <SocialMediaCard type={SocialMedia.MAIL} linkOnly />
        </Box>
      </Grid>
    </Grid>
  </SectionContainer>
);
