import { createSelector } from '@ngrx/store';
import { selectFeatureState, State } from '../index';

import * as AwardsReducer from './awards.reducer';

const selectState = createSelector(
  selectFeatureState,
  (state: State) => state.awards
);

const selectLoading = createSelector(selectState, AwardsReducer.getLoading);

const selectLoaded = createSelector(selectState, AwardsReducer.getLoaded);

const selectAll = createSelector(selectState, AwardsReducer.getAllAwards);

export const AwardsSelectors = {
  selectLoaded,
  selectLoading,
  selectAll,
};
