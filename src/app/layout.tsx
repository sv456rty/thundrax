import "./globals.css";
import type { Metadata } from "next";
import { inter } from "@/utils/fonts";

import SiteProvider from "@/containers/SiteProvider";

import AppConfigs from "@/configs/AppConfigs";

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
  return (
    <html lang="en" data-theme="light">
      <body className={inter.className}>
        <SiteProvider>{children}</SiteProvider>
      </body>
    </html>
  );
}
