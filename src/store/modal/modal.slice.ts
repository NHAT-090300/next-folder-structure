import { ReactNode } from 'react';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@store/reducer';

export interface IModal {
  modalId: string;
  modalComponent?: ReactNode;
}
export interface IModalState {
  [modalId: string]: {
    open: boolean;
    modalComponent: ReactNode;
  };
}

const initialState = <IModalState>{};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<IModal>) => {
      const { modalId, modalComponent } = action.payload;

      state[modalId] = {
        open: true,
        modalComponent,
      };
    },

    closeModal: (state, action: PayloadAction<IModal>) => {
      const { modalId } = action.payload;
      delete state[modalId as keyof IModalState];
    },

    resetModal: () => initialState,
  },
});

export const { openModal, closeModal, resetModal } = modalSlice.actions;
export default modalSlice.reducer;

export const modalReducer = modalSlice.reducer;
export const modalSelector = (state: RootState) => state.modal;
export const sliceActions = modalSlice.actions;
