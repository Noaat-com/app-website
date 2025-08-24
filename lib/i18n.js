import {match} from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';

export const locales = ['ar', 'en'];
export const localeNames = {
  en: '🇺🇸 English',
  ar: '🇪🇬 العربية',
};
export const defaultLocale = 'ar';

export const i18n = {
  locales,
  localeNames,
  defaultLocale,
};

export function getLocale(headers) {
  let languages = new Negotiator({headers}).languages();

  return match(languages, locales, defaultLocale);
}

const dictionaries = {
  en: () => import('@/locales/en.json').then((module) => module.default),
  ar: () => import('@/locales/ar.json').then((module) => module.default),
};

export const getDictionary = async (locale) => {
  if (!Object.keys(dictionaries).includes(locale)) {
    locale = 'ar';
  }

  return dictionaries[locale]();
};
