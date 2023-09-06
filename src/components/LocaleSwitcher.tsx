// https://github.com/vercel/next.js/blob/canary/examples/app-dir-i18n-routing/app/%5Blang%5D/components/locale-switcher.tsx

"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { i18n } from "@/utils/i18n/i18n.getConfigs";

import { LocaleSwitcherIcon, DropDownIcon } from "@/components/icons";

type List = {
  redirectedPathName: (locale: string) => string;
  localeList: {
    key: string;
    name: string;
  }[];
};

// ************************************
function HorizontalList({ redirectedPathName, localeList }: List) {
  //
  return (
    <div className="flex justify-end hover:bg-base-300">
      <ul className="menu menu-horizontal flex items-center justify-center bg-base-200 rounded-box">
        {localeList.map((locale) => {
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
function VerticalList({ redirectedPathName, localeList }: List) {
  return (
    <div className="flex">
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn m-1 bg-base-100 hover:bg-info">
          <LocaleSwitcherIcon />
          <DropDownIcon />
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-200 rounded-box w-52"
        >
          {localeList.map((locale) => {
            return (
              <li
                key={locale.key}
                className="bg-base-100 mb-2 rounded-box hover:bg-base-200"
              >
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

  const localeList = i18n.localeList;

  if (orientation.toLowerCase() === "vertical") {
    return (
      <VerticalList
        redirectedPathName={redirectedPathName}
        localeList={localeList}
      />
    );
  } else {
    return (
      <HorizontalList
        redirectedPathName={redirectedPathName}
        localeList={localeList}
      />
    );
  }
}
