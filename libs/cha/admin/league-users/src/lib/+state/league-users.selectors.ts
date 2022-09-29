import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as LeagueUsersReducer from './league-users.reducer';

export const selectState =
  createFeatureSelector<LeagueUsersReducer.State>('league-users');

const selectLoading = createSelector(
  selectState,
  LeagueUsersReducer.getLoading
);

const selectLoaded = createSelector(selectState, LeagueUsersReducer.getLoaded);

const selectUsers = createSelector(selectState, LeagueUsersReducer.getUsers);

export const LeagueUsersSelectors = {
  selectLoaded,
  selectLoading,
  selectUsers,
};
