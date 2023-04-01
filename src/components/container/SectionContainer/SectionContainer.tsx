import { PropsWithChildren } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { TextKey } from 'types';
import { useTranslationContext } from 'context/TranslationContext/TranslationContext';
import { Divider } from 'components/container/SectionContainer/Divider';

type SectionContainerProps = PropsWithChildren<{
  titleTextKey: TextKey;
}>;

export const SectionContainer = (props: SectionContainerProps): JSX.Element => {
  const { children, titleTextKey } = props;

  const { t } = useTranslationContext();

  return (
    <Stack sx={{ width: '70%', height: '100vh', alignItems: 'center', mx: 'auto', pt: 4 }}>
      <Box sx={{ display: 'flex', width: '100%', alignItems: 'center', mb: 2 }}>
        <Divider />
        <Typography variant="h3" sx={{ textShadow: `1px 1px` }}>
          {t(titleTextKey)}
        </Typography>
        <Divider />
      </Box>
      {children}
    </Stack>
  );
};
