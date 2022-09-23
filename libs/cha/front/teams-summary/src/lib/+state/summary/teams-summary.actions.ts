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

const error = createAction(`${NAMESPACE} Error`);

export const TeamsSummaryActions = {
  getUserIdByTeamId,
  getUserIdByTeamIdSuccess,
  error,
};
