import { Box, IconButton, Typography } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { NavigationPage } from 'components/Navigation/types';

type MobileNavigationProps = {
  pages: NavigationPage[];
};

export const MobileNavigation = (props: MobileNavigationProps): JSX.Element => {
  const { pages } = props;

  // TODO
  console.log(pages);

  return (
    <>
      <Typography variant="h6" component="div">
        Max Janorschke
      </Typography>

      <Box sx={{ display: 'flex', flexGrow: 1, flexDirection: 'row-reverse' }}>
        <IconButton size="large">
          <MenuIcon />
        </IconButton>
      </Box>
    </>
  );
};
