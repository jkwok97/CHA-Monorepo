import { createAction, props } from '@ngrx/store';

const NAMESPACE = '[Display]';

const get = createAction(`${NAMESPACE} Get`);

const getSuccess = createAction(
  `${NAMESPACE} Get Success`,
  props<{ isMobile: boolean }>()
);

const error = createAction(`${NAMESPACE} Error`);

export const DisplayActions = {
  get,
  getSuccess,
  error,
};
