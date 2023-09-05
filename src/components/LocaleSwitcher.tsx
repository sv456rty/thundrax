// https://github.com/vercel/next.js/blob/canary/examples/app-dir-i18n-routing/app/%5Blang%5D/components/locale-switcher.tsx

"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { i18n } from "@/utils/i18n/i18n.getConfigs";
import { useRouter } from "next/navigation";

type List = {
  redirectedPathName: (locale: string) => string;
};

// ************************************
function HorizontalList({ redirectedPathName }: List) {
  //
  return (
    <div className="flex justify-end">
      <ul className="menu menu-horizontal flex items-center justify-center bg-base-200 rounded-box">
        {i18n.localeList.map((locale) => {
          return (
            <li key={locale.key}>
              <Link
                legacyBehavior
                href={redirectedPathName(locale.key)}
                prefetch={false}
              >
                <a>{locale.name}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

// ************************************
function VerticalList({ redirectedPathName }: List) {
  const { push } = useRouter();
  const redirect = (localeKey: string) => {
    push(redirectedPathName(localeKey));
  };

  return (
    <div className="flex justify-end">
      <div className="dropdown dropdown-bottom">
        <div tabIndex={0} className="btn btn-ghost normal-case">
          <svg
            className="h-5 w-5 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 512 512"
          >
            <path d="M363,176,246,464h47.24l24.49-58h90.54l24.49,58H480ZM336.31,362,363,279.85,389.69,362Z"></path>
            <path d="M272,320c-.25-.19-20.59-15.77-45.42-42.67,39.58-53.64,62-114.61,71.15-143.33H352V90H214V48H170V90H32v44H251.25c-9.52,26.95-27.05,69.5-53.79,108.36-32.68-43.44-47.14-75.88-47.33-76.22L143,152l-38,22,6.87,13.86c.89,1.56,17.19,37.9,54.71,86.57.92,1.21,1.85,2.39,2.78,3.57-49.72,56.86-89.15,79.09-89.66,79.47L64,368l23,36,19.3-11.47c2.2-1.67,41.33-24,92-80.78,24.52,26.28,43.22,40.83,44.3,41.67L255,362Z"></path>
          </svg>
          <svg
            width="12px"
            height="12px"
            className="hidden h-2 w-2 fill-current opacity-60 sm:inline-block"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 2048 2048"
          >
            <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
          </svg>

          <div className="dropdown">
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-36"
            >
              {i18n.localeList.map((locale) => {
                return (
                  <li key={locale.key} onClick={(e) => redirect(locale.key)}>
                    <a>{locale.name}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

// ************************************
export default function LocaleSwitcher({
  orientation = "vertical",
}: {
  orientation?: string;
}) {
  // path name
  const pathName = usePathname();
  const redirectedPathName = (locale: string) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  // return <HorizontalList redirectedPathName={redirectedPathName} />;

  return <VerticalList redirectedPathName={redirectedPathName} />;
}

// ************************************
function LocaleSwitcherx({
  orientation = "vertical",
}: {
  orientation?: string;
}) {
  // path name
  const pathName = usePathname();
  const redirectedPathName = (locale: string) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  if (orientation.toLowerCase() === "horizontal") {
    return <HorizontalList redirectedPathName={redirectedPathName} />;
  } else {
    return <VerticalList redirectedPathName={redirectedPathName} />;
  }
}
