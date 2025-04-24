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

const getTeamsStatsBySeasonSummed = createAction(
  `${NAMESPACE} Get Teams Stats By Season Summed`,
  props<{ seasonType: string }>()
);

const getTeamsStatsBySeasonSummedSuccess = createAction(
  `${NAMESPACE} Get Teams Stats By Season Summed Success`,
  props<{ stats: StatTeamsHistoryDto[] }>()
);

const error = createAction(`${NAMESPACE} Error`);

export const HistoryTeamsActions = {
  getTeamsStatsBySeason,
  getTeamsStatsBySeasonSuccess,
  getTeamsStatsBySeasonSummed,
  getTeamsStatsBySeasonSummedSuccess,
  error,
};
