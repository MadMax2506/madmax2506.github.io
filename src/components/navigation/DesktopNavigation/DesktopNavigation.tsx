import { Stack } from '@mui/material';
import { PageTitle } from 'components/navigation/PageTitle';
import { NavigationPage } from 'components/navigation/types';
import { NavigationLink } from 'components/navigation/DesktopNavigation/NavigationLink';
import { LanguageSelect } from 'components/navigation/LanguageSelect/LanguageSelect';
import { ThemeModeToggle } from 'components/navigation/ThemeModeToggle';

type DesktopNavigationProps = {
  pages: NavigationPage[];
};

export const DesktopNavigation = (props: DesktopNavigationProps): JSX.Element => {
  const { pages } = props;

  return (
    <Stack direction="row" alignItems="center" spacing={4}>
      <PageTitle variant="h5" flexShrink={0} />

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
