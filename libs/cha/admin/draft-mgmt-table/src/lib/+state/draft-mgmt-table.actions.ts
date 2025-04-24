import { DraftTableDto } from '@cha/shared/entities';
import { createAction, props } from '@ngrx/store';

const NAMESPACE = '[DRAFT MGMT TABLE]';

const getDraftTable = createAction(`${NAMESPACE} Get Draft Table`);

const getDraftTableSuccess = createAction(
  `${NAMESPACE} Get Draft Table Success`,
  props<{ draftTableItems: DraftTableDto[] }>()
);

const editDraftPick = createAction(
  `${NAMESPACE} Edit Draft Pick`,
  props<{ draftTableItem: DraftTableDto }>()
);

const editDraftPickSuccess = createAction(
  `${NAMESPACE} Edit Draft Pick Success`,
  props<{ draftTableItem: DraftTableDto }>()
);

const error = createAction(`${NAMESPACE} Error`);

export const DraftMgmtTableActions = {
  getDraftTable,
  getDraftTableSuccess,
  editDraftPick,
  editDraftPickSuccess,
  error,
};
