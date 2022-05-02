import { createSlice } from '@reduxjs/toolkit';

import { themes } from 'components/App/theme';

export const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    currentTheme: themes.ids.light,
  },
  reducers: {
    setTheme: (_, { payload }) => themes.ids[payload],
  },
});

export const { setTheme } = themeSlice.actions;
export const themeReducer = themeSlice.reducer;
