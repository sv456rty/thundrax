"use client";

import type { PropsWithChildren } from "@/types/props.children";
import AppHoc from "./AppHoc";

const AppProvider = ({ children }: PropsWithChildren) => {
  return <AppHoc>{children}</AppHoc>;
};

export default AppProvider;
