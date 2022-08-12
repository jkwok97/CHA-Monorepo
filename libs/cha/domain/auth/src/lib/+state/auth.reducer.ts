import { authActions } from './auth.actions';
import { Action, createReducer, on } from '@ngrx/store';
import { UserDto } from '@cha/shared/entities';

export interface State {
  isAuthenticated: boolean;
  loggingIn: boolean;
  loggingInComplete: boolean;
  user: UserDto | null;
}

export const initialState: State = {
  isAuthenticated: false,
  user: null,
  loggingIn: false,
  loggingInComplete: false,
};

const r = createReducer(
  initialState,

  on(authActions.login, (state) => ({
    ...state,
    loggingIn: true,
    loggingInComplete: false,
  })),

  on(authActions.loginSuccess, (state, action) => ({
    ...state,
    user: action.user,
    isAuthenticated: true,
    loggingIn: false,
    loggingInComplete: true,
  })),

  on(authActions.loginFailed, () => initialState),

  on(authActions.logout, () => initialState),

  on(authActions.logoutConfirmed, () => initialState)
);

export function reducer(state: State | undefined, action: Action) {
  return r(state, action);
}

export const getIsAuthenticated = (state: State) => state.isAuthenticated;

export const getLoggingIn = (state: State) => state.loggingIn;

export const getLoggingInComplete = (state: State) => state.loggingInComplete;

export const getUser = (state: State) => state.user;
