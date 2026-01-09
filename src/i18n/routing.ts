import { createNavigation } from 'next-intl/navigation';
import { defineRouting } from 'next-intl/routing';

import { defaultLocale, supportedLocales } from './constants';

export const routing = defineRouting({
  locales: supportedLocales,
  defaultLocale,
  localePrefix: 'as-needed',
});

export const { Link, redirect, permanentRedirect, usePathname, useRouter, getPathname } = createNavigation(routing);
