import { createSlice } from '@reduxjs/toolkit';
import { i18n } from 'i18n/i18n';

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

export const getCurrentLang = state => state.lang.currentLang;

export const langReducer = langSlice.reducer;
