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

// How to use redux-persist ?
// NOTE - Redux-Persist only works with ONE level depth. As such, dot notation levels are not supposed
// In the below config, by default, at the root level (rootPersistConfig), no reducers are persisted. In other words, there will be no reducers to persist across the app. This is done by giving some non-existing reducer name such as nothing, zzz, blahblahblah, etc in the whitelist param
// Then, you decide:
// (a) If you want some reducer to be included at a whole (whole reducer), then add the reducer name (such as ui) in the whitelist of the rootPersistConfig
// (b) If you want further persist, such as you only want the theme node of the ui reducer to be persisted, then set up another persistConfig such as uiPersistConfig, and in this uiPersistConfig, add the theme node to the whitelist

// See example below on redux-persist implementation. By default, only ui.theme node is persisted in redux, all other nodes in the entire redux state are not persisted
const rootPersistConfig = {
  key: "root",
  storage,
  whitelist: ["nothing"],
};

const uiPersistConfig = {
  key: "ui",
  storage,
  whitelist: ["theme"],
};

const rootReducer = combineReducers({
  ui: persistReducer(uiPersistConfig, uiReducer),
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

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
