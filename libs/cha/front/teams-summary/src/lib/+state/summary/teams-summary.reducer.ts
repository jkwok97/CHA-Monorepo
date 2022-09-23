import { createReducer, on, Action } from '@ngrx/store';
import { TeamsSummaryActions } from './teams-summary.actions';

export interface State {
  userId: number | undefined;
  loading: boolean;
  loaded: boolean;
}

const initialState: State = {
  userId: undefined,
  loading: false,
  loaded: false,
};

const r = createReducer(
  initialState,

  on(TeamsSummaryActions.getUserIdByTeamIdSuccess, (state, action) => ({
    ...state,
    userId: action.userId,
  })),

  on(TeamsSummaryActions.error, (state) => initialState)
);

export function reducer(state: State | undefined, action: Action) {
  return r(state, action);
}

export const getLoading = (state: State) => state.loading;

export const getLoaded = (state: State) => state.loaded;

export const getUserId = (state: State) => state.userId;
