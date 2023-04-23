import { useLanguageContext } from 'context/LanguageContext/LanguageContext';

export type DateOptions = {
  year?: 'numeric' | '2-digit';
  month?: 'numeric' | '2-digit' | 'narrow' | 'short' | 'long';
  day?: 'numeric' | '2-digit';
  hour?: 'numeric' | '2-digit';
  minute?: 'numeric' | '2-digit';
};

const DEFAULT_DATE_FORMAT_OPTIONS: DateOptions = {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
};

export function formatByCurrentDate(date: string | Date, options?: DateOptions): string {
  const { languageTag } = useLanguageContext();

  return new Date(date).toLocaleDateString(languageTag, options ?? DEFAULT_DATE_FORMAT_OPTIONS);
}

export function formatByCurrentTime(date: string | Date, options?: DateOptions): string {
  const { languageTag } = useLanguageContext();

  return new Date(date).toLocaleTimeString(
    languageTag,
    options ?? {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    }
  );
}
