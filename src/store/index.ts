import { configureStore, Action } from '@reduxjs/toolkit';
import thunk, { ThunkAction } from 'redux-thunk';

import rootReducer, { RootState } from './reducer';

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
  devTools: true,
});

export type AppDispatch = typeof store.dispatch;
export const dispatch = store.dispatch;
export type AppThunk = ThunkAction<void, RootState, unknown, Action>;

export default store;
