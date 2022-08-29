import { StatGoalieLeadersDto } from '@cha/shared/entities';
import { createAction, props } from '@ngrx/store';

const NAMESPACE = '[LEAGUE STATS GOALIES]';

const getLeaders = createAction(`${NAMESPACE} Get League Leaders`);

const getLeadersSuccess = createAction(
  `${NAMESPACE} Get League Leaders Success`,
  props<{ leaders: StatGoalieLeadersDto }>()
);

const error = createAction(`${NAMESPACE} Error`);

export const LeagueStatsGoaliesActions = {
  getLeaders,
  getLeadersSuccess,
  error,
};
