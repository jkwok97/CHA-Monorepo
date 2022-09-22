import { StatUserTeamHistoryDto } from '@cha/shared/entities';
import { createAction, props } from '@ngrx/store';

const NAMESPACE = '[TEAMS SUMMARY]';

const getUserIdByTeamId = createAction(
  `${NAMESPACE} Get User Id By Team Id`,
  props<{ teamId: number }>()
);

const getUserIdByTeamIdSuccess = createAction(
  `${NAMESPACE} Get User Id By Team Id Success`,
  props<{ userId: number }>()
);

const getUserTeamStatsBySeason = createAction(
  `${NAMESPACE} Get User Teams Stats By Season`,
  props<{ seasonType: string }>()
);

const getUserTeamStatsBySeasonSuccess = createAction(
  `${NAMESPACE} Get User Teams Stats By Season Success`,
  props<{ stats: StatUserTeamHistoryDto[] }>()
);

const error = createAction(`${NAMESPACE} Error`);

export const TeamsSummaryActions = {
  getUserIdByTeamId,
  getUserIdByTeamIdSuccess,
  getUserTeamStatsBySeason,
  getUserTeamStatsBySeasonSuccess,
  error,
};
