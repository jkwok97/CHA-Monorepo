import { AwardDto } from '@cha/shared/entities';
import { createAction, props } from '@ngrx/store';

const NAMESPACE = '[Awards]';

const getChampions = createAction(`${NAMESPACE} Get Champions`);

const getScorers = createAction(`${NAMESPACE} Get Scorers`);

const getDefense = createAction(`${NAMESPACE} Get Defense`);

const getRookies = createAction(`${NAMESPACE} Get Rookies`);

const getGoalies = createAction(`${NAMESPACE} Get Goalies`);

const getGm = createAction(`${NAMESPACE} Get Gm`);

const getSeason = createAction(`${NAMESPACE} Get Season`);

const getAwardSuccess = createAction(
  `${NAMESPACE} Get Award Success`,
  props<{ awards: AwardDto[] }>()
);

const error = createAction(`${NAMESPACE} Error`);

export const AwardActions = {
  getChampions,
  getScorers,
  getDefense,
  getRookies,
  getGoalies,
  getGm,
  getSeason,
  getAwardSuccess,
  error,
};
