import {
  StatUserTeamRecordDto,
  SalariesAndRatingsDto,
  StatPlayerAllDto,
  StatGoalieAllDto,
  NhlGoalieStatDto,
  NhlPlayerStatDto,
} from '@cha/shared/entities';
import { createReducer, on, Action } from '@ngrx/store';
import { TeamsSummaryActions } from './teams-summary.actions';

export interface State {
  userId: number | undefined;
  loading: boolean;
  loaded: boolean;
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
  currentNhlStat: NhlGoalieStatDto[] | NhlPlayerStatDto[];
  statsLoading: boolean;
}

const initialState: State = {
  userId: undefined,
  loading: false,
  loaded: false,
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
  currentNhlStat: [],
  statsLoading: false,
};

const r = createReducer(
  initialState,

  on(TeamsSummaryActions.getUserIdByTeamIdSuccess, (state, action) => ({
    ...state,
    userId: action.userId,
  })),

  on(TeamsSummaryActions.getUserTeamRecordBySeasonAndSeasonType, (state) => ({
    ...state,
    teamRecordloading: true,
    teamRecordLoaded: false,
  })),

  on(
    TeamsSummaryActions.getUserTeamRecordBySeasonAndSeasonTypeSuccess,
    (state, action) => ({
      ...state,
      teamRecord: action.record,
      teamRecordloading: false,
      teamRecordLoaded: true,
    })
  ),

  on(TeamsSummaryActions.getUserTeamGoaliesSalaries, (state) => ({
    ...state,
    goalieSalaryLoading: true,
    goalieSalaryLoaded: false,
  })),

  on(
    TeamsSummaryActions.getUserTeamGoaliesSalariesSuccess,
    (state, action) => ({
      ...state,
      goalieSalaries: action.goalieSalaries,
      goalieSalaryLoading: false,
      goalieSalaryLoaded: true,
    })
  ),

  on(TeamsSummaryActions.getUserTeamPlayerSalaries, (state) => ({
    ...state,
    playerSalaryLoading: true,
    playerSalaryLoaded: false,
  })),

  on(TeamsSummaryActions.getUserTeamPlayerSalariesSuccess, (state, action) => ({
    ...state,
    playerSalaries: action.playerSalaries,
    playerSalaryLoading: false,
    playerSalaryLoaded: true,
  })),

  on(
    TeamsSummaryActions.getCHACurrentGoalieStats,
    TeamsSummaryActions.getCHACurrentPlayerStats,
    TeamsSummaryActions.getNHLCurrentStats,
    (state, action) => ({
      ...state,
      statsLoading: true,
    })
  ),

  on(TeamsSummaryActions.getCHACurrentPlayerStatsSuccess, (state, action) => ({
    ...state,
    currentPlayerStat: action.stats,
    statsLoading: false,
  })),

  on(TeamsSummaryActions.getCHACurrentGoalieStatsSuccess, (state, action) => ({
    ...state,
    currentGoalieStat: action.stats,
    statsLoading: false,
  })),

  on(TeamsSummaryActions.getNHLCurrentStatsSuccess, (state, action) => ({
    ...state,
    currentNhlStat: action.stats,
    statsLoading: false,
  })),

  on(TeamsSummaryActions.error, (state) => initialState)
);

export function reducer(state: State | undefined, action: Action) {
  return r(state, action);
}

export const getLoading = (state: State) => state.loading;

export const getLoaded = (state: State) => state.loaded;

export const getUserId = (state: State) => state.userId;

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

export const getCurrentPlayerStat = (state: State) =>
  state.currentPlayerStat[0];

export const getCurrentGoalieStat = (state: State) =>
  state.currentGoalieStat[0];

export const getCurrentNHLStat = (state: State) => state.currentNhlStat[0];

export const getStatsLoading = (state: State) => state.statsLoading;
