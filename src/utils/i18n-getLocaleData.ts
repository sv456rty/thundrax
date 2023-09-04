// https://github.com/vercel/next.js/blob/canary/examples/app-dir-i18n-routing/get-dictionary.ts

import "server-only";
import type { Locale } from "./i18n-config";

import AppConfigs from "@/configs/AppConfigs";

// We enumerate all dictionaries here for better linting and typescript support
// We also get the default import for cleaner types
const localeData = {
  en: () =>
    import("@/configs/locales/en.json").then((module) => module.default),
  de: () =>
    import("@/configs/locales/de.json").then((module) => module.default),
  cs: () =>
    import("@/configs/locales/cs.json").then((module) => module.default),
};

const getLocaleData = async (locale: Locale) => {
  const chosenLocale = locale ?? AppConfigs.i18n.defaultLocale;
  return localeData[chosenLocale as keyof typeof localeData]();
};

/*
const langData = [
  {
    name: "en",
    data: () =>
      import("@/configs/locales/en.json").then((module) => module.default),
  },
  {
    name: "de",
    data: () =>
      import("@/configs/locales/de.json").then((module) => module.default),
  },
  {
    name: "cs",
    data: () =>
      import("@/configs/locales/cs.json").then((module) => module.default),
  },
];

const getLocaleData = async (locale: Locale) => {
  const chosenLocale = locale ?? AppConfigs.i18n.defaultLocale;
  const localeObj = langData.filter((lang) => lang.name === locale)[0];
  return localeObj.data();
};

function getT<T, K extends keyof T>(obj: T, key: Locale) {
  return obj[key as keyof typeof obj];
}
*/

export { getLocaleData };
