import { SalariesAndRatingsDto } from '@cha/shared/entities';
import { createAction, props } from '@ngrx/store';

const NAMESPACE = '[LEAGUE SALARIES AND RATINGS]';

const getPlayerSalaries = createAction(`${NAMESPACE} Get Player Salaries`);

const getPlayerSalariesSuccess = createAction(
  `${NAMESPACE} Get Players Salaries Success`,
  props<{ salaries: SalariesAndRatingsDto[] }>()
);

const getGoaliesalaries = createAction(`${NAMESPACE} Get Goalie Salaries`);

const getGoaliesalariesSuccess = createAction(
  `${NAMESPACE} Get Goalies Salaries Success`,
  props<{ salaries: SalariesAndRatingsDto[] }>()
);

const error = createAction(`${NAMESPACE} Error`);

export const LeagueSalariesAndRatingActions = {
  getPlayerSalaries,
  getPlayerSalariesSuccess,
  getGoaliesalaries,
  getGoaliesalariesSuccess,
  error,
};
