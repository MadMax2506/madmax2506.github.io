import { MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { LanguageConfiguration } from 'context/TranslationContext/utils';
import { useCookies } from 'react-cookie';
import { CountryInfo } from 'navigation/LanguageSelect/CountryInfo';

/**
 * Switch between the available {@link LanguageConfiguration}
 */
export const LanguageSelect = (): JSX.Element => {
  const [cookies, setCookie] = useCookies<'language', { language: LanguageConfiguration }>(['language']);

  const onChange = (event: SelectChangeEvent<LanguageConfiguration>) => {
    setCookie('language', event.target.value as string);
  };

  return (
    <Select value={cookies.language} onChange={onChange} size="small">
      <MenuItem value={LanguageConfiguration.DE}>
        <CountryInfo type="de" />
      </MenuItem>
      <MenuItem value={LanguageConfiguration.EN}>
        <CountryInfo type="en" />
      </MenuItem>
    </Select>
  );
};
