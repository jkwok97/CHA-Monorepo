import { DraftTableDto } from '@cha/shared/entities';
import { createReducer, on, Action } from '@ngrx/store';
import { DraftMgmtTableActions } from './draft-mgmt-table.actions';

export interface State {
  draftTableItems: DraftTableDto[];
  loading: boolean;
  loaded: boolean;
  saving: boolean;
  saved: boolean;
}

const initialState: State = {
  draftTableItems: [],
  loading: false,
  loaded: false,
  saving: false,
  saved: false,
};

const r = createReducer(
  initialState,

  on(DraftMgmtTableActions.getDraftTable, (state) => ({
    ...state,
    loading: true,
    loaded: false,
  })),

  on(
    DraftMgmtTableActions.editDraftPick,

    (state) => ({
      ...state,
      saving: true,
      saved: false,
    })
  ),

  on(DraftMgmtTableActions.getDraftTableSuccess, (state, action) => ({
    ...state,
    draftTableItems: action.draftTableItems,
    loading: false,
    loaded: true,
  })),

  on(DraftMgmtTableActions.editDraftPickSuccess, (state, action) => ({
    ...state,
    saving: false,
    saved: true,
  })),

  on(DraftMgmtTableActions.error, (state) => initialState)
);

export function reducer(state: State | undefined, action: Action) {
  return r(state, action);
}

export const getDraftTableItems = (state: State) => state.draftTableItems;

export const getLoading = (state: State) => state.loading;

export const getLoaded = (state: State) => state.loaded;

export const getSaving = (state: State) => state.saving;

export const getSaved = (state: State) => state.saved;
