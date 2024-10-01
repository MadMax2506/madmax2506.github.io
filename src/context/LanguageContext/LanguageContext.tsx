// START: DONT REMOVE THE FOLLOWING IMPORTS
import 'dayjs/locale/de';
import 'dayjs/locale/en';
// END: DONT REMOVE THE FOLLOWING IMPORTS
import { Localization, deDE as muiMaterialDE, enUS as muiMaterialEN } from '@mui/material/locale';
import { LocalizationProvider, PickersLocaleText } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { deDE as muiDatePickersDE, enUS as muiDatePickersEN } from '@mui/x-date-pickers/locales';
import {
  ChangeLanguageFunction,
  LanguageConfiguration,
  LanguageTag,
  TextKeyArg,
  TextKeyFunction,
} from 'context/LanguageContext/language.types';
import dayjs, { Dayjs } from 'dayjs';
import { PropsWithChildren, createContext, useContext, useEffect, useMemo } from 'react';
import { useCookies } from 'react-cookie';
import { flatJsonObject } from 'utils';
import { deLocales, enLocales } from './locales';

type Language = {
  /**
   * Translation function
   */
  translate: TextKeyFunction;
  /**
   * Current language
   */
  language: LanguageConfiguration;
  /**
   * Current language tag
   */
  languageTag: LanguageTag;
  /**
   * Current locale for mui
   */
  muiLocale: Localization;
  /**
   * Update the current language
   */
  changeLanguage: ChangeLanguageFunction;
};

const DEFAULT_LANGUAGE = LanguageConfiguration.DE;

const osLanguage = (): LanguageConfiguration => window.navigator.language.split('-')[0] as LanguageConfiguration;

const LanguageContext = createContext<Language>({} as Language);

export const LanguageProvider = (props: PropsWithChildren) => {
  const { children } = props;

  const [{ language }, setCookie] = useCookies<'language', { language: LanguageConfiguration | undefined }>([
    'language',
  ]);

  const flatDeLocales = useMemo(() => flatJsonObject(deLocales), []);
  const flatEnLocales = useMemo(() => flatJsonObject(enLocales), []);

  useEffect(() => {
    if (language) {
      dayjs().locale(language);
    } else {
      changeLanguage(osLanguage());
    }
  }, [language]);

  const translate: TextKeyFunction = (key, args?: TextKeyArg[]) => {
    const text = (language === LanguageConfiguration.DE ? flatDeLocales : flatEnLocales)[key];

    if (!text) return key;
    const textStr = text as string;

    if (args) {
      let textWithArgs = textStr;
      args.forEach((arg, index) => {
        textWithArgs = textWithArgs.replace(`{${index}}`, `${arg}`);
      });
      return textWithArgs;
    }

    return textStr;
  };

  const changeLanguage: ChangeLanguageFunction = (language) => setCookie('language', language);

  const currentLanguageTag = (): LanguageTag => {
    switch (language) {
      case LanguageConfiguration.DE:
        return LanguageTag.DE_DE;
      default:
        return LanguageTag.EN_US;
    }
  };

  const currentMuiLocale = (): Localization => {
    switch (language) {
      case LanguageConfiguration.DE:
        return muiMaterialDE;
      default:
        return muiMaterialEN;
    }
  };

  const currentDayJsLocale = (): string => {
    switch (language) {
      case LanguageConfiguration.DE:
        return dayjs.locale('de');
      default:
        return dayjs.locale('en');
    }
  };

  function currentMuiDatePickerLocaleTexts(): Partial<PickersLocaleText<Dayjs>> {
    switch (language) {
      case LanguageConfiguration.DE:
        return muiDatePickersDE.components.MuiLocalizationProvider.defaultProps.localeText;
      default:
        return muiDatePickersEN.components.MuiLocalizationProvider.defaultProps.localeText;
    }
  }

  return (
    <LanguageContext.Provider
      value={{
        translate,
        language: language || DEFAULT_LANGUAGE,
        languageTag: currentLanguageTag(),
        muiLocale: currentMuiLocale(),
        changeLanguage,
      }}
    >
      <LocalizationProvider
        dateAdapter={AdapterDayjs}
        adapterLocale={currentDayJsLocale()}
        localeText={currentMuiDatePickerLocaleTexts()}
      >
        {children}
      </LocalizationProvider>
    </LanguageContext.Provider>
  );
};

export const useLanguageContext = (): Language => {
  const context = useContext<Language>(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguageContext must be used within a LanguageProvider');
  }
  return context;
};
