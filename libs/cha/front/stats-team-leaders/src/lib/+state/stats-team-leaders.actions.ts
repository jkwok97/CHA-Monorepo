import { statTeamDto } from '@cha/shared/entities';
import { createAction, props } from '@ngrx/store';

const NAMESPACE = '[LEAGUE STATS TEAM]';

const getLeagueTeamStats = createAction(`${NAMESPACE} Get League Team Stats`);

const getLeagueTeamStatsSuccess = createAction(
  `${NAMESPACE} Get League Team Stats Success`,
  props<{ leagueTeamStats: statTeamDto[] }>()
);

const error = createAction(`${NAMESPACE} Error`);

export const LeagueStatsTeamActions = {
  getLeagueTeamStats,
  getLeagueTeamStatsSuccess,
  error,
};
