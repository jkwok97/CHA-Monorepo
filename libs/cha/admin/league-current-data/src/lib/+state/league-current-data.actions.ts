import { LeagueDataDto } from '@cha/shared/entities';
import { createAction, props } from '@ngrx/store';

const NAMESPACE = '[LEAGUE CURRENT DATA]';

const getData = createAction(`${NAMESPACE} Get Data`);

const getDataSuccess = createAction(
  `${NAMESPACE} Get Data Success`,
  props<{ data: LeagueDataDto }>()
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

export const LeagueCurrentDataActions = {
  getData,
  getDataSuccess,
  editData,
  editDataSuccess,
  error,
};
