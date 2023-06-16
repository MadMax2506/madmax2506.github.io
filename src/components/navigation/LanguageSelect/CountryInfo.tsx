import { Avatar, Stack } from '@mui/material';
import { T } from 'components/T/T';
import { LanguageConfiguration } from 'context/LanguageContext/language.types';

type CountryProps = {
  type: LanguageConfiguration;
};

/**
 * Display the current selected {@link LanguageConfiguration}
 */
export const CountryInfo = (props: CountryProps): JSX.Element => {
  const { type } = props;

  return (
    <Stack direction="row" spacing={2}>
      <Avatar sx={{ width: 20, height: 20 }} alt={type} src={`/assets/country-flags/${type}.png`} />
      <T textKey={`country.${type}`} />
    </Stack>
  );
};
