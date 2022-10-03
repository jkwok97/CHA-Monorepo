import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as LeagueTeamsReducer from './league-teams.reducer';

export const selectState =
  createFeatureSelector<LeagueTeamsReducer.State>('league-teams');

const selectLoading = createSelector(
  selectState,
  LeagueTeamsReducer.getLoading
);

const selectLoaded = createSelector(selectState, LeagueTeamsReducer.getLoaded);

const selectSaving = createSelector(selectState, LeagueTeamsReducer.getSaving);

const selectSaved = createSelector(selectState, LeagueTeamsReducer.getSaved);

const selectTeams = createSelector(selectState, LeagueTeamsReducer.getTeams);

export const LeagueTeamsSelectors = {
  selectLoaded,
  selectLoading,
  selectSaving,
  selectSaved,
  selectTeams,
};
