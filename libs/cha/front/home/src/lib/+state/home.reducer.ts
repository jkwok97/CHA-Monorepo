import {
  GetTransactionDto,
  NhlGoalieStatDto,
  NhlPlayerStatDto,
  SalariesAndRatingsDto,
  StatGoalieAllDto,
  StatPlayerAllDto,
  StatUserTeamRecordDto,
} from '@cha/shared/entities';
import { createReducer, on, Action } from '@ngrx/store';
import { HomeActions } from './home.actions';

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
  currentPlayerStat: StatPlayerAllDto[];
  currentGoalieStat: StatGoalieAllDto[];
  currentNhlStat: NhlGoalieStatDto | NhlPlayerStatDto | null;
  statsLoading: boolean;
  trades: GetTransactionDto[];
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
  currentPlayerStat: [],
  currentGoalieStat: [],
  currentNhlStat: null,
  statsLoading: false,
  trades: [],
};

const r = createReducer(
  initialState,

  on(HomeActions.getUserTeamRecordBySeasonAndSeasonType, (state) => ({
    ...state,
    teamRecordloading: true,
    teamRecordLoaded: false,
  })),

  on(
    HomeActions.getUserTeamRecordBySeasonAndSeasonTypeSuccess,
    (state, action) => ({
      ...state,
      teamRecord: action.record,
      teamRecordloading: false,
      teamRecordLoaded: true,
    })
  ),

  on(HomeActions.getTradesSuccess, (state, action) => ({
    ...state,
    trades: action.transactions,
  })),

  on(HomeActions.getUserTeamGoaliesSalaries, (state) => ({
    ...state,
    goalieSalaryLoading: true,
    goalieSalaryLoaded: false,
  })),

  on(HomeActions.getUserTeamGoaliesSalariesSuccess, (state, action) => ({
    ...state,
    goalieSalaries: action.goalieSalaries,
    goalieSalaryLoading: false,
    goalieSalaryLoaded: true,
  })),

  on(HomeActions.getUserTeamPlayerSalaries, (state) => ({
    ...state,
    playerSalaryLoading: true,
    playerSalaryLoaded: false,
  })),

  on(HomeActions.getUserTeamPlayerSalariesSuccess, (state, action) => ({
    ...state,
    playerSalaries: action.playerSalaries,
    playerSalaryLoading: false,
    playerSalaryLoaded: true,
  })),

  on(HomeActions.getCHACurrentPlayerStatsSuccess, (state, action) => ({
    ...state,
    currentPlayerStat: action.stats,
    statsLoading: false,
  })),

  on(HomeActions.getCHACurrentGoalieStatsSuccess, (state, action) => ({
    ...state,
    currentGoalieStat: action.stats,
    statsLoading: false,
  })),

  on(HomeActions.getNHLCurrentStatsSuccess, (state, action) => ({
    ...state,
    currentNhlStat: action.stats,
    statsLoading: false,
  })),

  on(HomeActions.error, (state) => initialState)
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

export const getGoalieSalaryLoaded = (state: State) => state.goalieSalaryLoaded;

export const getCurrentPlayerStat = (state: State) =>
  state.currentPlayerStat[0];

export const getCurrentGoalieStat = (state: State) =>
  state.currentGoalieStat[0];

export const getCurrentNHLStat = (state: State) => state.currentNhlStat;

export const getStatsLoading = (state: State) => state.statsLoading;

export const getTrades = (state: State): GetTransactionDto[] => state.trades;
