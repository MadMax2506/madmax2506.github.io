import { Stack, Typography } from '@mui/material';
import { NavigationPage } from 'components/Navigation/types';
import { NavigationLink } from 'components/Navigation/NavigationLink';
import { LanguageSelect } from 'components/LanguageSelect/LanguageSelect';
import { ThemeModeToggle } from 'components/ThemeModeToggle/ThemeModeToggle';

type DesktopNavigationProps = {
  pages: NavigationPage[];
};

export const DesktopNavigation = (props: DesktopNavigationProps): JSX.Element => {
  const { pages } = props;

  return (
    <Stack direction="row" alignItems="center" spacing={4}>
      <Typography variant="h5" component="div" flexShrink={0}>
        Max Janorschke
      </Typography>

      <Stack direction="row" justifyContent="flex-end" spacing={4} flexGrow={1}>
        {pages.map(({ textKey, navigate }) => (
          <NavigationLink key={textKey} textKey={textKey} navigate={navigate} />
        ))}
      </Stack>

      <LanguageSelect />

      <ThemeModeToggle />
    </Stack>
  );
};
