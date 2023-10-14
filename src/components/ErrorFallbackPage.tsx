import { Button, Card, CardContent, CardHeader, CardMedia, Link, Stack, Typography } from '@mui/material';
import { useLanguageContext } from 'context/LanguageContext/LanguageContext';
import { FC } from 'react';
import { FallbackProps } from 'react-error-boundary';
import { paths } from 'routes/paths';

export const ErrorFallbackPageProps: FC<FallbackProps> = (): JSX.Element => {
  const { translate } = useLanguageContext();

  return (
    <Stack justifyContent="center" alignItems="center" spacing={2} maxWidth="100vw" maxHeight="100vh">
      <Card sx={{ maxWidth: 800 }}>
        <CardMedia component="img" height="400" image="/assets/fallback.png" alt="Opps" />
        <CardHeader
          title={translate('errors.generic.title')}
          titleTypographyProps={{ align: 'center', variant: 'h2', color: 'text.secondary' }}
        />
        <CardContent>
          <Stack spacing={2}>
            <Typography variant="body1" color="text.secondary">
              {translate('errors.generic.message.part1')}
            </Typography>

            <Typography variant="body1" color="text.secondary">
              {translate('errors.generic.message.part2')}
            </Typography>

            <Typography variant="body1" color="text.secondary">
              {translate('errors.generic.message.part3')}{' '}
              <Link href="mailto:webmaster@max-janorschke.de">webmaster@max-janorschke.de</Link>
            </Typography>

            <Stack direction="row" spacing={2} justifyContent="center">
              <Button href={paths.portfolio.pattern} variant="contained">
                {translate('pages.about-me')}
              </Button>
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </Stack>
  );
};
