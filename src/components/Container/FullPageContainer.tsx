import { PropsWithChildren } from 'react';
import { Box, BoxProps } from '@mui/material';

type FullPageProps = PropsWithChildren & Pick<BoxProps, 'alignItems' | 'justifyContent'>;

/**
 * Component to reserve the complete screen size
 */
export const FullPageContainer = (props: FullPageProps): JSX.Element => {
  const { children } = props;

  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100vh" width="100%">
      {children}
    </Box>
  );
};
