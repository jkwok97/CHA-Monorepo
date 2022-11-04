import { ScheduleAllDto } from '@cha/shared/entities';
import { createAction, props } from '@ngrx/store';

const NAMESPACE = '[GAMES ALL]';

const getAll = createAction(`${NAMESPACE} Get All`);

const getAllSuccess = createAction(
  `${NAMESPACE} Get All Success`,
  props<{ schedule: ScheduleAllDto[] }>()
);

const getBoxScore = createAction(
  `${NAMESPACE} Get Box Score`,
  props<{ gameId: number; playingYear: string }>()
);

const getBoxScoreSuccess = createAction(
  `${NAMESPACE} Get Box Score Success`,
  props<{ game: File | null }>()
);

const resetBoxScore = createAction(`${NAMESPACE} Reset Box Score`);

const getBoxScoreError = createAction(`${NAMESPACE} Get Box Score Error`);

const error = createAction(`${NAMESPACE} Error`);

export const GamesAllActions = {
  getAll,
  getAllSuccess,
  getBoxScore,
  getBoxScoreSuccess,
  resetBoxScore,
  getBoxScoreError,
  error,
};
