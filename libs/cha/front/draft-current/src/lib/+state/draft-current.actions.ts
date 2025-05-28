import { createAction, props } from '@ngrx/store';

import { DraftTableDto, TeamDto } from '@cha/shared/entities';

const NAMESPACE = '[Draft Current]';

const getDraftTable = createAction(
  `${NAMESPACE} Get Draft Lottery`,
  props<{ season: number }>()
);

const getDraftTableSuccess = createAction(
  `${NAMESPACE} Get Draft Lottery Success`,
  props<{ draftTable: DraftTableDto[] }>()
);

const getNextDraftTable = createAction(
  `${NAMESPACE} Get Next Draft Lottery`,
  props<{ season: number }>()
);

const getNextDraftTableSuccess = createAction(
  `${NAMESPACE} Get Next Draft Lottery Success`,
  props<{ draftTable: DraftTableDto[] }>()
);

const getAllTeams = createAction(`${NAMESPACE} Get All Teams`);

const getAllTeamsSuccess = createAction(
  `${NAMESPACE} Get All Teams Success`,
  props<{ teams: TeamDto[] }>()
);

const error = createAction(`${NAMESPACE} Error`);

export const DraftCurrentActions = {
  getDraftTable,
  getDraftTableSuccess,
  getNextDraftTable,
  getNextDraftTableSuccess,
  getAllTeams,
  getAllTeamsSuccess,
  error,
};
