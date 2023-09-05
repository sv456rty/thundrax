/* *********************************************************
 *
 * NextJS v13 App Router i18n Implementation
 *
 * NOTE: This file extends default NextJS Internationalization by adding the getTranslator() function. This function will allow interpolation in translated string (eg: "message": "welcome {{ name}}")
 *
 * URL: https://github.com/vercel/next.js/blob/canary/examples/app-dir-i18n-routing/middleware.ts
 *
 * URL: https://dev.to/ajones_codes/the-ultimate-guide-to-internationalization-i18n-in-nextjs-13-ed0
 *
 ********************************************************* */

// https://github.com/vercel/next.js/blob/canary/examples/app-dir-i18n-routing/get-dictionary.ts

import "server-only";

import type { Locale } from "./i18n.getConfigs";

// We enumerate all dictionaries here for better linting and typescript support
// We also get the default import for cleaner types
const localeData: Record<Locale, any> = {
  en: () =>
    import("@/configs/locales/en.json").then((module) => module.default),
  zh_tw: () =>
    import("@/configs/locales/zh_tw.json").then((module) => module.default),
  vi: () =>
    import("@/configs/locales/vi.json").then((module) => module.default),
};

const getTranslator = async (locale: Locale) => {
  const dictionary = await localeData[locale]();
  return (key: string, params?: { [key: string]: string | number }) => {
    let translation = key
      .split(".")
      .reduce((obj, key) => obj && obj[key], dictionary);
    if (!translation) {
      return key;
    }
    if (params && Object.entries(params).length) {
      Object.entries(params).forEach(([key, value]) => {
        // this is to ensure that if in the .json file, variable is entered as {{ name }} or {{name}} or {{ name}} or {{name }} or {{  name}}, all of these styles are valid, not just {{ name }}
        const cleanUpTranslation = translation!.replace(
          / *\{{[^)]*\}} */g,
          ` {{${key}}} `
        );

        translation = cleanUpTranslation!.replace(`{{${key}}}`, String(value));
      });
    }
    return translation;
  };
};

export { getTranslator };
