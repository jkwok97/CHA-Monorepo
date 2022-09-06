import { GetTransactionDto } from '@cha/shared/entities';
import { createAction, props } from '@ngrx/store';

const NAMESPACE = '[LEAGUE TRADES]';

const getTrades = createAction(
  `${NAMESPACE} Get Trades For Season`,
  props<{ season: string }>()
);

const getTradesSuccess = createAction(
  `${NAMESPACE} Get Trades For Season Success`,
  props<{ transactions: GetTransactionDto[] }>()
);

const error = createAction(`${NAMESPACE} Error`);

export const LeagueTradesActions = {
  getTrades,
  getTradesSuccess,
  error,
};
