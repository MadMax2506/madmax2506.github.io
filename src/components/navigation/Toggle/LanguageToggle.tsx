import { Avatar, ToggleButton, ToggleButtonGroup, Tooltip } from '@mui/material';
import { useLanguageContext } from 'context/LanguageContext/LanguageContext';
import { LanguageConfiguration } from 'context/LanguageContext/language.types';
import { MouseEvent } from 'react';

type CountryIconProps = { type: LanguageConfiguration };
const CountryIcon = (props: CountryIconProps) => {
  const { type } = props;
  const { translate } = useLanguageContext();

  return (
    <Tooltip title={translate(`language.${type}`)}>
      <Avatar sx={{ width: 20, height: 20 }} alt={type} src={`/assets/country-flags/${type}.png`} />
    </Tooltip>
  );
};

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
