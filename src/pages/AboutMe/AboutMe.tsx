import { SectionContainer } from 'components/container/SectionContainer';
import { Grid, Typography, useTheme } from '@mui/material';
import { PersonalAvatar } from 'pages/AboutMe/PersonalAvatar';
import { useTranslationContext } from 'context/TranslationContext/TranslationContext';
import { Framework } from 'components/Framework/Framework';
import { Frameworks } from 'components/Framework/framework.types';

export const AboutMe = (): JSX.Element => {
  const { t } = useTranslationContext();

  const { breakpoints } = useTheme();

  return (
    <SectionContainer titleTextKey={'pages.about-me'}>
      <Grid
        container
        rowSpacing={{ xs: 6, md: 0 }}
        columnSpacing={{ xs: 0, md: 4 }}
        alignItems="flex-start"
        justifyContent="center"
        sx={{
          textAlign: 'center',
          [breakpoints.up('md')]: { textAlign: 'left' },
        }}
      >
        <Grid item xs={12} md={8} xl={9} order={{ xs: 2, md: 1 }}>
          <Typography sx={{ pb: 3 }}>{t('about-me')}</Typography>

          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            sx={{
              justifyContent: 'center',
              [breakpoints.up('md')]: { justifyContent: 'left' },
            }}
          >
            {Object.values(Frameworks).map((value) => (
              <Grid key={value} item>
                <Framework type={value} />
              </Grid>
            ))}
          </Grid>
        </Grid>

        <Grid item xs={12} md={4} xl={3} order={{ xs: 1, md: 2 }}>
          <PersonalAvatar />
        </Grid>
      </Grid>
    </SectionContainer>
  );
};
