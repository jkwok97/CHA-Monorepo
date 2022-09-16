import { StatUserTeamRecordDto } from '@cha/shared/entities';
import { createReducer, on, Action } from '@ngrx/store';
import { HomeSummaryActions } from './home-summary.actions';

export interface State {
  teamRecord: StatUserTeamRecordDto | null;
  teamRecordloading: boolean;
  teamRecordLoaded: boolean;
}

const initialState: State = {
  teamRecord: null,
  teamRecordloading: false,
  teamRecordLoaded: false,
};

const r = createReducer(
  initialState,

  on(HomeSummaryActions.getUserTeamRecordBySeasonAndSeasonType, (state) => ({
    ...state,
    teamRecordloading: true,
    teamRecordLoaded: false,
  })),

  on(
    HomeSummaryActions.getUserTeamRecordBySeasonAndSeasonTypeSuccess,
    (state, action) => ({
      ...state,
      teamRecord: action.record,
      teamRecordloading: false,
      teamRecordLoaded: true,
    })
  ),

  on(HomeSummaryActions.error, (state) => initialState)
);

export function reducer(state: State | undefined, action: Action) {
  return r(state, action);
}

export const getTeamRecord = (state: State) => state.teamRecord;

export const getTeamRecordLoading = (state: State) => state.teamRecordloading;

export const getTeamRecordLoaded = (state: State) => state.teamRecordLoaded;
