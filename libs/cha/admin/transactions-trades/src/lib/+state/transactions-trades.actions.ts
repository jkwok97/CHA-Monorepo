import { GetTeamTransactionDto } from '@cha/shared/entities';
import { createAction, props } from '@ngrx/store';

const NAMESPACE = '[TRANSACTIONS TRADES]';

const getTeamOne = createAction(
  `${NAMESPACE} Get Team One`,
  props<{ team: string }>()
);

const getTeamOneSuccess = createAction(
  `${NAMESPACE} Get Team One Success`,
  props<{ team: GetTeamTransactionDto }>()
);

const getTeamTwo = createAction(
  `${NAMESPACE} Get Team Two`,
  props<{ team: string }>()
);

const getTeamTwoSuccess = createAction(
  `${NAMESPACE} Get Team Two Success`,
  props<{ team: GetTeamTransactionDto }>()
);

const setWaiverAcquisition = createAction(
  `${NAMESPACE} Set Waiver Acquisition`,
  props<{ team: string; players: string[] }>()
);

const setWaiverAcquisitionSuccess = createAction(
  `${NAMESPACE} Set Waiver Acquisition Success`
);

const setWaiverRelease = createAction(
  `${NAMESPACE} Set Waiver Release`,
  props<{ team: string; players: string[] }>()
);

const setWaiverReleaseSuccess = createAction(
  `${NAMESPACE} Set Waiver Release Success`
);

const setTrade = createAction(
  `${NAMESPACE} Set Trade`,
  props<{
    teamOne: string;
    teamTwo: string;
    teamOnePicks: string[];
    teamTwoPicks: string[];
  }>()
);

const setTradeSuccess = createAction(`${NAMESPACE} Set Trade Success`);

const error = createAction(`${NAMESPACE} Error`);

const reset = createAction(`${NAMESPACE} Reset`);

export const TransactionsTradesActions = {
  getTeamOne,
  getTeamOneSuccess,
  getTeamTwo,
  getTeamTwoSuccess,
  setWaiverAcquisition,
  setWaiverAcquisitionSuccess,
  setWaiverRelease,
  setWaiverReleaseSuccess,
  setTrade,
  setTradeSuccess,
  error,
  reset,
};
