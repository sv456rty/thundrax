import "./globals.css";
import type { Metadata } from "next";
import { inter } from "@/utils/fonts";

import RootProvider from "@/containers/RootProvider";

import AppConfigs from "@/configs/AppConfigs";

import { i18n } from "@/utils/i18n-config";

import { useLocale } from "next-intl";
import { notFound } from "next/navigation";

const faviconPath = AppConfigs.site.appFavIconPath;

export const metadata: Metadata = {
  title: AppConfigs.site.appName,
  icons: {
    icon: faviconPath,
    shortcut: [faviconPath],
    apple: [{ url: faviconPath }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = useLocale();

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
