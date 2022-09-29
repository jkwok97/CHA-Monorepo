import { UserDto } from '@cha/shared/entities';
import { createAction, props } from '@ngrx/store';

const NAMESPACE = '[LEAGUE USERS]';

const getUsers = createAction(`${NAMESPACE} Get Users`);

const getUsersSuccess = createAction(
  `${NAMESPACE} Get Users Success`,
  props<{ users: UserDto[] }>()
);

const error = createAction(`${NAMESPACE} Error`);

export const LeagueUsersActions = {
  getUsers,
  getUsersSuccess,
  error,
};
