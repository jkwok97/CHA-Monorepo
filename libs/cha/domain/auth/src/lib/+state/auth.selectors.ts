import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as AuthReducer from './auth.reducer';
import { State } from './auth.reducer';

export const selectState = createFeatureSelector<AuthReducer.State>('auth');

const selectIsAuthenticated = createSelector(
  selectState,
  AuthReducer.getIsAuthenticated
);

const selectLoggingIn = createSelector(selectState, AuthReducer.getLoggingIn);

const selectLoggingIncomplete = createSelector(
  selectState,
  AuthReducer.getLoggingInComplete
);

const selectUserData = createSelector(selectState, AuthReducer.getUser);

const selectUserId = createSelector(
  selectState,
  (state: State) => state.user?.id
);

const selectIsUserAdmin = createSelector(
  selectState,
  (state: State) => state.user?.isadmin
);

export const authQuery = {
  selectState,
  selectIsAuthenticated,
  selectLoggingIn,
  selectLoggingIncomplete,
  selectUserData,
  selectUserId,
  selectIsUserAdmin,
};
