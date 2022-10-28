import { DraftPickDto } from '@cha/shared/entities';
import { createReducer, on, Action } from '@ngrx/store';
import { DraftMgmtEntryActions } from './draft-mgmt-entry.actions';

export interface State {
  picks: DraftPickDto[];
  loading: boolean;
  loaded: boolean;
  saving: boolean;
  saved: boolean;
}

const initialState: State = {
  picks: [],
  loading: false,
  loaded: false,
  saving: false,
  saved: false,
};

const r = createReducer(
  initialState,

  on(DraftMgmtEntryActions.getDraftPicks, (state) => ({
    ...state,
    loading: true,
    loaded: false,
  })),

  on(
    DraftMgmtEntryActions.addDraftPick,
    DraftMgmtEntryActions.editDraftPick,
    DraftMgmtEntryActions.deleteDraftPick,
    (state) => ({
      ...state,
      saving: true,
      saved: false,
    })
  ),

  on(DraftMgmtEntryActions.getDraftPicksSuccess, (state, action) => ({
    ...state,
    picks: action.picks,
    loading: false,
    loaded: true,
  })),

  on(
    DraftMgmtEntryActions.addDraftPickSuccess,
    DraftMgmtEntryActions.editDraftPickSuccess,
    DraftMgmtEntryActions.deleteDraftPickSuccess,
    (state, action) => ({
      ...state,
      saving: false,
      saved: true,
    })
  ),

  on(DraftMgmtEntryActions.error, (state) => initialState)
);

export function reducer(state: State | undefined, action: Action) {
  return r(state, action);
}

export const getPicks = (state: State) => state.picks;

export const getLoading = (state: State) => state.loading;

export const getLoaded = (state: State) => state.loaded;

export const getSaving = (state: State) => state.saving;

export const getSaved = (state: State) => state.saved;
