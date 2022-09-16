import { StatGoaliesHistoryDto } from '@cha/shared/entities';
import { createAction, props } from '@ngrx/store';

const NAMESPACE = '[HISTORY GOALIES]';

const getGoaliesStatsBySeason = createAction(
  `${NAMESPACE} Get Goalies Stats By Season`,
  props<{ seasonType: string }>()
);

const getGoaliesStatsBySeasonSuccess = createAction(
  `${NAMESPACE} Get Goalies Stats By Season Success`,
  props<{ stats: StatGoaliesHistoryDto[] }>()
);

const getGoaliesStatsBySeasonSummed = createAction(
  `${NAMESPACE} Get Goalies Stats By Season Summed`,
  props<{ seasonType: string }>()
);

const getGoaliesStatsBySeasonSummedSuccess = createAction(
  `${NAMESPACE} Get Goalies Stats By Season Summed Success`,
  props<{ stats: StatGoaliesHistoryDto[] }>()
);

const error = createAction(`${NAMESPACE} Error`);

export const HistoryGoaliesActions = {
  getGoaliesStatsBySeason,
  getGoaliesStatsBySeasonSuccess,
  getGoaliesStatsBySeasonSummed,
  getGoaliesStatsBySeasonSummedSuccess,
  error,
};
