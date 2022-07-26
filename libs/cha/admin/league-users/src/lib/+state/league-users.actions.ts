import { UserCreateDto, UserDto } from '@cha/shared/entities';
import { createAction, props } from '@ngrx/store';

const NAMESPACE = '[LEAGUE USERS]';

const getUsers = createAction(`${NAMESPACE} Get Users`);

const getUsersSuccess = createAction(
  `${NAMESPACE} Get Users Success`,
  props<{ users: UserDto[] }>()
);

const addUser = createAction(
  `${NAMESPACE} Add User`,
  props<{ user: UserCreateDto }>()
);

const addUserSuccess = createAction(
  `${NAMESPACE} Add User Success`,
  props<{ user: UserDto }>()
);

const editUser = createAction(
  `${NAMESPACE} Edit User`,
  props<{ user: UserCreateDto; userId: number }>()
);

const editUserSuccess = createAction(
  `${NAMESPACE} Edit User Success`,
  props<{ user: UserDto }>()
);

const deleteUser = createAction(
  `${NAMESPACE} Delete User`,
  props<{ userId: number }>()
);

const deleteUserSuccess = createAction(
  `${NAMESPACE} Delete User Success`,
  props<{ user: UserDto }>()
);

const error = createAction(`${NAMESPACE} Error`);

export const LeagueUsersActions = {
  getUsers,
  getUsersSuccess,
  addUser,
  addUserSuccess,
  editUser,
  editUserSuccess,
  deleteUser,
  deleteUserSuccess,
  error,
};
