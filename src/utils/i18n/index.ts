// NOTE - only SSR component should use i18n, Locale from this index.ts file. Othewrise, if the component makes a Client Component call, then i18n and Locale should be directly accessed from ./i18n.getConfigs. See /src/middleware.ts for more info

export { i18n, type Locale } from "./i18n.getConfigs";

export { getTranslator } from "./i18n.getData";
