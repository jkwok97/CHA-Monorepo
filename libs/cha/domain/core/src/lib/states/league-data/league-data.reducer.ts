import { LeagueDataDto, TeamDto } from '@cha/shared/entities';
import { Action, createReducer, on } from '@ngrx/store';
import { LeagueDataActions } from './league-data.actions';

export interface State {
  currentData: LeagueDataDto;
  teams: TeamDto[];
  loading: boolean;
  loaded: boolean;
  saving: boolean;
  saved: boolean;
}

const initialState: State = {
  currentData: {
    current_year: '',
    next_year: '',
    prev_year: '',
    nhl_year: '',
    current_season_type: '',
    current_day: 1,
    current_draft_year: 2020,
    next_draft_year: 2021,
    current_cap: 102.7,
    next_cap: 102.7,
    min_games: '10',
    offseason: false,
  },
  teams: [],
  loading: false,
  loaded: false,
  saving: false,
  saved: false,
};

const r = createReducer(
  initialState,

  on(LeagueDataActions.getLeagueData, LeagueDataActions.getTeams, (state) => ({
    ...state,
    loading: true,
    loaded: false,
  })),

  on(LeagueDataActions.getLeagueDataSuccess, (state, action) => ({
    ...state,
    currentData: action.data,
    loading: false,
    loaded: true,
  })),

  on(LeagueDataActions.getTeamsSuccess, (state, action) => ({
    ...state,
    teams: action.teams,
    loading: false,
    loaded: true,
  })),

  on(LeagueDataActions.editData, (state) => ({
    ...state,
    saving: true,
    saved: false,
  })),

  on(LeagueDataActions.editDataSuccess, (state, action) => ({
    ...state,
    saving: false,
    saved: true,
  })),

  on(LeagueDataActions.error, (state) => initialState)
);

export function reducer(state: State | undefined, action: Action) {
  return r(state, action);
}

export const getLeagueData = (state: State) => state.currentData;

export const getTeams = (state: State) => state.teams;

export const getLoading = (state: State) => state.loading;

export const getLoaded = (state: State) => state.loaded;

export const getSaving = (state: State) => state.saving;
