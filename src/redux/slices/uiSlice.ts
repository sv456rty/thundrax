import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import AppConfigs from "@/configs/AppConfigs";

const uiSlice = createSlice({
  name: "ui",
  initialState: AppConfigs.redux.ui,
  reducers: {
    setThemeName: (state, action: PayloadAction<string>) => {
      state.theme.name = action.payload;
    },
    setDefaultThemeName: (state) => {
      const savedName = state.theme.name; // from redux-persist
      const defaultName = AppConfigs.redux.ui.theme.name;
      state.theme.defaultName = savedName ? savedName : defaultName;
    },
    setLocaleName: (state, action: PayloadAction<string>) => {
      state.locale.name = action.payload;
    },
  },
});

export const { setThemeName, setDefaultThemeName, setLocaleName } =
  uiSlice.actions;
export default uiSlice.reducer;
