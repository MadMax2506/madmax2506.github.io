import { useTranslationContext } from 'context/TranslationContext/TranslationContext';
import { Avatar, Stack, Typography } from '@mui/material';

type CountryProps = {
  type: 'de' | 'en';
};

export const CountryInfo = (props: CountryProps): JSX.Element => {
  const { type } = props;

  const { t } = useTranslationContext();

  return (
    <Stack direction="row" spacing={2}>
      <Avatar sx={{ width: 20, height: 20 }} alt={type} src={`src/assets/country-flags/${type}.png`} />
      <Typography>{t(`country.${type}`)}</Typography>
    </Stack>
  );
};
