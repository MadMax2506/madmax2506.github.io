import { MenuItem, Select, SelectChangeEvent, Stack, Typography } from '@mui/material';
import { NavigationPage } from 'components/Navigation/types';
import { NavigationLink } from 'components/Navigation/NavigationLink';
import { useCookies } from 'react-cookie';
import { LanguageConfiguration } from 'context/TranslationContext/utils';
import { CountryInfo } from 'components/CountryInfo';

type DesktopNavigationProps = {
  pages: NavigationPage[];
};

export const DesktopNavigation = (props: DesktopNavigationProps): JSX.Element => {
  const { pages } = props;

  const [cookies, setCookie] = useCookies<'language', { language: LanguageConfiguration }>(['language']);

  const onChange = (event: SelectChangeEvent<LanguageConfiguration>) => {
    setCookie('language', event.target.value as string);
  };

  return (
    <>
      <Typography variant="h5" component="div" flexShrink={0}>
        Max Janorschke
      </Typography>

      <Stack direction="row" alignItems="center" justifyContent="flex-end" spacing={4} flexGrow={1}>
        {pages.map(({ textKey, navigate }) => (
          <NavigationLink key={textKey} textKey={textKey} navigate={navigate} />
        ))}

        <Select value={cookies.language} onChange={onChange} size="small">
          <MenuItem value={LanguageConfiguration.DE}>
            <CountryInfo type="de" />
          </MenuItem>
          <MenuItem value={LanguageConfiguration.EN}>
            <CountryInfo type="en" />
          </MenuItem>
        </Select>
      </Stack>
    </>
  );
};
