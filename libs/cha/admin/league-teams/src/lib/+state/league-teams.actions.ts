import { DivisionDto, TeamCreateDto, TeamDto, UserDto } from '@cha/shared/entities';
import { createAction, props } from '@ngrx/store';

const NAMESPACE = '[LEAGUE TEAMS]';

const getTeams = createAction(`${NAMESPACE} Get Teams`);

const getTeamsSuccess = createAction(
  `${NAMESPACE} Get Teams Success`,
  props<{ teams: TeamDto[] }>()
);

const addTeam = createAction(
  `${NAMESPACE} Add Team`,
  props<{ team: TeamCreateDto }>()
);

const addTeamSuccess = createAction(
  `${NAMESPACE} Add Team Success`,
  props<{ team: TeamDto }>()
);

const editTeam = createAction(
  `${NAMESPACE} Edit Team`,
  props<{ team: TeamDto }>()
);

const editTeamSuccess = createAction(
  `${NAMESPACE} Edit Team Success`,
  props<{ team: TeamDto }>()
);

const deleteTeam = createAction(
  `${NAMESPACE} Delete Team`,
  props<{ teamId: number }>()
);

const deleteTeamSuccess = createAction(
  `${NAMESPACE} Delete Team Success`,
  props<{ team: TeamDto }>()
);

const getUsers = createAction(`${NAMESPACE} Get Users`);

const getUsersSuccess = createAction(
  `${NAMESPACE} Get Users Success`,
  props<{ users: UserDto[] }>()
);

const getDivisions = createAction(`${NAMESPACE} Get Divisions`);

const getDivisionsSuccess = createAction(
  `${NAMESPACE} Get Divisions Success`,
  props<{ divisions: DivisionDto[] }>()
);

const error = createAction(`${NAMESPACE} Error`);

export const LeagueTeamsActions = {
  getTeams,
  getTeamsSuccess,
  addTeam,
  addTeamSuccess,
  editTeam,
  editTeamSuccess,
  deleteTeam,
  deleteTeamSuccess,
  getUsers,
  getUsersSuccess,
  getDivisions,
  getDivisionsSuccess,
  error,
};
