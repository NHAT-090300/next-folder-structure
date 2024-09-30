import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '@store/reducer';
import { Locations } from '@type/locations';

export enum LanguageEnum {
  EN = 'en',
  VI = 'vi',
}
export interface LocateState {
  locate: LanguageEnum;
  locations: Locations;
}

export const initialState: LocateState = {
  locate: LanguageEnum.VI,
  locations: new Locations(),
};

export const locateSlice = createSlice({
  name: 'locate',
  initialState,
  reducers: {
    getLocations: (state, { payload }: PayloadAction<Locations>) => {
      state.locations = new Locations(payload);
    },

    switchLocate: (state, { payload }: PayloadAction<LanguageEnum>) => {
      state.locate = payload;
      localStorage.setItem('locate', payload);
    },
  },
});

export const sliceActions = locateSlice.actions;
export const locateReducer = locateSlice.reducer;
export const locateSelector = (state: RootState) => state.locate;
