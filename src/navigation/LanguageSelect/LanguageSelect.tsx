import { MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { LanguageConfiguration } from 'context/LanguageContext/language.types';
import { CountryInfo } from 'navigation/LanguageSelect/CountryInfo';
import { useLanguageContext } from 'context/LanguageContext/LanguageContext';

/**
 * Switch between the available {@link LanguageConfiguration}
 */
export const LanguageSelect = (): JSX.Element => {
  const { language, changeLanguage } = useLanguageContext();

  const onChange = (event: SelectChangeEvent<LanguageConfiguration>) => {
    changeLanguage(event.target.value as LanguageConfiguration);
  };

  return (
    <Select value={language} onChange={onChange} size="small">
      <MenuItem value={LanguageConfiguration.DE}>
        <CountryInfo type={LanguageConfiguration.DE} />
      </MenuItem>
      <MenuItem value={LanguageConfiguration.EN}>
        <CountryInfo type={LanguageConfiguration.EN} />
      </MenuItem>
    </Select>
  );
};
