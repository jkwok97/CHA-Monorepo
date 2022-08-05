import { Action, createReducer, on } from '@ngrx/store';
import { DisplayActions } from './display.actions';

export interface State {
  isMobile: boolean;
}

const initialState: State = {
  isMobile: false,
};

const r = createReducer(
  initialState,

  on(DisplayActions.getSuccess, (state, action) => ({
    ...state,
    isMobile: action.isMobile,
  })),

  on(DisplayActions.error, (state) => initialState)
);

export function reducer(state: State | undefined, action: Action) {
  return r(state, action);
}

export const getIsMobile = (state: State) => state.isMobile;
