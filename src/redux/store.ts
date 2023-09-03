/* ************************************************************

Redux-Toolkit with Redux-Persist Implementation

URL - https://blog.logrocket.com/persist-state-redux-persist-redux-toolkit-react/

URL - https://stackoverflow.com/questions/61704805/getting-an-error-a-non-serializable-value-was-detected-in-the-state-when-using

***************************************************************/

import logger from "redux-logger";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

import uiReducer from "./slices/uiSlice";

import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

// redux-persist blacklist ui.sidebar - in other words, we do not want to persist ui.sidebar info. As such, each time when the app is started or refresh anew, the ui.sidebar info is started anew such as showSidebar is true (comfing from configs), not from the persist values saved in local storage
// URL >> https://github.com/rt2zz/redux-persist/issues/1110
const persisConfig = {
  key: "root",
  storage,
  blacklist: ["ui"],
};

const uiConfig = {
  key: "ui",
  storage,
  blacklist: ["sidebar"],
};

const rootReducer = combineReducers({
  ui: persistReducer(uiConfig, uiReducer),
});

const persistedReducer = persistReducer(persisConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({ serializableCheck: false }).concat(logger);
  },
  devTools: process.env.NODE_ENV !== "production",
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
