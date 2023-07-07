import { Box, Typography } from '@mui/material';
import { FullPageContainer } from 'components/Container/FullPageContainer';
import { useParallax } from 'react-scroll-parallax';

export const Home = (): JSX.Element => {
  const parallax = useParallax<HTMLDivElement>({
    scaleY: [3, 0, 'easeOut'],
  });

  return (
    <FullPageContainer>
      <Box ref={parallax.ref}>
        <Typography variant="h1" textAlign="center">
          Max Janorschke
        </Typography>
      </Box>
    </FullPageContainer>
  );
};
