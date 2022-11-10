import { UserDto } from '@cha/shared/entities';
import { createReducer, on, Action } from '@ngrx/store';
import { LeagueUsersActions } from './league-users.actions';

export interface State {
  users: UserDto[];
  loading: boolean;
  loaded: boolean;
  saving: boolean;
  saved: boolean;
}

const initialState: State = {
  users: [],
  loading: false,
  loaded: false,
  saving: false,
  saved: false,
};

const r = createReducer(
  initialState,

  on(LeagueUsersActions.getUsers, (state) => ({
    ...state,
    loading: true,
    loaded: false,
  })),

  on(
    LeagueUsersActions.addUser,
    LeagueUsersActions.editUser,
    LeagueUsersActions.deleteUser,
    (state) => ({
      ...state,
      saving: true,
      saved: false,
    })
  ),

  on(LeagueUsersActions.getUsersSuccess, (state, action) => ({
    ...state,
    users: action.users,
    loading: false,
    loaded: true,
  })),

  on(
    LeagueUsersActions.addUserSuccess,
    LeagueUsersActions.editUserSuccess,
    LeagueUsersActions.deleteUserSuccess,
    (state, action) => ({
      ...state,
      saving: false,
      saved: true,
    })
  ),

  on(LeagueUsersActions.error, (state) => initialState)
);

export function reducer(state: State | undefined, action: Action) {
  return r(state, action);
}

export const getUsers = (state: State) => state.users;

export const getLoading = (state: State) => state.loading;

export const getLoaded = (state: State) => state.loaded;

export const getSaving = (state: State) => state.saving;

export const getSaved = (state: State) => state.saved;
