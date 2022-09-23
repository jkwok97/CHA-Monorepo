import { StatUserGoaliesHistoryDto } from '@cha/shared/entities';
import { createAction, props } from '@ngrx/store';

const NAMESPACE = '[TEAMS SUMMARY GOALIE STATS]';

const getUserGoaliesStatsBySeason = createAction(
  `${NAMESPACE} Get User Goalies Stats By Season`,
  props<{ seasonType: string }>()
);

const getUserGoaliesStatsBySeasonSuccess = createAction(
  `${NAMESPACE} Get User Goalies Stats By Season Success`,
  props<{ stats: StatUserGoaliesHistoryDto[] }>()
);

const getUserGoaliesAllTimeStatsBySeason = createAction(
  `${NAMESPACE} Get User Goalies All Time Stats By Season`,
  props<{ seasonType: string }>()
);

const getUserGoaliesAllTimeStatsBySeasonSuccess = createAction(
  `${NAMESPACE} Get User Goalies All Time Stats By Season Success`,
  props<{ stats: StatUserGoaliesHistoryDto[] }>()
);

const error = createAction(`${NAMESPACE} Error`);

export const GoalieStatsActions = {
  getUserGoaliesStatsBySeason,
  getUserGoaliesStatsBySeasonSuccess,
  getUserGoaliesAllTimeStatsBySeason,
  getUserGoaliesAllTimeStatsBySeasonSuccess,
  error,
};
