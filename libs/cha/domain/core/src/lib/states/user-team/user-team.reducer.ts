import { TeamDto } from '@cha/shared/entities';
import { Action, createReducer, on } from '@ngrx/store';
import { UserTeamActions } from './user-team.actions';

export interface State {
  teams: TeamDto[];
  loading: boolean;
  loaded: boolean;
}

const initialState: State = {
  teams: [],
  loading: false,
  loaded: false,
};

const r = createReducer(
  initialState,

  on(UserTeamActions.get, (state) => ({
    ...state,
    loading: true,
    loaded: false,
  })),

  on(UserTeamActions.getSuccess, (state, action) => ({
    ...state,
    teams: action.userTeams,
    loading: false,
    loaded: true,
  })),

  on(UserTeamActions.error, (state) => initialState)
);

export function reducer(state: State | undefined, action: Action) {
  return r(state, action);
}

export const getTeams = (state: State) => state.teams;

export const getLoading = (state: State) => state.loading;

export const getLoaded = (state: State) => state.loaded;
