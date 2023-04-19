import { AppBar, Toolbar, useTheme } from '@mui/material';

import { MonoNavigationAnchors } from 'components/Route/types';
import {
  Contacts as ContactsIcon,
  FolderCopy as FolderCopyIcon,
  Person as PersonIcon,
  Work as WorkIcon,
} from '@mui/icons-material';
import { NavigationPage } from 'navigation/types';
import { DesktopNavigation } from 'navigation/DesktopNavigation/DesktopNavigation';
import { MobileNavigation } from 'navigation/MobileNavigation/MobileNavigation';

export const Navigation = (): JSX.Element => {
  const { highlighting } = useTheme();

  const navigate = (anchor: MonoNavigationAnchors) => {
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
      navigate: () => navigate(MonoNavigationAnchors.ABOUT_ME),
    },
    {
      icon: WorkIcon,
      textKey: 'pages.experience',
      navigate: () => navigate(MonoNavigationAnchors.EXPERIENCE),
    },
    {
      icon: FolderCopyIcon,
      textKey: 'pages.projects',
      navigate: () => navigate(MonoNavigationAnchors.PROJECTS),
    },
    {
      icon: ContactsIcon,
      textKey: 'pages.contact',
      navigate: () => navigate(MonoNavigationAnchors.CONTACT),
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
