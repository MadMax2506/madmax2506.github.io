import { Avatar, Stack } from '@mui/material';
import { T } from 'components/T/T';

type CountryProps = {
  type: 'de' | 'en';
};

export const CountryInfo = (props: CountryProps): JSX.Element => {
  const { type } = props;

  return (
    <Stack direction="row" spacing={2}>
      <Avatar sx={{ width: 20, height: 20 }} alt={type} src={`src/assets/country-flags/${type}.png`} />
      <T textKey={`country.${type}`} />
    </Stack>
  );
};
