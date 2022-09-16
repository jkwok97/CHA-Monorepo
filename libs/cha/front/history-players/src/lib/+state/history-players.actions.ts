import { StatPlayersHistoryDto } from '@cha/shared/entities';
import { createAction, props } from '@ngrx/store';

const NAMESPACE = '[HISTORY PLAYERS]';

const getPlayersStatsBySeason = createAction(
  `${NAMESPACE} Get Players Stats By Season`,
  props<{ seasonType: string }>()
);

const getPlayersStatsBySeasonSuccess = createAction(
  `${NAMESPACE} Get Players Stats By Season Success`,
  props<{ stats: StatPlayersHistoryDto[] }>()
);

const getPlayersStatsBySeasonSummed = createAction(
  `${NAMESPACE} Get Players Stats By Season Summed`,
  props<{ seasonType: string }>()
);

const getPlayersStatsBySeasonSummedSuccess = createAction(
  `${NAMESPACE} Get Players Stats By Season Summed Success`,
  props<{ stats: StatPlayersHistoryDto[] }>()
);

const error = createAction(`${NAMESPACE} Error`);

export const HistoryPlayersActions = {
  getPlayersStatsBySeason,
  getPlayersStatsBySeasonSuccess,
  getPlayersStatsBySeasonSummed,
  getPlayersStatsBySeasonSummedSuccess,
  error,
};
