import { DraftPickDto, PlayerDto, TeamDto } from '@cha/shared/entities';
import { createReducer, on, Action } from '@ngrx/store';
import { DraftMgmtEntryActions } from './draft-mgmt-entry.actions';

export interface State {
  picks: DraftPickDto[];
  players: PlayerDto[];
  teams: TeamDto[];
  loading: boolean;
  loaded: boolean;
  saving: boolean;
  saved: boolean;
}

const initialState: State = {
  picks: [],
  players: [],
  teams: [],
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

  on(DraftMgmtEntryActions.getPlayersSuccess, (state, action) => ({
    ...state,
    players: action.players,
  })),

  on(DraftMgmtEntryActions.getTeamsSuccess, (state, action) => ({
    ...state,
    teams: action.teams,
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

export const getPlayers = (state: State) => state.players;

export const getTeams = (state: State) => state.teams;

export const getLoading = (state: State) => state.loading;

export const getLoaded = (state: State) => state.loaded;

export const getSaving = (state: State) => state.saving;

export const getSaved = (state: State) => state.saved;
