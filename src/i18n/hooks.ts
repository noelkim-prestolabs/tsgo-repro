import { useLocale } from 'next-intl';

import { SupportedLocale } from './types';
import { normalizeLocale } from './utils';

export function useSupportedLocale(): SupportedLocale {
  const locale = useLocale();
  return normalizeLocale(locale);
}
