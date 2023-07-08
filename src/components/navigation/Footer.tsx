import { Box, Container, Stack, useTheme } from '@mui/material';
import { NavigationLink } from 'components/navigation/NavigationLink';
import { useNavigation } from 'hooks/useNavigation/useNavigation';
import { paths } from 'routes/paths';
import { PageTitle } from './PageTitle';

export const Footer = (): JSX.Element => {
  const { highlighting } = useTheme();
  const { navigateReactRouter } = useNavigation();

  return (
    <Box
      sx={{
        width: '100%',
        height: 'auto',
        backgroundColor: highlighting,
        paddingTop: '1rem',
        paddingBottom: '1rem',
      }}
    >
      <Container maxWidth="lg">
        <Stack direction="column" alignItems="center" spacing={2}>
          <PageTitle variant="h4" withLink />

          <Stack direction="row" justifyContent="center" spacing={2}>
            <NavigationLink
              variant="body1"
              textKey={'pages.imprint'}
              navigate={() => navigateReactRouter(paths.imprint)}
            />
            <NavigationLink
              variant="body1"
              textKey={'pages.privacy-policy'}
              navigate={() => navigateReactRouter(paths.privacyPolicy)}
            />
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};
