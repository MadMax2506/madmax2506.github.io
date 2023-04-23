import { MonoNavigationAnchors } from 'routes/types';
import { Box } from '@mui/material';
import { PropsWithChildren } from 'react';

type MonoRouteProps = {
  anchor: MonoNavigationAnchors;
};

/**
 * Provides a route for the mono-page application navigation
 */
export const MonoRoute = (props: PropsWithChildren<MonoRouteProps>): JSX.Element => {
  const { anchor, children } = props;

  return (
    <Box width="100%" id={anchor}>
      {children}
    </Box>
  );
};
