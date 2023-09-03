"use client";

import type { PropsWithChildren } from "@/types/props.children";
import RootHoc from "./RootHoc";
import SiteProvider from "./SiteProvider";

const RootProvider = ({ children }: PropsWithChildren) => {
  return (
    <RootHoc>
      <SiteProvider>{children}</SiteProvider>
    </RootHoc>
  );
};

export default RootProvider;
