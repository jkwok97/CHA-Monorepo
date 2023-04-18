import { StatPlayerLeadersDto } from '@cha/shared/entities';
import { createAction, props } from '@ngrx/store';

const NAMESPACE = '[LEAGUE STATS PLAYERS]';

const getLeaders = createAction(
  `${NAMESPACE} Get League Leaders`,
  props<{ seasonType: string }>()
);

const getLeadersSuccess = createAction(
  `${NAMESPACE} Get League Leaders Success`,
  props<{ leaders: StatPlayerLeadersDto }>()
);

const error = createAction(`${NAMESPACE} Error`);

export const LeagueStatsPlayersActions = {
  getLeaders,
  getLeadersSuccess,
  error,
};
