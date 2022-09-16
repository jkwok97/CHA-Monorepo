import { StatUserTeamRecordDto } from '@cha/shared/entities';
import { createReducer, on, Action } from '@ngrx/store';
import { HomeSummaryActions } from './home-summary.actions';

export interface State {
  teamRecord: StatUserTeamRecordDto | null;
  loading: boolean;
  loaded: boolean;
}

const initialState: State = {
  teamRecord: null,
  loading: false,
  loaded: false,
};

const r = createReducer(
  initialState,

  on(
    HomeSummaryActions.getUserTeamRecordBySeasonAndSeasonType,

    (state) => ({
      ...state,
      loading: true,
      loaded: false,
    })
  ),

  on(
    HomeSummaryActions.getUserTeamRecordBySeasonAndSeasonTypeSuccess,

    (state, action) => ({
      ...state,
      teamRecord: action.record,
      loading: false,
      loaded: true,
    })
  ),

  on(HomeSummaryActions.error, (state) => initialState)
);

export function reducer(state: State | undefined, action: Action) {
  return r(state, action);
}

export const getTeamRecord = (state: State) => state.teamRecord;

export const getLoading = (state: State) => state.loading;

export const getLoaded = (state: State) => state.loaded;
