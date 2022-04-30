import { createSlice } from '@reduxjs/toolkit';
import { i18n } from 'i18n/i18n';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export const langSlice = createSlice({
  name: 'lang',
  initialState: {
    currentLang: i18n.ids.ukr,
  },
  reducers: {
    setCurrentLang: (state, { payload }) => {
      state.currentLang = i18n.ids[payload];
    },
  },
});

export const { setCurrentLang } = langSlice.actions;

const persistConfig = {
  key: 'lang',
  storage,
};

export const getCurrentLang = state => state.lang.currentLang;

export const persistedLangReducer = persistReducer(
  persistConfig,
  langSlice.reducer
);
