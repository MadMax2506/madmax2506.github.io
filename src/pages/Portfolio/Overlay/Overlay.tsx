import { Box, Typography, useTheme } from '@mui/material';
import { PropsWithChildren, useState } from 'react';
import './overlay.css';

export const Overlay = ({ children }: PropsWithChildren): JSX.Element => {
  const {
    palette: {
      background: { default: bgColor },
    },
  } = useTheme();

  const [overlayClass, setOverlayClass] = useState<string | undefined>();
  const [childrenClass, setChildrenClass] = useState<string | undefined>();

  setTimeout(() => {
    setOverlayClass('fade-out');
    setChildrenClass('fade-in');
  }, 1500);

  return (
    <>
      <Box
        sx={{
          position: 'fixed',
          left: 0,
          top: 0,
          height: '100vh',
          width: '100vw',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 2100,
          backgroundColor: bgColor,
        }}
        className={overlayClass}
      >
        <Typography textAlign="center" sx={{ typography: { xs: 'body1', sm: 'h4', md: 'h3', lg: 'h1' } }}>
          Max Janorschke
        </Typography>
      </Box>

      <Box sx={childrenClass ? {} : { visibility: 'hidden', opacity: 0 }} className={childrenClass}>
        {children}
      </Box>
    </>
  );
};
