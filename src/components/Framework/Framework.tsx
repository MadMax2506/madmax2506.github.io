import { Frameworks } from 'components/Framework/framework.types';
import { Avatar, Card, CardContent, Stack, Typography } from '@mui/material';
import { useTranslationContext } from 'context/TranslationContext/TranslationContext';

type FrameworkProps = { type: Frameworks };

export const Framework = (props: FrameworkProps): JSX.Element => {
  const { type } = props;

  const { t } = useTranslationContext();

  return (
    <Card sx={{ maxWidth: 'min-content', borderRadius: 100, height: 80 }}>
      <CardContent sx={{ px: 2, height: 80 }}>
        <Stack direction="row" alignItems="center" spacing={1.2}>
          <Avatar alt={type} src={`src/assets/frameworks/${type}.svg`} />
          <Typography noWrap>{t(`frameworks.${type}`)}</Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};
