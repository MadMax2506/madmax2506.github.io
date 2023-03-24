import { Box, Container } from '@mui/material';
import { useTranslationContext } from 'context/TranslationContext/TranslationContext';

export const Home = (): JSX.Element => {
  const { t } = useTranslationContext();

  return (
    <Container component="main" maxWidth="lg">
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>{t('menu.home')}</Box>
    </Container>
  );
};
