import { EditTradeDto, GetTradeDto } from '@cha/shared/entities';
import { createAction, props } from '@ngrx/store';

const NAMESPACE = '[TRANSACTIONS TABLE]';

const get = createAction(`${NAMESPACE} Get`);

const getSuccess = createAction(
  `${NAMESPACE} Get Success`,
  props<{ trades: GetTradeDto[] }>()
);

const edit = createAction(
  `${NAMESPACE} Edit`,
  props<{ trade: EditTradeDto }>()
);

const editSuccess = createAction(`${NAMESPACE} Edit Success`);

const error = createAction(`${NAMESPACE} Error`);

const reset = createAction(`${NAMESPACE} Reset`);

export const TransactionsTableActions = {
  get,
  getSuccess,
  edit,
  editSuccess,
  error,
  reset,
};
