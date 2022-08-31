import { StatGoalieAllDto } from '@cha/shared/entities';
import { createAction, props } from '@ngrx/store';

const NAMESPACE = '[STATS GOALIE ALL]';

const getAll = createAction(
  `${NAMESPACE} Get All`,
  props<{ season: string }>()
);

const getAllSuccess = createAction(
  `${NAMESPACE} Get All Success`,
  props<{ stats: StatGoalieAllDto[] }>()
);

const error = createAction(`${NAMESPACE} Error`);

export const StatsGoalieAllActions = {
  getAll,
  getAllSuccess,
  error,
};
