import { ScheduleAllDto } from '@cha/shared/entities';
import { createAction, props } from '@ngrx/store';

const NAMESPACE = '[GAMES ALL]';

const getAll = createAction(
  `${NAMESPACE} Get All`,
  props<{ season: string }>()
);

const getAllSuccess = createAction(
  `${NAMESPACE} Get All Success`,
  props<{ schedule: ScheduleAllDto[] }>()
);

const error = createAction(`${NAMESPACE} Error`);

export const GamesAllActions = {
  getAll,
  getAllSuccess,
  error,
};
