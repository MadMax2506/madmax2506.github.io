import { Box, Divider as MuiDivider, useTheme } from '@mui/material';

/**
 * Special divider for the sections
 */
export const Divider = (): JSX.Element => {
  const { highlighting } = useTheme();

  return (
    <Box sx={{ flexGrow: 1, alignItems: 'center', px: 2 }}>
      <MuiDivider
        sx={{
          backgroundColor: highlighting,
          borderBottomWidth: 5,
          borderRadius: 4,
          boxShadow: 3,
        }}
      />
    </Box>
  );
};
