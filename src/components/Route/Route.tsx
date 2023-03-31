import { NavigationAnchors } from 'components/Route/types';
import { Box } from '@mui/material';
import { PropsWithChildren } from 'react';

type RouteProps = {
  anchor: NavigationAnchors;
};

/**
 * Provides a route for the one-page application navigation
 */
export const Route = (props: PropsWithChildren<RouteProps>): JSX.Element => {
  const { anchor, children } = props;

  return (
    <Box width="100%" id={anchor}>
      {children}
    </Box>
  );
};
