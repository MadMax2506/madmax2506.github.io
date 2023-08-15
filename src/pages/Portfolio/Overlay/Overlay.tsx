import { Box, Typography, useTheme } from '@mui/material';
import dayjs from 'dayjs';
import { PropsWithChildren, useState } from 'react';
import { useCookies } from 'react-cookie';
import './overlay.css';

export const Overlay = ({ children }: PropsWithChildren): JSX.Element => {
  const {
    palette: {
      background: { default: bgColor },
    },
  } = useTheme();

  const [{ lastVisit }, setCookie] = useCookies<'lastVisit', { lastVisit: string | undefined }>(['lastVisit']);
  const hideOverlay = !!lastVisit && dayjs().diff(dayjs(lastVisit), 'day') < 1;

  const [overlayClass, setOverlayClass] = useState<string | undefined>();
  const [childrenClass, setChildrenClass] = useState<string | undefined>();

  setTimeout(() => {
    if (!hideOverlay) {
      setOverlayClass('fade-out');
      setChildrenClass('fade-in');
      setCookie('lastVisit', dayjs().toISOString());
    }
  }, 1500);

  if (hideOverlay) return <Box>{children}</Box>;

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
        <Typography textAlign="center" sx={{ typography: { xs: 'h5', sm: 'h4', md: 'h3', lg: 'h1' } }}>
          Max Janorschke
        </Typography>
      </Box>

      <Box sx={childrenClass ? {} : { visibility: 'hidden', opacity: 0 }} className={childrenClass}>
        {children}
      </Box>
    </>
  );
};
