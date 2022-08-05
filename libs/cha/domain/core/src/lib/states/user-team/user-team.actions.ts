import { TeamDto } from '@cha/shared/entities';
import { createAction, props } from '@ngrx/store';

const NAMESPACE = '[User Team]';

const get = createAction(`${NAMESPACE} Get`, props<{ userId: number }>());

const getSuccess = createAction(
  `${NAMESPACE} Get Success`,
  props<{ userTeams: TeamDto[] }>()
);

const error = createAction(`${NAMESPACE} Error`);

export const UserTeamActions = {
  get,
  getSuccess,
  error,
};
