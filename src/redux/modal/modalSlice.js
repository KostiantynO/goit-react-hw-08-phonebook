import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modal',
  initialState: { isModalOpen: true },
  reducers: {
    openModal: state => void (state.isModalOpen = true),
    closeModal: state => void (state.isModalOpen = false),
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export const getIsModalOpen = state => state.modal.isModalOpen;
export const modalReducer = modalSlice.reducer;
