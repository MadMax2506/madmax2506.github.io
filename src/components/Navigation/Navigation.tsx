import { AppBar, Toolbar, useTheme } from '@mui/material';
import { DesktopNavigation } from 'components/Navigation/DesktopNavigation';
import { MobileNavigation } from 'components/Navigation/MobileNavigation';
import { NavigationPage } from 'components/Navigation/types';
import { NavigationAnchors } from 'components/Route/types';

export const Navigation = (): JSX.Element => {
  const { highlighting } = useTheme();

  const navigate = (anchor: NavigationAnchors) => {
    document.getElementById(anchor)?.scrollIntoView({ behavior: 'smooth' });
  };

  const pages: NavigationPage[] = [
    {
      textKey: 'pages.about-me',
      navigate: () => navigate(NavigationAnchors.ABOUT_ME),
    },
    {
      textKey: 'pages.projects',
      navigate: () => navigate(NavigationAnchors.PROJECTS),
    },
    {
      textKey: 'pages.contact',
      navigate: () => navigate(NavigationAnchors.CONTACT),
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
