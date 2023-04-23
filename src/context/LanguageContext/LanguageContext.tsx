// START: DONT REMOVE THE FOLLOWING IMPORTS
import 'dayjs/locale/de';
import 'dayjs/locale/en';
// END: DONT REMOVE THE FOLLOWING IMPORTS
import { deDE as muiMaterialDE, enUS as muiMaterialEN, Localization } from '@mui/material/locale';
import { createContext, PropsWithChildren, useContext, useEffect, useMemo } from 'react';
import { deLocales, enLocales } from './locales';
import { flatJsonObject } from 'utils';
import {
  ChangeLanguageFunction,
  LanguageConfiguration,
  LanguageTag,
  TextKeyArg,
  TextKeyFunction,
} from 'context/LanguageContext/language.types';
import { useCookies } from 'react-cookie';
import dayjs, { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import {
  deDE as muiDatePickersDE,
  enUS as muiDatePickersEN,
  LocalizationProvider,
  PickersLocaleText,
} from '@mui/x-date-pickers';

type Language = {
  /**
   * Translation function
   */
  t: TextKeyFunction;
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

const LanguageContext = createContext<Language>({} as Language);

export const LanguageProvider = (props: PropsWithChildren) => {
  const { children } = props;

  const [{ language }, setCookie] = useCookies<
    'language',
    {
      language: LanguageConfiguration | undefined;
    }
  >(['language']);

  const flatDeLocales = useMemo(() => flatJsonObject(deLocales), []);
  const flatEnLocales = useMemo(() => flatJsonObject(enLocales), []);

  useEffect(() => {
    if (language) {
      dayjs().locale(language);
    } else {
      changeLanguage(DEFAULT_LANGUAGE);
    }
  }, [language]);

  const t: TextKeyFunction = (key, args?: TextKeyArg[]) => {
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
        t,
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