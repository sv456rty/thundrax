"use client";

import type { PropsWithChildren } from "@/types/props.children";
import SiteHoc from "./SiteHoc";
import AppProvider from "./AppProvider";

const SiteProvider = ({ children }: PropsWithChildren) => {
  return (
    <SiteHoc>
      <AppProvider>{children}</AppProvider>
    </SiteHoc>
  );
};

export default SiteProvider;
