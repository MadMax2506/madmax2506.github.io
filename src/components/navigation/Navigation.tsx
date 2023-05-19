import { AppBar, Toolbar, useTheme } from '@mui/material';

import { MonoNavigationAnchors } from 'routes/types';
import { Contacts as ContactsIcon, Person as PersonIcon, Work as WorkIcon } from '@mui/icons-material';
import { NavigationPage } from 'components/navigation/types';
import { DesktopNavigation } from 'components/navigation/DesktopNavigation/DesktopNavigation';
import { MobileNavigation } from 'components/navigation/MobileNavigation/MobileNavigation';
import { useNavigation } from 'hooks/useNavigation/useNavigation';

export const Navigation = (): JSX.Element => {
  const { highlighting } = useTheme();

  const { navigateMonoRoute } = useNavigation();

  const pages: NavigationPage[] = [
    {
      icon: PersonIcon,
      textKey: 'pages.about-me',
      navigate: () => navigateMonoRoute(MonoNavigationAnchors.ABOUT_ME),
    },
    {
      icon: WorkIcon,
      textKey: 'pages.experience',
      navigate: () => navigateMonoRoute(MonoNavigationAnchors.EXPERIENCE),
    },
    {
      icon: ContactsIcon,
      textKey: 'pages.contact',
      navigate: () => navigateMonoRoute(MonoNavigationAnchors.CONTACT),
    },
  ];

  return (
    <AppBar position="sticky" sx={{ backgroundColor: highlighting }}>
      <Toolbar sx={{ display: { xs: 'none', md: 'flex' } }}>
        <DesktopNavigation pages={pages} />
      </Toolbar>

      <Toolbar sx={{ display: { xs: 'flex', md: 'none' } }}>
        <MobileNavigation pages={pages} />
      </Toolbar>
    </AppBar>
  );
};
