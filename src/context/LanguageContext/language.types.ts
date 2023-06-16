import { TextKey } from 'types';

export enum LanguageConfiguration {
  DE = 'de',
  EN = 'en',
}

export enum LanguageTag {
  DE_DE = 'de-DE',
  EN_US = 'en-US',
}

export type TextKeyArg = string | number;
export type TextKeyFunction = (key: TextKey, args?: TextKeyArg[]) => string;

export type ChangeLanguageFunction = (language: LanguageConfiguration) => void;
