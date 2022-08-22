import { Action, createReducer, on } from '@ngrx/store';
import { NhlLeadersActions } from './nhl-leaders.actions';

export interface State {
  leaders: any;
  loading: boolean;
  loaded: boolean;
}

const initialState: State = {
  leaders: {},
  loading: false,
  loaded: false,
};

const r = createReducer(
  initialState,

  on(NhlLeadersActions.getLeaders, (state) => ({
    ...state,
    loading: true,
    loaded: false,
  })),

  on(NhlLeadersActions.getLeadersSuccess, (state, action) => ({
    ...state,
    leaders: action.leaders,
    loading: false,
    loaded: true,
  })),

  on(NhlLeadersActions.error, () => initialState)
);

export function reducer(state: State | undefined, action: Action) {
  return r(state, action);
}

export const getLeaders = (state: State) => state.leaders;

export const getLoading = (state: State) => state.loading;

export const getLoaded = (state: State) => state.loaded;
