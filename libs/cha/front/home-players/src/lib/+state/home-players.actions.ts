import { StatUserPlayersHistoryDto } from '@cha/shared/entities';
import { createAction, props } from '@ngrx/store';

const NAMESPACE = '[HOME PLAYERS]';

const getUserPlayersStatsBySeason = createAction(
  `${NAMESPACE} Get User Players Stats By Season`,
  props<{ seasonType: string }>()
);

const getUserPlayersStatsBySeasonSuccess = createAction(
  `${NAMESPACE} Get User Players Stats By Season Success`,
  props<{ stats: StatUserPlayersHistoryDto[] }>()
);

const getUserPlayersAllTimeStatsBySeason = createAction(
  `${NAMESPACE} Get User Players All Time Stats By Season`,
  props<{ seasonType: string }>()
);

const getUserPlayersAllTimeStatsBySeasonSuccess = createAction(
  `${NAMESPACE} Get User Players All Time Stats By Season Success`,
  props<{ stats: StatUserPlayersHistoryDto[] }>()
);

const error = createAction(`${NAMESPACE} Error`);

export const HomePlayersActions = {
  getUserPlayersStatsBySeason,
  getUserPlayersStatsBySeasonSuccess,
  getUserPlayersAllTimeStatsBySeason,
  getUserPlayersAllTimeStatsBySeasonSuccess,
  error,
};
