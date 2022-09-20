import { createAction, props } from '@ngrx/store';

import { DraftTableDto } from '@cha/shared/entities';

const NAMESPACE = '[Draft Current]';

const getDraftTable = createAction(
  `${NAMESPACE} Get Draft Lottery`,
  props<{ season: number }>()
);

const getDraftTableSuccess = createAction(
  `${NAMESPACE} Get Draft Lottery Success`,
  props<{ draftTable: DraftTableDto[] }>()
);

const error = createAction(`${NAMESPACE} Error`);

export const DraftCurrentActions = {
  getDraftTable,
  getDraftTableSuccess,
  error,
};
