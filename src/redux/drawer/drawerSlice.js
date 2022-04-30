import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const drawerSlice = createSlice({
  name: 'drawer',
  initialState: {
    isOpen: true,
  },
  reducers: {
    openDrawer: state => void (state.isOpen = true),
    closeDrawer: state => void (state.isOpen = false),
  },
});

export const { openDrawer, closeDrawer } = drawerSlice.actions;

export const getIsDrawerOpen = state => state.drawer.isOpen;

const persistConfig = {
  key: 'drawer',
  storage,
};

export const persistedDrawerReducer = persistReducer(
  persistConfig,
  drawerSlice.reducer
);
