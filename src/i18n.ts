/* *********************************************************
 *
 * NextJS v13 App Router i18n Implementation
 *
 * URL: https://next-intl-docs.vercel.app/docs/getting-started/app-router-server-components
 *
 ********************************************************* */
import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async ({ locale }) => ({
  messages: (await import(`@/configs/locales/${locale}.json`)).default,
}));
