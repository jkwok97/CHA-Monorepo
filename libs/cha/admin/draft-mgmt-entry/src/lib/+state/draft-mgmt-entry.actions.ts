import {
  CreateDraftPickDto,
  DraftPickDto,
  PlayerDto,
  TeamDto,
} from '@cha/shared/entities';
import { createAction, props } from '@ngrx/store';

const NAMESPACE = '[DRAFT MGMT ENTRY]';

const getDraftPicks = createAction(`${NAMESPACE} Get Draft Picks`);

const getDraftPicksSuccess = createAction(
  `${NAMESPACE} Get Draft Picks Success`,
  props<{ picks: DraftPickDto[] }>()
);

const getPlayers = createAction(`${NAMESPACE} Get Players`);

const getPlayersSuccess = createAction(
  `${NAMESPACE} Get Players Success`,
  props<{ players: PlayerDto[] }>()
);

const getTeams = createAction(`${NAMESPACE} Get Teams`);

const getTeamsSuccess = createAction(
  `${NAMESPACE} Get Teams Success`,
  props<{ teams: TeamDto[] }>()
);

const addDraftPick = createAction(
  `${NAMESPACE} Add Draft Pick`,
  props<{ pick: CreateDraftPickDto }>()
);

const addDraftPickSuccess = createAction(
  `${NAMESPACE} Add Draft Pick Success`,
  props<{ pick: DraftPickDto }>()
);

const editDraftPick = createAction(
  `${NAMESPACE} Edit Draft Pick`,
  props<{ pick: DraftPickDto }>()
);

const editDraftPickSuccess = createAction(
  `${NAMESPACE} Edit Draft Pick Success`,
  props<{ pick: DraftPickDto }>()
);

const deleteDraftPick = createAction(
  `${NAMESPACE} Delete Draft Pick`,
  props<{ pickId: number }>()
);

const deleteDraftPickSuccess = createAction(
  `${NAMESPACE} Delete Draft Pick Success`
);

const error = createAction(`${NAMESPACE} Error`);

export const DraftMgmtEntryActions = {
  getDraftPicks,
  getDraftPicksSuccess,
  addDraftPick,
  addDraftPickSuccess,
  editDraftPick,
  editDraftPickSuccess,
  deleteDraftPick,
  deleteDraftPickSuccess,
  getPlayers,
  getPlayersSuccess,
  getTeams,
  getTeamsSuccess,
  error,
};
