import { StatUserTeamRecordDto } from '@cha/shared/entities';
import { createAction, props } from '@ngrx/store';

const NAMESPACE = '[HOME SUMMARY]';

const getUserTeamRecordBySeasonAndSeasonType = createAction(
  `${NAMESPACE} Get Team Record By Season and Season Type`,
  props<{ teamId: number }>()
);

const getUserTeamRecordBySeasonAndSeasonTypeSuccess = createAction(
  `${NAMESPACE} Get Team Record By Season and Season Type Success`,
  props<{ record: StatUserTeamRecordDto }>()
);

const error = createAction(`${NAMESPACE} Error`);

export const HomeSummaryActions = {
  getUserTeamRecordBySeasonAndSeasonType,
  getUserTeamRecordBySeasonAndSeasonTypeSuccess,
  error,
};
