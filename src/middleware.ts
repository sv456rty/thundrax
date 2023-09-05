/* *********************************************************
 *
 * NextJS v13 App Router i18n Implementation
 *
 * NOTE: We must access i18n directly from @/utils/i18n/i18n-config instead of using @utils/i18n because if we access i18n directly from @utils/i18n in this middleware file, NextJS will generate error "Error: This module cannot be imported from a Client Component module. It should only be used from a Server Component."
 *
 * URL: https://github.com/vercel/next.js/blob/canary/examples/app-dir-i18n-routing/middleware.ts
 *
 ********************************************************* */
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { i18n } from "@/utils/i18n/i18n.getConfigs";

function getLocale(request: NextRequest): string | undefined {
  //

  // as of this implementation, getLocale() will not come from user's browser header, it will returned the default locale. If you need this function to pull locale iinfo from user's browser header, then use NextJS original code in https://github.com/vercel/next.js/blob/canary/examples/app-dir-i18n-routing/middleware.ts
  return i18n.defaultLocale;
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // // `/_next/` and `/api/` are ignored by the watcher, but we need to ignore files in `public` manually.
  // // If you have one
  // if (
  //   [
  //     '/manifest.json',
  //     '/favicon.ico',
  //     // Your other files in `public`
  //   ].includes(pathname)
  // )
  //   return

  // Check if there is any supported locale in the pathname
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);

    // e.g. incoming request is /products
    // The new URL is now /en-US/products
    return NextResponse.redirect(
      new URL(
        `/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`,
        request.url
      )
    );
  }
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
