import {
  StatTeamsHistoryDto,
  StatUserTeamHistoryDto,
} from '@cha/shared/entities';
import { selectFeatureState, State } from '../index';
import { createSelector } from '@ngrx/store';

import * as TeamsSummaryReducer from './teams-summary.reducer';

const selectState = createSelector(
  selectFeatureState,
  (state: State) => state.summary
);

const selectLoading = createSelector(
  selectState,
  TeamsSummaryReducer.getLoading
);

const selectLoaded = createSelector(selectState, TeamsSummaryReducer.getLoaded);

const selectUserId = createSelector(selectState, TeamsSummaryReducer.getUserId);

export const TeamsSummarySelectors = {
  selectLoaded,
  selectLoading,
  selectUserId,
};
