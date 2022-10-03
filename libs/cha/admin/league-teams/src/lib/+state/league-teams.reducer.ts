import { TeamDto, UserDto } from '@cha/shared/entities';
import { createReducer, on, Action } from '@ngrx/store';
import { LeagueTeamsActions } from './league-teams.actions';

export interface State {
  teams: TeamDto[];
  users: UserDto[];
  loading: boolean;
  loaded: boolean;
  saving: boolean;
  saved: boolean;
}

const initialState: State = {
  teams: [],
  users: [],
  loading: false,
  loaded: false,
  saving: false,
  saved: false,
};

const r = createReducer(
  initialState,

  on(LeagueTeamsActions.getTeams, (state) => ({
    ...state,
    loading: true,
    loaded: false,
  })),

  on(
    LeagueTeamsActions.addTeam,
    LeagueTeamsActions.editTeam,
    LeagueTeamsActions.deleteTeam,
    (state) => ({
      ...state,
      saving: true,
      saved: false,
    })
  ),

  on(LeagueTeamsActions.getTeamsSuccess, (state, action) => ({
    ...state,
    teams: action.teams,
    loading: false,
    loaded: true,
  })),

  on(LeagueTeamsActions.getUsersSuccess, (state, action) => ({
    ...state,
    users: action.users,
  })),

  on(
    LeagueTeamsActions.addTeamSuccess,
    LeagueTeamsActions.editTeamSuccess,
    LeagueTeamsActions.deleteTeamSuccess,
    (state, action) => ({
      ...state,
      saving: false,
      saved: true,
    })
  ),

  on(LeagueTeamsActions.error, (state) => initialState)
);

export function reducer(state: State | undefined, action: Action) {
  return r(state, action);
}

export const getTeams = (state: State) => state.teams;

export const getUsers = (state: State) => state.users;

export const getLoading = (state: State) => state.loading;

export const getLoaded = (state: State) => state.loaded;

export const getSaving = (state: State) => state.saving;

export const getSaved = (state: State) => state.saved;
