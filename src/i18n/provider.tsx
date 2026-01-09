'use client';

import { createScopeFromContext } from 'bunja/react';
import { PropsWithChildren, createContext, useEffect } from 'react';
import { AbstractIntlMessages, useMessages } from 'use-intl';

import { setDateFnsDefaultLocale } from './date-fns';
import { useSupportedLocale } from './hooks';
import { SupportedLocale } from './types';

export const LocaleContext = createContext<SupportedLocale>('en');
export const LocaleScope = createScopeFromContext(LocaleContext);

export const MessagesContext = createContext<AbstractIntlMessages>({});
export const MessagesScope = createScopeFromContext(MessagesContext);

export const I18nProvider = ({ children }: PropsWithChildren) => {
  const locale = useSupportedLocale();
  const messages = useMessages();
  useEffect(() => {
    setDateFnsDefaultLocale(locale);
  }, [locale]);
  return (
    <LocaleContext value={locale}>
      <MessagesContext value={messages}>{children}</MessagesContext>
    </LocaleContext>
  );
};
