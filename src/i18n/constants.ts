import { defaultLocale, supportedLocales } from './locales';
import { ContentfulSupportedLocale, LanguageTag, SupportedLocale } from './types';

export { defaultLocale, supportedLocales };

export const supportedLocaleToLanguageTag: Record<SupportedLocale, LanguageTag> = {
  en: 'en-US',
  vi: 'vi-VN',
  'zh-CN': 'zh-CN',
  'zh-TW': 'zh-TW',
  ru: 'ru-RU',
} as const;

export const contentfulSupportedLocaleMapper: Record<SupportedLocale, ContentfulSupportedLocale> = {
  en: 'en-US',
  vi: 'vi-VN',
  'zh-CN': 'zh-CN',
  'zh-TW': 'zh-Hant-TW',
  ru: 'ru-RU',
} as const;

export const languageTagToSupportedLocale: Record<LanguageTag, SupportedLocale> = {
  'en-US': 'en',
  'vi-VN': 'vi',
  'zh-CN': 'zh-CN',
  'zh-TW': 'zh-TW',
  'ru-RU': 'ru',
} as const;

export const languageLabels: Record<SupportedLocale, string> = {
  en: 'English',
  vi: 'Tiếng Việt',
  'zh-CN': '简体中文',
  'zh-TW': '繁體中文',
  ru: 'Русский',
} as const;
