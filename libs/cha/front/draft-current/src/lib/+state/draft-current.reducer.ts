import { DraftTableDto } from '@cha/shared/entities';
import { Action, createReducer, on } from '@ngrx/store';
import { DraftCurrentActions } from './draft-current.actions';

export interface State {
  draftTable: DraftTableDto[];
  loading: boolean;
  loaded: boolean;
}

const initialState: State = {
  draftTable: [],
  loading: false,
  loaded: false,
};

const r = createReducer(
  initialState,

  on(DraftCurrentActions.getDraftTable, (state) => ({
    ...state,
    loading: true,
    loaded: false,
  })),

  on(DraftCurrentActions.getDraftTableSuccess, (state, action) => ({
    ...state,
    draftTable: action.draftTable,
    loading: false,
    loaded: true,
  })),

  on(DraftCurrentActions.error, (state) => initialState)
);

export function reducer(state: State | undefined, action: Action) {
  return r(state, action);
}

export const getDraftTable = (state: State) => state.draftTable;

export const getLoading = (state: State) => state.loading;

export const getLoaded = (state: State) => state.loaded;
