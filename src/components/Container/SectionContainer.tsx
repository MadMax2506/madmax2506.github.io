import { Box, Hidden, Stack, Typography, useTheme } from '@mui/material';
import { Divider } from 'components/Divider';
import { T } from 'components/T/T';
import { PropsWithChildren } from 'react';
import { TextKey } from 'types';

type SectionContainerProps = PropsWithChildren<{
  /**
   * Text key of the section
   */
  titleTextKey: TextKey;
}>;

export const SectionContainer = (props: SectionContainerProps): JSX.Element => {
  const { children, titleTextKey } = props;

  const { breakpoints } = useTheme();

  return (
    <Stack
      sx={{
        width: '100%',
        minHeight: '100vh',
        alignItems: 'center',
        mx: 'auto',
        py: 10,
        [breakpoints.only('lg')]: {
          width: '80%',
        },
        [breakpoints.only('xl')]: {
          width: '70%',
        },
      }}
    >
      <Box
        sx={{
          width: '100%',
          alignItems: 'center',
          textAlign: 'center',
          mb: 4,
          [breakpoints.up('md')]: {
            display: 'flex',
          },
        }}
      >
        <Hidden mdDown>
          <Divider flexItem px={3} />
        </Hidden>

        <Typography variant="h3" sx={{ textShadow: `1px 1px` }}>
          <T textKey={titleTextKey} />
        </Typography>

        <Hidden mdDown>
          <Divider flexItem px={3} />
        </Hidden>
      </Box>

      <Box px={2} sx={{ width: '100%', alignContent: 'center', alignItems: 'center', textAlign: 'center' }}>
        {children}
      </Box>
    </Stack>
  );
};
