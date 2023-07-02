import { Box, Stack, Typography } from '@mui/material';
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

  return (
    <Stack sx={{ width: '100%', minHeight: '100vh', alignItems: 'center', mx: 'auto', py: 8 }}>
      <Box sx={{ display: 'flex', width: '100%', alignItems: 'center', mb: 4 }}>
        <Divider flexItem px={2} />
        <Typography variant="h3" sx={{ textShadow: `1px 1px` }}>
          <T textKey={titleTextKey} />
        </Typography>
        <Divider flexItem px={2} />
      </Box>
      <Box px={8} sx={{ width: '80%' }}>
        {children}
      </Box>
    </Stack>
  );
};
