import { PropsWithChildren } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { TextKey } from 'types';
import { Divider } from 'components/Divider';
import { T } from 'components/T/T';

type SectionContainerProps = PropsWithChildren<{
  /**
   * Text key of the section
   */
  titleTextKey: TextKey;
  /**
   * If true the container has a with of 100%
   * @default false
   */
  fullWidth?: boolean;
}>;

export const SectionContainer = (props: SectionContainerProps): JSX.Element => {
  const { children, titleTextKey, fullWidth = false } = props;

  return (
    <Stack sx={{ width: '100%', minHeight: '100vh', alignItems: 'center', mx: 'auto', py: 6 }}>
      <Box sx={{ display: 'flex', width: '100%', alignItems: 'center', mb: 4 }}>
        <Divider flexItem px={2} />
        <Typography variant="h3" sx={{ textShadow: `1px 1px` }}>
          <T textKey={titleTextKey} />
        </Typography>
        <Divider flexItem px={2} />
      </Box>
      <Box px={8} sx={fullWidth ? { width: '100%' } : {}}>
        {children}
      </Box>
    </Stack>
  );
};
