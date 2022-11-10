import {
  ConferenceDto,
  DivisionCreateDto,
  DivisionDto,
  GetDivisionDto,
} from '@cha/shared/entities';
import { createAction, props } from '@ngrx/store';

const NAMESPACE = '[LEAGUE DIVISIONS]';

const getDivisions = createAction(`${NAMESPACE} Get Divisions`);

const getDivisionsSuccess = createAction(
  `${NAMESPACE} Get Divisions Success`,
  props<{ divisions: GetDivisionDto[] }>()
);

const getConferences = createAction(`${NAMESPACE} Get Conferences`);

const getConferencesSuccess = createAction(
  `${NAMESPACE} Get Conferences Success`,
  props<{ conferences: ConferenceDto[] }>()
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
  props<{ division: DivisionDto }>()
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

export const LeagueDivisionsActions = {
  getDivisions,
  getDivisionsSuccess,
  getConferences,
  getConferencesSuccess,
  addDivision,
  addDivisionSuccess,
  editDivision,
  editDivisionSuccess,
  deleteDivision,
  deleteDivisionSuccess,
  error,
};
