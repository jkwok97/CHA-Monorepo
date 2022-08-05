import { createSelector } from '@ngrx/store';
import * as AwardReducer from './awards.reducer';
import { AppState, selectFeatureState } from '../index';

const selectState = createSelector(
  selectFeatureState,
  (state: AppState) => state.awards
);

const selectAwards = createSelector(selectState, AwardReducer.getAwards);

const selectLoading = createSelector(selectState, AwardReducer.getLoading);

const selectLoaded = createSelector(selectState, AwardReducer.getLoaded);

export const AwardsSelectors = {
  selectAwards,
  selectLoaded,
  selectLoading,
};
