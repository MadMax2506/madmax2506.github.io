import { AppBar, Toolbar, useTheme } from '@mui/material';
import { DesktopNavigation } from 'components/Navigation/DesktopNavigation/DesktopNavigation';
import { MobileNavigation } from 'components/Navigation/MobileNavigation/MobileNavigation';
import { NavigationPage } from 'components/Navigation/types';
import { NavigationAnchors } from 'components/Route/types';
import { Contacts as ContactsIcon, FolderCopy as FolderCopyIcon, Person as PersonIcon } from '@mui/icons-material';

export const Navigation = (): JSX.Element => {
  const { highlighting } = useTheme();

  const navigate = (anchor: NavigationAnchors) => {
    const elementY = document.getElementById(anchor)?.getBoundingClientRect()?.top || 0;
    const scrollToY = elementY + window.scrollY;

    window.scroll({
      top: scrollToY,
      behavior: 'smooth',
    });
  };

  const pages: NavigationPage[] = [
    {
      icon: PersonIcon,
      textKey: 'pages.about-me',
      navigate: () => navigate(NavigationAnchors.ABOUT_ME),
    },
    {
      icon: FolderCopyIcon,
      textKey: 'pages.projects',
      navigate: () => navigate(NavigationAnchors.PROJECTS),
    },
    {
      icon: ContactsIcon,
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
