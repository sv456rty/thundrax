import "./globals.css";
import type { Metadata } from "next";
import { inter } from "@/utils/fonts";

import RootProvider from "@/containers/RootProvider";

import AppConfigs from "@/configs/AppConfigs";

import { i18n } from "@/utils/i18n";

const faviconPath = AppConfigs.site.appFavIconPath;

export const metadata: Metadata = {
  title: AppConfigs.site.appName,
  icons: {
    icon: faviconPath,
    shortcut: [faviconPath],
    apple: [{ url: faviconPath }],
  },
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  if (!params?.lang) return null;
  return (
    <html lang={params.lang}>
      <body className={inter.className}>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
