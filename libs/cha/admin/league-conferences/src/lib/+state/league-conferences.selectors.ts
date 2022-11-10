import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as LeagueConferencesReducer from './league-conferences.reducer';

export const selectState =
  createFeatureSelector<LeagueConferencesReducer.State>('league-conferences');

const selectLoading = createSelector(
  selectState,
  LeagueConferencesReducer.getLoading
);

const selectLoaded = createSelector(
  selectState,
  LeagueConferencesReducer.getLoaded
);

const selectSaving = createSelector(
  selectState,
  LeagueConferencesReducer.getSaving
);

const selectSaved = createSelector(
  selectState,
  LeagueConferencesReducer.getSaved
);

const selectConferences = createSelector(
  selectState,
  LeagueConferencesReducer.getConferences
);

export const LeagueConferenceSelectors = {
  selectLoaded,
  selectLoading,
  selectSaving,
  selectSaved,
  selectConferences,
};
