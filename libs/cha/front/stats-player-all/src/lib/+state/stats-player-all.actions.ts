import { StatPlayerAllDto } from '@cha/shared/entities';
import { createAction, props } from '@ngrx/store';

const NAMESPACE = '[STATS PLAYER ALL]';

const getAll = createAction(
  `${NAMESPACE} Get All`,
  props<{ season: string }>()
);

const getAllSuccess = createAction(
  `${NAMESPACE} Get All Success`,
  props<{ stats: StatPlayerAllDto[] }>()
);

const error = createAction(`${NAMESPACE} Error`);

export const StatsPlayerAllActions = {
  getAll,
  getAllSuccess,
  error,
};
