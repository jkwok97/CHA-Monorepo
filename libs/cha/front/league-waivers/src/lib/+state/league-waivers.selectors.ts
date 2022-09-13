import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as LeagueWaiversReducer from './league-waivers.reducer';

export const selectState =
  createFeatureSelector<LeagueWaiversReducer.State>('league-waivers');

const selectLoading = createSelector(
  selectState,
  LeagueWaiversReducer.getLoading
);

const selectLoaded = createSelector(selectState, LeagueWaiversReducer.getLoaded);

const selectWaivers = createSelector(
  selectState,
  LeagueWaiversReducer.getWaivers
);


export const LeagueWaiversSelectors = {
  selectLoaded,
  selectLoading,
  selectWaivers,
};
