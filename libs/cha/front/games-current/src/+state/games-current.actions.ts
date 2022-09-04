import { GamesDto } from '@cha/shared/entities';
import { createAction, props } from '@ngrx/store';

const NAMESPACE = '[GAMES CURRENT]';

const getCurrent = createAction(`${NAMESPACE} Get Current`);

const getCurrentSuccess = createAction(
  `${NAMESPACE} Get Current Success`,
  props<{ games: GamesDto[] }>()
);

const getNext = createAction(`${NAMESPACE} Get Next`);

const getNextSuccess = createAction(
  `${NAMESPACE} Get Next Success`,
  props<{ games: GamesDto[] }>()
);

const getPrevious = createAction(`${NAMESPACE} Get Previous`);

const getPreviousSuccess = createAction(
  `${NAMESPACE} Get Previous Success`,
  props<{ games: GamesDto[] }>()
);

const error = createAction(`${NAMESPACE} Error`);

export const GamesCurrentActions = {
  getCurrent,
  getCurrentSuccess,
  getNext,
  getNextSuccess,
  getPrevious,
  getPreviousSuccess,
  error,
};
