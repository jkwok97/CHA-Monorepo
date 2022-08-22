import { createAction, props } from '@ngrx/store';

import { DraftPickDto } from '@cha/shared/entities';

const NAMESPACE = '[Draft Summary]';

const getDraftPicks = createAction(`${NAMESPACE} Get Draft Picks`);

const getDraftPicksSuccess = createAction(
  `${NAMESPACE} Get Draft Picks Success`,
  props<{ draftPicks: DraftPickDto[] }>()
);

const error = createAction(`${NAMESPACE} Error`);

export const DraftSummaryActions = {
  getDraftPicks,
  getDraftPicksSuccess,
  error,
};
