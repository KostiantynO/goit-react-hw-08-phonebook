import { createSlice } from '@reduxjs/toolkit';

import { themes } from 'components/App/theme';

export const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    mode: themes.ids.light,
  },
  reducers: {
    setTheme: (state, { payload }) => {
      state.mode = themes.ids[payload];
    },
  },
});

export const getCurrentTheme = state => state.theme.mode;
export const { setTheme } = themeSlice.actions;
export const themeReducer = themeSlice.reducer;
