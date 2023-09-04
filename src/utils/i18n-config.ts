// https://github.com/vercel/next.js/blob/canary/examples/app-dir-i18n-routing/i18n-config.ts

import AppConfigs from "@/configs/AppConfigs";

export const i18n = AppConfigs.i18n;

export type Locale = (typeof i18n)["locales"][number];
