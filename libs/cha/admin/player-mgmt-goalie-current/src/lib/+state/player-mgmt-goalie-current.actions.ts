import { StatGoalieAllDto } from '@cha/shared/entities';
import { createAction, props } from '@ngrx/store';

const NAMESPACE = '[PLAYER MGMT GOALIE CURRENT]';

const getGoalies = createAction(`${NAMESPACE} Get Goalies`);

const getGoaliesSuccess = createAction(
  `${NAMESPACE} Get Goalies Success`,
  props<{ goalies: StatGoalieAllDto[] }>()
);

const editGoalie = createAction(
  `${NAMESPACE} Edit Goalie`,
  props<{ goalie: StatGoalieAllDto }>()
);

const editGoaliesuccess = createAction(
  `${NAMESPACE} Edit Goalie Success`,
  props<{ goalie: StatGoalieAllDto }>()
);

const deleteGoalie = createAction(
  `${NAMESPACE} Delete Goalie`,
  props<{ goalieId: number }>()
);

const deleteGoaliesuccess = createAction(
  `${NAMESPACE} Delete Goalie Success`,
  props<{ goalie: StatGoalieAllDto }>()
);

const error = createAction(`${NAMESPACE} Error`);

export const PlayerMgmtGoalieCurrentActions = {
  getGoalies,
  getGoaliesSuccess,
  editGoalie,
  editGoaliesuccess,
  deleteGoalie,
  deleteGoaliesuccess,
  error,
};
