import { createAction, props } from '@ngrx/store';

const NAMESPACE = '[NHL Leaders]';

const getLeaders = createAction(`${NAMESPACE} Get Leaders`);

const getLeadersSuccess = createAction(
  `${NAMESPACE} Get Leaders Success`,
  props<{ leaders: any }>()
);

const error = createAction(`${NAMESPACE} Error`);

export const NhlLeadersActions = {
  getLeaders,
  getLeadersSuccess,
  error,
};
