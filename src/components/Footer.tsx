import { Box, Container, Link, Stack, useTheme } from '@mui/material';
import { PageTitle } from 'components/navigation/PageTitle';
import { T } from 'components/T/T';
import { paths } from 'routes/paths';

export const Footer = (): JSX.Element => {
  const { highlighting } = useTheme();

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
          <PageTitle variant="h4" />

          <Stack direction="row" justifyContent="center" spacing={2}>
            <Link href={paths.imprint.pattern}>
              <T textKey={'pages.imprint'} />
            </Link>

            <Link href={paths.privacyPolicy.pattern}>
              <T textKey={'pages.privacy-policy'} />
            </Link>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};
