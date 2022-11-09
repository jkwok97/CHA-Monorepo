import { LeagueDataDto, TeamDto, UserDto } from '@cha/shared/entities';
import { createAction, props } from '@ngrx/store';

const NAMESPACE = '[League Data]';

const getLeagueData = createAction(`${NAMESPACE} Get Data`);

const getLeagueDataSuccess = createAction(
  `${NAMESPACE} Get Data Success`,
  props<{ data: LeagueDataDto }>()
);

const getTeams = createAction(`${NAMESPACE} Get Teams`);

const getTeamsSuccess = createAction(
  `${NAMESPACE} Get Teams Success`,
  props<{ teams: TeamDto[] }>()
);

const getUsers = createAction(`${NAMESPACE} Get Users`);

const getUsersSuccess = createAction(
  `${NAMESPACE} Get Users Success`,
  props<{ users: UserDto[] }>()
);

const editData = createAction(
  `${NAMESPACE} Edit Data`,
  props<{ data: LeagueDataDto }>()
);

const editDataSuccess = createAction(
  `${NAMESPACE} Edit Data Success`,
  props<{ data: LeagueDataDto }>()
);

const error = createAction(`${NAMESPACE} Error`);

export const LeagueDataActions = {
  getLeagueData,
  getLeagueDataSuccess,
  getTeams,
  getTeamsSuccess,
  getUsers,
  getUsersSuccess,
  editData,
  editDataSuccess,
  error,
};
