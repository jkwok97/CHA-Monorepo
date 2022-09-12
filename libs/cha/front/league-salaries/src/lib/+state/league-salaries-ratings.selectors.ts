import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as LeagueSalariesAndRatingsReducer from './league-salaries-ratings.reducer';

export const selectState =
  createFeatureSelector<LeagueSalariesAndRatingsReducer.State>('league-salaries-ratings');

const selectLoading = createSelector(
  selectState,
  LeagueSalariesAndRatingsReducer.getLoading
);

const selectLoaded = createSelector(selectState, LeagueSalariesAndRatingsReducer.getLoaded);

const selectSalaries = createSelector(
  selectState,
  LeagueSalariesAndRatingsReducer.getSalaries
);


export const LeagueSalariesAndRatingsSelectors = {
  selectLoaded,
  selectLoading,
  selectSalaries,
};
