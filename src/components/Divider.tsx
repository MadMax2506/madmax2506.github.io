import { Box, Divider as MuiDivider, SxProps, useTheme } from '@mui/material';
import { CSSProperties } from 'react';

type DividerProps = {
  /**
   * If true the divider will be placed inside a flex-box
   * @default false
   */
  flexItem?: boolean;
  /**
   * If true the bord
   * @default 4
   */
  borderRadius?: number;
  /**
   * Divider width
   */
  width?: CSSProperties['width'];
  /**
   * x-axis padding
   */
  px?: number;
  /**
   * y-axis padding
   */
  py?: number;
};

/**
 * Custom divider
 */
export const Divider = (props: DividerProps): JSX.Element => {
  const { flexItem = false, borderRadius = 4, width, px, py } = props;

  const { highlighting } = useTheme();

  const boxPropsSX: SxProps = flexItem
    ? {
        flexGrow: 1,
        alignItems: 'center',
      }
    : {};

  return (
    <Box sx={{ ...boxPropsSX, px, py, width }}>
      <MuiDivider
        sx={{
          backgroundColor: highlighting,
          borderBottomWidth: 5,
          borderRadius,
          boxShadow: 3,
          width,
        }}
      />
    </Box>
  );
};
