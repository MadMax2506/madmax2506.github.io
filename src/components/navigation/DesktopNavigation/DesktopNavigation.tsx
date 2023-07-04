import { Grid, Stack, useTheme } from '@mui/material';
import { NavigationLink } from 'components/navigation/NavigationLink';
import { NavigationPage } from 'components/navigation/types';
import { LanguageToggle } from '../Toggle/LanguageToggle';
import { ThemeModeToggle } from '../Toggle/ThemeModeToggle';

type DesktopNavigationProps = {
  pages: NavigationPage[];
};

export const DesktopNavigation = (props: DesktopNavigationProps): JSX.Element => {
  const { pages } = props;

  const { breakpoints } = useTheme();

  return (
    <Grid container alignItems="center">
      <Grid item lg={2} />

      <Grid item xs={10} lg={8}>
        <Stack
          direction="row"
          spacing={4}
          sx={{
            alignItems: 'center',
            justifyContent: 'center',
            [breakpoints.only('md')]: {
              justifyContent: 'flex-start',
            },
          }}
        >
          {pages.map(({ textKey, navigate }) => (
            <NavigationLink key={textKey} textKey={textKey} navigate={navigate} />
          ))}
        </Stack>
      </Grid>

      <Grid item xs={2}>
        <Stack direction="row" alignItems="center" justifyContent="flex-end" spacing={2}>
          <LanguageToggle />
          <ThemeModeToggle color="secondary" />
        </Stack>
      </Grid>
    </Grid>
  );
};
