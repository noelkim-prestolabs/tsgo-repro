import { getRequestConfig } from 'next-intl/server';

import mergedMessages from './merged-messages/index';
import { routing } from './routing';
import { SupportedLocale } from './types';

export default getRequestConfig(async ({ requestLocale }) => {
  // This typically corresponds to the `[locale]` segment
  let locale = (await requestLocale) as SupportedLocale;
  // Ensure that a valid locale is used
  if (!locale || !routing.locales.includes(locale)) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: (await mergedMessages[locale]()).default,
  };
});
