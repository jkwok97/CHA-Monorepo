import {
  StatPlayersHistoryDto,
  StatUserPlayersHistoryDto,
} from '@cha/shared/entities';
import { selectFeatureState, State } from '../index';
import { createSelector } from '@ngrx/store';

import * as PlayerStatsReducer from './player-stats.reducer';

const selectState = createSelector(
  selectFeatureState,
  (state: State) => state.playerStats
);

const selectLoading = createSelector(
  selectState,
  PlayerStatsReducer.getLoading
);

const selectLoaded = createSelector(selectState, PlayerStatsReducer.getLoaded);

const selectAll = createSelector(selectState, PlayerStatsReducer.getAllStats);

const selectPlayersStats = createSelector(
  selectAll,
  (allPlayersStats: StatUserPlayersHistoryDto[]) => {
    const playersStats: StatPlayersHistoryDto[] = [];
    allPlayersStats.forEach((player: StatUserPlayersHistoryDto) => {
      player.playerStats.forEach((stat: StatPlayersHistoryDto) =>
        playersStats.push(stat)
      );
    });
    return playersStats;
  }
);

export const PlayerStatsSelectors = {
  selectLoaded,
  selectLoading,
  selectAll,
  selectPlayersStats,
};
