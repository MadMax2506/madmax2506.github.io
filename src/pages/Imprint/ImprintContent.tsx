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
  /**
   * If {@code true} the content components contains not only text
   * @default false
   */
  deep?: boolean;
};

/**
 * Display a section of the imprint
 */
export const ImprintContent = (props: ImprintContentProps): JSX.Element => {
  const { children, variant = 'h5', deep = false } = props;

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant={variant}>{children[0]}</Typography>
      {deep ? children[1] : <Typography>{children[1]}</Typography>}
    </Box>
  );
};
