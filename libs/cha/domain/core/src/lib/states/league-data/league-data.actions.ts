import { LeagueDataDto, TeamDto } from '@cha/shared/entities';
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

const error = createAction(`${NAMESPACE} Error`);

export const LeagueDataActions = {
  getLeagueData,
  getLeagueDataSuccess,
  getTeams,
  getTeamsSuccess,
  error,
};
