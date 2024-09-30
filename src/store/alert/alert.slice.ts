import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@store/reducer';
import Alert from 'react-s-alert';

export const initialState = {};

export const alertSlice = createSlice({
  name: 'alert',
  initialState,
  reducers: {
    alertSuccess: (state, { payload }: PayloadAction<string>) => {
      Alert.success(payload, {
        position: 'top-right',
        effect: 'scale',
        timeout: 3000,
        html: true,
      });
    },
    alertError: (state, { payload }: PayloadAction<string>) => {
      Alert.error(payload, {
        position: 'top-right',
        effect: 'scale',
        timeout: 3000,
        html: true,
      });
    },

    alertWarning: (state, { payload }: PayloadAction<string>) => {
      Alert.error(payload, {
        position: 'top-right',
        effect: 'scale',
        timeout: 3000,
        html: true,
      });
    },

    warningLongTime: (state, { payload }: PayloadAction<string>) => {
      Alert.warning(payload, {
        position: 'top-right',
        effect: 'scale',
        timeout: 9000,
        html: true,
      });
    },

    errorLongTime: (state, { payload }: PayloadAction<string>) => {
      Alert.error(payload, {
        position: 'top-right',
        effect: 'scale',
        timeout: 9000,
        html: true,
      });
    },

    closeAll: () => {
      Alert.closeAll();
    },
  },
});

export const sliceActions = alertSlice.actions;
export const alertReducer = alertSlice.reducer;
export const alertSelector = (state: RootState) => state.alert;
