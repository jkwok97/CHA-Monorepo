import {
  SalariesAndRatingsDto,
  StatUserTeamRecordDto,
} from '@cha/shared/entities';
import { createReducer, on, Action } from '@ngrx/store';
import { HomeSummaryActions } from './home-summary.actions';

export interface State {
  teamRecord: StatUserTeamRecordDto | null;
  teamRecordloading: boolean;
  teamRecordLoaded: boolean;
  playerSalaries: SalariesAndRatingsDto[];
  playerSalaryLoading: boolean;
  playerSalaryLoaded: boolean;
  goalieSalaries: SalariesAndRatingsDto[];
  goalieSalaryLoading: boolean;
  goalieSalaryLoaded: boolean;
}

const initialState: State = {
  teamRecord: null,
  teamRecordloading: false,
  teamRecordLoaded: false,
  playerSalaries: [],
  playerSalaryLoading: false,
  playerSalaryLoaded: false,
  goalieSalaries: [],
  goalieSalaryLoading: false,
  goalieSalaryLoaded: false,
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

  on(HomeSummaryActions.getUserTeamGoaliesSalaries, (state) => ({
    ...state,
    goalieSalaryLoading: true,
    goalieSalaryLoaded: false,
  })),

  on(HomeSummaryActions.getUserTeamGoaliesSalariesSuccess, (state, action) => ({
    ...state,
    goalieSalaries: action.goalieSalaries,
    goalieSalaryLoading: false,
    goalieSalaryLoaded: true,
  })),

  on(HomeSummaryActions.getUserTeamPlayerSalaries, (state) => ({
    ...state,
    playerSalaryLoading: true,
    playerSalaryLoaded: false,
  })),

  on(HomeSummaryActions.getUserTeamPlayerSalariesSuccess, (state, action) => ({
    ...state,
    playerSalaries: action.playerSalaries,
    playerSalaryLoading: false,
    playerSalaryLoaded: true,
  })),

  on(HomeSummaryActions.error, (state) => initialState)
);

export function reducer(state: State | undefined, action: Action) {
  return r(state, action);
}

export const getTeamRecord = (state: State) => state.teamRecord;

export const getTeamRecordLoading = (state: State) => state.teamRecordloading;

export const getTeamRecordLoaded = (state: State) => state.teamRecordLoaded;

export const getPlayerSalaries = (state: State) => state.playerSalaries;

export const getPlayerSalaryLoading = (state: State) =>
  state.playerSalaryLoading;

export const getPlayerSalaryLoaded = (state: State) =>
  state.playerSalaryLoading;

export const getGoalieSalaries = (state: State) => state.goalieSalaries;

export const getGoalieSalaryLoading = (state: State) =>
  state.goalieSalaryLoading;

export const getGoalieSalaryLoaded = (state: State) =>
  state.goalieSalaryLoading;