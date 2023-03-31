import { PropsWithChildren } from 'react';
import { Box, BoxProps } from '@mui/material';

type FullPageProps = PropsWithChildren & Pick<BoxProps, 'alignItems' | 'justifyContent'>;

/**
 * Component to reserve the complete screen size
 */
export const FullPage = (props: FullPageProps): JSX.Element => {
  const { children, justifyContent = 'center', alignItems = 'center' } = props;

  return (
    <Box
      display="flex"
      justifyContent={justifyContent}
      alignItems={alignItems}
      minHeight="100vh"
      minWidth="100%"
      maxWidth="100%"
    >
      {children}
    </Box>
  );
};
