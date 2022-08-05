import { createAction, props } from '@ngrx/store';
import { UserDto } from '@cha/shared/entities';

const NAMESPACE = '[Auth]';

const init = createAction('[Auth] Init');

const login = createAction(`${NAMESPACE} Login`, props<{ email: string }>());

const loginSuccess = createAction(
  `${NAMESPACE} Login Success`,
  props<{ user: UserDto }>()
);

const loginFailed = createAction(`${NAMESPACE} Login Failed`);

const logout = createAction(`${NAMESPACE} Logout`);

const logoutConfirmed = createAction(`${NAMESPACE} Logout Confirmed`);

export const authActions = {
  init,
  login,
  loginSuccess,
  loginFailed,
  logout,
  logoutConfirmed,
};
