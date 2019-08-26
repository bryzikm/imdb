import {createReducer, on} from '@ngrx/store';
import * as SpinnerActions from './spinner.actions';

export interface SpinnerState {
  isVisible: boolean;
}

export const initialState: SpinnerState = {
  isVisible: false
};

export const spinnerReducer = createReducer(
  initialState,
  on(SpinnerActions.showSpinner, (state) => ({ ...state, isVisible: true })),
  on(SpinnerActions.hideSpinner, (state) => ({ ...state, isVisible: false }))
);
