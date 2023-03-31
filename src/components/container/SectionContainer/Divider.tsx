import { Box, Divider as MuiDivider } from '@mui/material';

/**
 * Special divider for the sections
 */
export const Divider = (): JSX.Element => {
  return (
    <Box sx={{ flexGrow: 1, alignItems: 'center', px: 2 }}>
      <MuiDivider />
    </Box>
  );
};
