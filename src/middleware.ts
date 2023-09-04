/* *********************************************************
 *
 * NextJS v13 App Router i18n Implementation
 *
 * URL: https://next-intl-docs.vercel.app/docs/getting-started/app-router-server-components
 *
 ********************************************************* */

import AppConfigs from "@/configs/AppConfigs";

import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  // A list of all locales that are supported
  locales: AppConfigs.i18n.locales,

  // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
  defaultLocale: AppConfigs.i18n.defaultLocale,
});

export const config = {
  // Skip all paths that should not be internationalized. This example skips the
  // folders "api", "_next" and all files with an extension (e.g. favicon.ico)
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
