import { DraftPickDto } from '@cha/shared/entities';
import { Action, createReducer, on } from '@ngrx/store';
import { DraftSummaryActions } from './draft-summary.actions';

export interface State {
  draftPicks: DraftPickDto[];
  loading: boolean;
  loaded: boolean;
}

const initialState: State = {
  draftPicks: [],
  loading: false,
  loaded: false,
};

const r = createReducer(
  initialState,

  on(DraftSummaryActions.getDraftPicks, (state) => ({
    ...state,
    loading: true,
    loaded: false,
  })),

  on(DraftSummaryActions.getDraftPicksSuccess, (state, action) => ({
    ...state,
    draftPicks: action.draftPicks,
    loading: false,
    loaded: true,
  })),

  on(DraftSummaryActions.error, (state) => initialState)
);

export function reducer(state: State | undefined, action: Action) {
  return r(state, action);
}

export const getDraftPicks = (state: State) => state.draftPicks;

export const getLoading = (state: State) => state.loading;

export const getLoaded = (state: State) => state.loaded;
