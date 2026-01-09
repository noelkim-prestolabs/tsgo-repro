import { TranslationsJson } from './generated/types';

const mergedMessages = {
  en: () => import('./en.json'),
  vi: () => import('./vi.json'),
  'zh-CN': () => import('./zh-CN.json'),
  'zh-TW': () => import('./zh-TW.json'),
  ru: () => import('./ru.json'),
};

export type TranslationMessages = TranslationsJson;
export default mergedMessages;
