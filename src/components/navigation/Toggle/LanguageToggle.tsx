import { Avatar, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { useLanguageContext } from 'context/LanguageContext/LanguageContext';
import { LanguageConfiguration } from 'context/LanguageContext/language.types';
import { MouseEvent } from 'react';

type CountryIconProps = { type: LanguageConfiguration };
const CountryIcon = ({ type }: CountryIconProps) => (
  <Avatar sx={{ width: 20, height: 20 }} alt={type} src={`/assets/country-flags/${type}.png`} />
);

/**
 * Switch between the available {@link LanguageConfiguration}
 */
export const LanguageToggle = (): JSX.Element => {
  const { language, changeLanguage } = useLanguageContext();

  const handleLanguage = (_: MouseEvent<HTMLElement>, val: LanguageConfiguration) => changeLanguage(val);

  return (
    <ToggleButtonGroup value={language} exclusive onChange={handleLanguage} color="secondary">
      <ToggleButton value={LanguageConfiguration.DE} color="secondary">
        <CountryIcon type={LanguageConfiguration.DE} />
      </ToggleButton>
      <ToggleButton value={LanguageConfiguration.EN} color="secondary">
        <CountryIcon type={LanguageConfiguration.EN} />
      </ToggleButton>
    </ToggleButtonGroup>
  );
};
