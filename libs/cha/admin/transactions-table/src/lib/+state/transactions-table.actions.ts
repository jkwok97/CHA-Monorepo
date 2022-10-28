import { createAction, props } from '@ngrx/store';

const NAMESPACE = '[TRANSACTIONS TABLE]';

const get = createAction(`${NAMESPACE} Get`);

const getSuccess = createAction(
  `${NAMESPACE} Get Success`,
  props<{ trades: any[] }>()
);

const error = createAction(`${NAMESPACE} Error`);

const reset = createAction(`${NAMESPACE} Reset`);

export const TransactionsTableActions = {
  get,
  getSuccess,
  error,
  reset,
};
