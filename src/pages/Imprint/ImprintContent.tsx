import { ReactNode } from 'react';
import { Box, Typography } from '@mui/material';

type ImprintContentProps = {
  /**
   * Title and content of the component
   */
  children: [ReactNode, ReactNode];
  /**
   * Variant of the {@link Typography headline}
   * @default 'h5'
   */
  variant?: 'h5' | 'h6';
};

/**
 * Display a section of the imprint
 */
export const ImprintContent = (props: ImprintContentProps): JSX.Element => {
  const { children, variant = 'h5' } = props;

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant={variant}>{children[0]}</Typography>
      {children[1]}
    </Box>
  );
};
