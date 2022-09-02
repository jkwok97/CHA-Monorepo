import { ScheduleAllDto } from '@cha/shared/entities';
import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as GamesAllReducer from './games-all.reducer';

export const selectState =
  createFeatureSelector<GamesAllReducer.State>('games-all');

const selectLoading = createSelector(selectState, GamesAllReducer.getLoading);

const selectLoaded = createSelector(selectState, GamesAllReducer.getLoaded);

const selectSchedule = createSelector(selectState, GamesAllReducer.getSchedule);

const selectSeason = createSelector(
  selectSchedule,
  (schedule: ScheduleAllDto[]) => schedule[0]?.playing_year
);

export const GamesAllSelectors = {
  selectLoaded,
  selectLoading,
  selectSchedule,
  selectSeason,
};
