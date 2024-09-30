import { combineReducers } from '@reduxjs/toolkit';

/* PLOP_INJECT_IMPORT */
import { locateReducer } from './location/location.slice';
import { alertReducer } from './alert/alert.slice';
import { modalReducer } from './modal/modal.slice';

const rootReducer = combineReducers({
  /* PLOP_INJECT_USE */
  locate: locateReducer,
  alert: alertReducer,
  modal: modalReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
