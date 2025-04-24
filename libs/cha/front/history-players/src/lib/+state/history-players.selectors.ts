import { StatPlayersHistoryDto } from '@cha/shared/entities';
import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as HistoryPlayersReducer from './history-players.reducer';

export const selectState =
  createFeatureSelector<HistoryPlayersReducer.State>('history-players');

const selectLoading = createSelector(
  selectState,
  HistoryPlayersReducer.getLoading
);

const selectLoaded = createSelector(
  selectState,
  HistoryPlayersReducer.getLoaded
);

const selectAll = createSelector(
  selectState,
  HistoryPlayersReducer.getAllStats
);

const selectForwards = createSelector(
  selectAll,
  (allStats: StatPlayersHistoryDto[]) =>
    allStats.filter(
      (stat: StatPlayersHistoryDto) => stat.player_id.isforward === true
    )
);

const selectDefense = createSelector(
  selectAll,
  (allStats: StatPlayersHistoryDto[]) =>
    allStats.filter(
      (stat: StatPlayersHistoryDto) => stat.player_id.isdefense === true
    )
);

export const HistoryPlayersSelectors = {
  selectLoaded,
  selectLoading,
  selectAll,
  selectForwards,
  selectDefense,
};
