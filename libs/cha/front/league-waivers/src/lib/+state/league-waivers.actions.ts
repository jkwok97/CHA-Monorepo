import { WaiversDto } from '@cha/shared/entities';
import { createAction, props } from '@ngrx/store';

const NAMESPACE = '[LEAGUE WAIVERS]';

const getWaivers = createAction(`${NAMESPACE} Get Waivers`);

const getWaiversSuccess = createAction(
  `${NAMESPACE} Get Waivers Success`,
  props<{ waivers: WaiversDto[] }>()
);

const error = createAction(`${NAMESPACE} Error`);

export const LeagueWaiversActions = {
  getWaivers,
  getWaiversSuccess,
  error,
};
