import { DraftTableDto, TeamDto } from '@cha/shared/entities';
import { Action, createReducer, on } from '@ngrx/store';
import { DraftCurrentActions } from './draft-current.actions';

export interface State {
  draftTable: DraftTableDto[];
  teams: TeamDto[];
  loading: boolean;
  loaded: boolean;
}

const initialState: State = {
  draftTable: [],
  teams: [],
  loading: false,
  loaded: false,
};

const r = createReducer(
  initialState,

  on(
    DraftCurrentActions.getDraftTable,
    DraftCurrentActions.getNextDraftTable,
    (state) => ({
      ...state,
      loading: true,
      loaded: false,
    })
  ),

  on(
    DraftCurrentActions.getDraftTableSuccess,
    DraftCurrentActions.getNextDraftTableSuccess,
    (state, action) => ({
      ...state,
      draftTable: action.draftTable,
      loading: false,
      loaded: true,
    })
  ),

  on(DraftCurrentActions.getAllTeamsSuccess, (state, action) => ({
    ...state,
    teams: action.teams,
  })),

  on(DraftCurrentActions.error, () => initialState)
);

export function reducer(state: State | undefined, action: Action) {
  return r(state, action);
}

export const getDraftTable = (state: State): DraftTableDto[] =>
  state.draftTable;

export const getLoading = (state: State): boolean => state.loading;

export const getLoaded = (state: State): boolean => state.loaded;

export const getAllTeams = (state: State): TeamDto[] => state.teams;
