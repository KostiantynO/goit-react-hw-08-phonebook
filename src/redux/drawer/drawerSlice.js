import { createSlice } from '@reduxjs/toolkit';

const drawerSlice = createSlice({
  name: 'drawer',
  initialState: {
    isOpen: false,
  },
  reducers: {
    openDrawer: state => void (state.isOpen = true),
    closeDrawer: state => void (state.isOpen = false),
  },
});

export const { openDrawer, closeDrawer } = drawerSlice.actions;

export const getIsDrawerOpen = state => state.drawer.isOpen;

export const drawerReducer = drawerSlice.reducer;
