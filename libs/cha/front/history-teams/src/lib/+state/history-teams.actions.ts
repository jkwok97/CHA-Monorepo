import { StatTeamsHistoryDto } from '@cha/shared/entities';
import { createAction, props } from '@ngrx/store';

const NAMESPACE = '[HISTORY TEAMS]';

const getTeamsStatsBySeason = createAction(
  `${NAMESPACE} Get Teams Stats By Season`,
  props<{ seasonType: string }>()
);

const getTeamsStatsBySeasonSuccess = createAction(
  `${NAMESPACE} Get Teams Stats By Season Success`,
  props<{ stats: StatTeamsHistoryDto[] }>()
);

const error = createAction(`${NAMESPACE} Error`);

export const HistoryTeamsActions = {
  getTeamsStatsBySeason,
  getTeamsStatsBySeasonSuccess,
  error,
};
