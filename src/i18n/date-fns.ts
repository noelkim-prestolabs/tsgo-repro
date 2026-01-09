import { setDefaultOptions } from 'date-fns';
import type { Locale } from 'date-fns';
import { enUS, ru, vi, zhCN, zhTW } from 'date-fns/locale';

import type { SupportedLocale } from './types';

const dateFnsLocaleMap: Record<SupportedLocale, Locale> = {
  en: enUS,
  vi,
  'zh-CN': zhCN,
  'zh-TW': zhTW,
  ru,
};

export function setDateFnsDefaultLocale(locale: SupportedLocale) {
  const dfLocale = dateFnsLocaleMap[locale] ?? enUS;
  setDefaultOptions({ locale: dfLocale });
}
