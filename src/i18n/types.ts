import { TranslationMessages } from './merged-messages';
import { TranslationsFlattenJson } from './merged-messages/generated/flatten-types';

export type { SupportedLocale } from './locales';
export type LanguageTag = 'en-US' | 'vi-VN' | 'zh-CN' | 'zh-TW' | 'ru-RU';
export type ContentfulSupportedLocale = 'en-US' | 'vi-VN' | 'zh-CN' | 'zh-Hant-TW' | 'ru-RU';

declare global {
  interface IntlMessages extends TranslationMessages {}
  interface IntlFlattenMessages extends TranslationsFlattenJson {}
}
