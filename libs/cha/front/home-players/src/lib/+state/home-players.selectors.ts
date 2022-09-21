import {
  StatPlayersHistoryDto,
  StatUserPlayersHistoryDto,
} from '@cha/shared/entities';
import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as HomePlayersReducer from './home-players.reducer';

export const selectState =
  createFeatureSelector<HomePlayersReducer.State>('home-players');

const selectLoading = createSelector(
  selectState,
  HomePlayersReducer.getLoading
);

const selectLoaded = createSelector(selectState, HomePlayersReducer.getLoaded);

const selectAll = createSelector(selectState, HomePlayersReducer.getAllStats);

const selectPlayersStats = createSelector(
  selectAll,
  (allPlayersStats: StatUserPlayersHistoryDto[]) => {
    const playersStats: StatPlayersHistoryDto[] = [];
    allPlayersStats.forEach((player: StatUserPlayersHistoryDto) => {
      player.playersStats.forEach((stat: StatPlayersHistoryDto) =>
        playersStats.push(stat)
      );
    });
    return playersStats;
  }
);

export const HomePlayersSelectors = {
  selectLoaded,
  selectLoading,
  selectAll,
  selectPlayersStats,
};
