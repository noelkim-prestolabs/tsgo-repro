'use client';

import { TranslationValues, useTranslations } from 'next-intl';
import { ReactNode } from 'react';

import { TranslationsJsonVariables } from './merged-messages/generated/values';

export type MessageKey = keyof IntlFlattenMessages;

type InferMessage<Key extends MessageKey> = Key extends keyof TranslationsJsonVariables
  ? TranslationsJsonVariables[Key]
  : never;

type Props<T extends MessageKey> = {
  id: T;
} & (InferMessage<T> extends never
  ? {
      values?: never;
    }
  : {
      values: InferMessage<T>;
    });

export const FormattedMessage = <TargetKey extends MessageKey>({ id, values }: Props<TargetKey>): ReactNode => {
  const t = useTranslations();
  return t.rich(id, values as TranslationValues);
};

export const T = FormattedMessage;
