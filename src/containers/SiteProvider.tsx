"use client";

import { persistor, store } from "@/redux/store";
import { PersistGate } from "redux-persist/integration/react";

import { Provider } from "react-redux";

import AppProvider from "./AppProvider";
import ThemeProvider from "./ThemeProvider";

import type { PropsWithChildren } from "@/types/props.children";

const SiteProvider = ({ children }: PropsWithChildren) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </AppProvider>
      </PersistGate>
    </Provider>
  );
};

export default SiteProvider;
