import { Avatar, Grid, Stack, Typography, useTheme } from '@mui/material';
import { SocialMediaCard } from 'components/SocialMediaCard/SocialMediaCard';
import { SocialMedia } from 'components/SocialMediaCard/social-media.types';
import { useTranslationContext } from 'context/TranslationContext/TranslationContext';

export const MailReference = (): JSX.Element => {
  const { t } = useTranslationContext();

  const { breakpoints } = useTheme();

  return (
    <Grid container sx={{ justifyContent: 'center', alignItems: 'center' }}>
      <Grid
        item
        md={5}
        sx={{
          display: { xs: 'none', md: 'block' },
        }}
      >
        <Avatar alt="logo" src="src/assets/logo.png" sx={{ width: 200, height: 200, m: 'auto' }} />
      </Grid>

      <Grid
        item
        md={7}
        xs={12}
        sx={{
          textAlign: 'center',
          [breakpoints.up('md')]: { textAlign: 'left' },
        }}
      >
        <Stack direction="column" spacing={1}>
          <Typography variant="h5">{t('contact.part1')}</Typography>
          <Typography variant="h6">{t('contact.part2')}</Typography>

          <SocialMediaCard type={SocialMedia.MAIL} linkOnly />
        </Stack>
      </Grid>
    </Grid>
  );
};
