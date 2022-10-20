import { GetTeamTransactionDto } from '@cha/shared/entities';
import { createAction, props } from '@ngrx/store';

const NAMESPACE = '[TRANSACTIONS TRADES]';

const getTeamOne = createAction(
  `${NAMESPACE} Get Team One`,
  props<{ teamId: number }>()
);

const getTeamOneSuccess = createAction(
  `${NAMESPACE} Get Team One Success`,
  props<{ team: GetTeamTransactionDto }>()
);

const getTeamTwo = createAction(
  `${NAMESPACE} Get Team Two`,
  props<{ teamId: number }>()
);

const getTeamTwoSuccess = createAction(
  `${NAMESPACE} Get Team Two Success`,
  props<{ team: GetTeamTransactionDto }>()
);

const error = createAction(`${NAMESPACE} Error`);

const reset = createAction(`${NAMESPACE} Reset`);

export const TransactionsTradesActions = {
  getTeamOne,
  getTeamOneSuccess,
  getTeamTwo,
  getTeamTwoSuccess,
  error,
  reset,
};
