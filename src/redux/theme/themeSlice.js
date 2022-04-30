import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

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

const persistConfig = {
  key: 'theme',
  storage,
};

export const persistedThemeReducer = persistReducer(
  persistConfig,
  themeSlice.reducer
);
