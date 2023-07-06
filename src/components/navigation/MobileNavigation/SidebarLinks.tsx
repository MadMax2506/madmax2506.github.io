import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { NavigationPage } from 'components/navigation/types';
import { useLanguageContext } from 'context/LanguageContext/LanguageContext';
import { Dispatch, SetStateAction } from 'react';

type SidebarLinksProps = {
  pages: NavigationPage[];
  setOpen: Dispatch<SetStateAction<boolean>>;
};

export const SidebarLinks = (props: SidebarLinksProps): JSX.Element => {
  const { pages, setOpen } = props;

  const { translate } = useLanguageContext();

  const onClick = (navigate: () => void) => {
    setOpen(() => false);
    navigate();
  };

  return (
    <List sx={{ width: 'minWidth' }}>
      {pages.map(({ textKey, navigate, icon: Icon }, index) => (
        <ListItem key={textKey} disablePadding sx={{ pt: index === 0 ? 0 : 1 }}>
          <ListItemButton onClick={() => onClick(navigate)}>
            <ListItemIcon>
              <Icon />
            </ListItemIcon>
            <ListItemText primary={translate(textKey)} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};
