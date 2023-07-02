import { Stack } from '@mui/material';
import { NavigationLink } from 'components/navigation/NavigationLink';
import { NavigationPage } from 'components/navigation/types';

type DesktopNavigationProps = {
  pages: NavigationPage[];
};

export const DesktopNavigation = (props: DesktopNavigationProps): JSX.Element => {
  const { pages } = props;

  return (
    <Stack direction="row" alignItems="center" justifyContent="center" spacing={4}>
      {pages.map(({ textKey, navigate }) => (
        <NavigationLink key={textKey} textKey={textKey} navigate={navigate} />
      ))}
    </Stack>
  );
};
