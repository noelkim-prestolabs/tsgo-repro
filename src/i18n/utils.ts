import { defaultLocale, supportedLocales } from './constants';
import { SupportedLocale } from './types';

export function checkSupportedLocale(locale: string): locale is SupportedLocale {
  return supportedLocales.includes(locale as SupportedLocale);
}

export function normalizeLocale(locale: string): SupportedLocale {
  return checkSupportedLocale(locale) ? locale : defaultLocale;
}
