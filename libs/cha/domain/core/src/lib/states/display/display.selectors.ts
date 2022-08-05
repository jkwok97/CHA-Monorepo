import { createSelector } from '@ngrx/store';
import { AppState, selectFeatureState } from '../index';

import * as DisplayReducer from './display.reducer';

const selectState = createSelector(
  selectFeatureState,
  (state: AppState) => state.display
);

const selectIsMobile = createSelector(selectState, DisplayReducer.getIsMobile);

export const DisplaySelectors = {
  selectIsMobile,
};
