import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as LeagueUsersReducer from './league-divisions.reducer';

export const selectState =
  createFeatureSelector<LeagueUsersReducer.State>('league-users');

const selectLoading = createSelector(
  selectState,
  LeagueUsersReducer.getLoading
);

const selectLoaded = createSelector(selectState, LeagueUsersReducer.getLoaded);

const selectSaving = createSelector(selectState, LeagueUsersReducer.getSaving);

const selectSaved = createSelector(selectState, LeagueUsersReducer.getSaved);

const selectUsers = createSelector(selectState, LeagueUsersReducer.getUsers);

export const LeagueUsersSelectors = {
  selectLoaded,
  selectLoading,
  selectSaving,
  selectSaved,
  selectUsers,
};
