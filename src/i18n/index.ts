'use client';

import { bunja } from 'bunja';
import { NamespaceKeys, NestedKeyOf, createTranslator } from 'use-intl';

import { LocaleScope, MessagesScope } from './provider';

export { FormattedMessage, type MessageKey } from './formatted-message';
export * from './provider';

export const i18nBunja = bunja(() => {
  const locale = bunja.use(LocaleScope);
  const messages = bunja.use(MessagesScope);
  function getT<NestedKey extends NamespaceKeys<IntlMessages, NestedKeyOf<IntlMessages>> = never>(
    namespace?: NestedKey,
  ) {
    // @ts-ignore
    return createTranslator<NestedKey>({ locale, messages, namespace });
  }
  return { getT };
});
