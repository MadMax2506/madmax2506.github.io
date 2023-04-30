import { ReactNode } from 'react';
import { Box, Typography } from '@mui/material';

type ImprintContentProps = {
  /**
   * Title and content of the component
   */
  children: [ReactNode, ReactNode];
  /**
   * If {@code true} the content components contains not only text
   * @default false
   */
  deep?: boolean;
};

/**
 * Display a section of the privacy policy
 */
export const PrivacyPolicyContent = (props: ImprintContentProps): JSX.Element => {
  const { children, deep = false } = props;

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h5">{children[0]}</Typography>
      <Typography sx={{ textAlign: deep ? 'left' : 'inherit' }}>{children[1]}</Typography>
    </Box>
  );
};
