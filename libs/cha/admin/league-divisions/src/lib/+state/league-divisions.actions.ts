import { DivisionCreateDto, DivisionDto } from '@cha/shared/entities';
import { createAction, props } from '@ngrx/store';

const NAMESPACE = '[LEAGUE DIVISIONS]';

const getDivisions = createAction(`${NAMESPACE} Get Divisions`);

const getDivisionsSuccess = createAction(
  `${NAMESPACE} Get Divisions Success`,
  props<{ divisions: DivisionDto[] }>()
);

const addDivision = createAction(
  `${NAMESPACE} Add Division`,
  props<{ division: DivisionCreateDto }>()
);

const addDivisionSuccess = createAction(
  `${NAMESPACE} Add Division Success`,
  props<{ division: DivisionDto }>()
);

const editDivision = createAction(
  `${NAMESPACE} Edit Division`,
  props<{ division: DivisionCreateDto }>()
);

const editDivisionSuccess = createAction(
  `${NAMESPACE} Edit Division Success`,
  props<{ division: DivisionDto }>()
);

const deleteDivision = createAction(
  `${NAMESPACE} Delete Division`,
  props<{ divisionId: number }>()
);

const deleteDivisionSuccess = createAction(
  `${NAMESPACE} Delete Division Success`,
  props<{ division: DivisionDto }>()
);

const error = createAction(`${NAMESPACE} Error`);

export const LeagueUsersActions = {
  getDivisions,
  getDivisionsSuccess,
  addDivision,
  addDivisionSuccess,
  editDivision,
  editDivisionSuccess,
  deleteDivision,
  deleteDivisionSuccess,
  error,
};
