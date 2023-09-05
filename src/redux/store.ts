/* ************************************************************

Redux-Toolkit with Redux-Persist Implementation

URL - https://blog.logrocket.com/persist-state-redux-persist-redux-toolkit-react/

URL - https://stackoverflow.com/questions/61704805/getting-an-error-a-non-serializable-value-was-detected-in-the-state-when-using

***************************************************************/

import logger from "redux-logger";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { getPersistConfig } from "redux-deep-persist";

import uiReducer from "./slices/uiSlice";

import { persistStore, persistReducer } from "redux-persist";

const rootReducer = combineReducers({
  ui: uiReducer,
});

const rootConfig = getPersistConfig({
  key: "root",
  storage,
  whitelist: ["ui.theme"],
  rootReducer,
});

const persistedReducer = persistReducer(rootConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: false,
    }).concat(logger);
  },
  devTools: process.env.NODE_ENV !== "production",
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
