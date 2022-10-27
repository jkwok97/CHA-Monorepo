import { ScheduleAllDto } from '@cha/shared/entities';
import { createAction, props } from '@ngrx/store';

const NAMESPACE = '[SCHEDULE GAMES]';

const getAll = createAction(`${NAMESPACE} Get All`);

const getAllSuccess = createAction(
  `${NAMESPACE} Get All Success`,
  props<{ schedule: ScheduleAllDto[] }>()
);

const saveGame = createAction(
  `${NAMESPACE} Save Game`,
  props<{ game: ScheduleAllDto }>()
);

const saveGameSuccess = createAction(
  `${NAMESPACE} Save Game Success`,
  props<{ game: ScheduleAllDto }>()
);

const error = createAction(`${NAMESPACE} Error`);

export const ScheduleGamesActions = {
  getAll,
  getAllSuccess,
  saveGame,
  saveGameSuccess,
  error,
};
