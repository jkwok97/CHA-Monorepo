import { ScheduleAllDto } from '@cha/shared/entities';
import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as ScheduleGamesReducer from './schedule-games.reducer';

export const selectState =
  createFeatureSelector<ScheduleGamesReducer.State>('schedule-games');

const selectLoading = createSelector(
  selectState,
  ScheduleGamesReducer.getLoading
);

const selectLoaded = createSelector(
  selectState,
  ScheduleGamesReducer.getLoaded
);

const selectSchedule = createSelector(
  selectState,
  ScheduleGamesReducer.getSchedule
);

const selectSaving = createSelector(
  selectState,
  ScheduleGamesReducer.getSaving
);

const selectSaved = createSelector(selectState, ScheduleGamesReducer.getSaved);

const selectSeason = createSelector(
  selectSchedule,
  (schedule: ScheduleAllDto[]) => schedule[0]?.playing_year
);

export const ScheduleGamesSelectors = {
  selectLoaded,
  selectLoading,
  selectSaving,
  selectSaved,
  selectSchedule,
  selectSeason,
};
