import { WaiversDto } from '@cha/shared/entities';
import { createAction, props } from '@ngrx/store';

const NAMESPACE = '[TRANSACTIONS WAIVERS]';

const getWaivers = createAction(`${NAMESPACE} Get Waivers`);

const getWaiversSuccess = createAction(
  `${NAMESPACE} Get Waivers Success`,
  props<{ waivers: WaiversDto[] }>()
);

const updateWaiver = createAction(
  `${NAMESPACE} Update Waiver`,
  props<{ teams: WaiversDto[] }>()
);

const updateWaiverSuccess = createAction(
  `${NAMESPACE} Update Waiver Success`,
  props<{ teams: WaiversDto[] }>()
);

const error = createAction(`${NAMESPACE} Error`);

export const TransactionsWaiversActions = {
  getWaivers,
  getWaiversSuccess,
  updateWaiver,
  updateWaiverSuccess,
  error,
};
