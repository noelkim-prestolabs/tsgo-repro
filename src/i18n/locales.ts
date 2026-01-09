export const supportedLocales = ['en', 'vi', 'zh-CN', 'zh-TW', 'ru'] as const;
export type SupportedLocale = (typeof supportedLocales)[number];
export const defaultLocale: SupportedLocale = 'en';
