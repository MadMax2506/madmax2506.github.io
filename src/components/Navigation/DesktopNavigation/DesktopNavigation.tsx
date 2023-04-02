import { Stack } from '@mui/material';
import { NavigationPage } from 'components/Navigation/types';
import { NavigationLink } from 'components/Navigation/DesktopNavigation/NavigationLink';
import { LanguageSelect } from 'components/LanguageSelect/LanguageSelect';
import { ThemeModeToggle } from 'components/ThemeModeToggle';
import { PageTitle } from 'components/Navigation/PageTitle';

type DesktopNavigationProps = {
  pages: NavigationPage[];
};

export const DesktopNavigation = (props: DesktopNavigationProps): JSX.Element => {
  const { pages } = props;

  return (
    <Stack direction="row" alignItems="center" spacing={4}>
      <PageTitle variant="h5" />

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
