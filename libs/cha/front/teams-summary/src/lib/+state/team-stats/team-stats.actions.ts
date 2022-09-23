import { StatUserTeamHistoryDto } from '@cha/shared/entities';
import { createAction, props } from '@ngrx/store';

const NAMESPACE = '[TEAMS SUMMARY TEAM STATS]';

const getUserTeamStatsBySeason = createAction(
  `${NAMESPACE} Get User Teams Stats By Season`,
  props<{ seasonType: string }>()
);

const getUserTeamStatsBySeasonSuccess = createAction(
  `${NAMESPACE} Get User Teams Stats By Season Success`,
  props<{ stats: StatUserTeamHistoryDto[] }>()
);

const error = createAction(`${NAMESPACE} Error`);

export const TeamStatsActions = {
  getUserTeamStatsBySeason,
  getUserTeamStatsBySeasonSuccess,
  error,
};
