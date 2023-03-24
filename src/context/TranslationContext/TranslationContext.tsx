import { createContext, PropsWithChildren, useContext, useEffect, useMemo } from 'react';
import { deLocales, enLocales } from './locales';
import { TextKey } from 'types';
import { flatJsonObject } from 'utils';
import { LanguageConfiguration } from 'context/TranslationContext/utils';
import { useCookies } from 'react-cookie';

type TextKeyArgs = string | number;
type TextKeyFunction = (key: TextKey, args?: TextKeyArgs[]) => string;

type Translation = {
  /** Translation function */
  t: TextKeyFunction;
};

const TranslationContext = createContext<Translation>({} as Translation);

export const TranslationProvider = (props: PropsWithChildren) => {
  const { children } = props;

  const [cookies, setCookie] = useCookies<'language', { language: LanguageConfiguration }>(['language']);

  useEffect(() => {
    if (cookies?.language) return;
    setCookie('language', LanguageConfiguration.DE);
  }, [cookies]);

  const flatDeLocales = useMemo(() => flatJsonObject(deLocales), []);
  const flatEnLocales = useMemo(() => flatJsonObject(enLocales), []);

  const t: TextKeyFunction = (key, args?: TextKeyArgs[]) => {
    const text = (cookies.language === LanguageConfiguration.DE ? flatDeLocales : flatEnLocales)[key];

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

  return <TranslationContext.Provider value={{ t }}>{children}</TranslationContext.Provider>;
};

export const useTranslationContext = (): Translation => {
  const context = useContext<Translation>(TranslationContext);
  if (context === undefined) {
    throw new Error('useTranslationContext must be used within a TranslationProvider');
  }
  return context;
};
