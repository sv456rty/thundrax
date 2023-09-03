// App Provider

"use client";

import type { PropsWithChildren } from "@/types/props.children";

const AppProvider = ({ children }: PropsWithChildren<{}>) => {
  return children;
};

export default AppProvider;
