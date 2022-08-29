import { StatTeamAllDto } from '@cha/shared/entities';
import { createAction, props } from '@ngrx/store';

const NAMESPACE = '[STATS TEAM ALL]';

const getAll = createAction(`${NAMESPACE} Get All`);

const getAllSuccess = createAction(
  `${NAMESPACE} Get All Success`,
  props<{ stats: StatTeamAllDto[] }>()
);

const error = createAction(`${NAMESPACE} Error`);

export const StatsTeamAllActions = {
  getAll,
  getAllSuccess,
  error,
};
