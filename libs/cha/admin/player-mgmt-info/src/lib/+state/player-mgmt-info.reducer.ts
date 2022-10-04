import { PlayerDto } from '@cha/shared/entities';
import { createReducer, on, Action } from '@ngrx/store';
import { PlayerMgmtInfoActions } from './player-mgmt-info.actions';

export interface State {
  players: PlayerDto[];
  loading: boolean;
  loaded: boolean;
  saving: boolean;
  saved: boolean;
}

const initialState: State = {
  players: [],
  loading: false,
  loaded: false,
  saving: false,
  saved: false,
};

const r = createReducer(
  initialState,

  on(PlayerMgmtInfoActions.getPlayers, (state) => ({
    ...state,
    loading: true,
    loaded: false,
  })),

  on(
    PlayerMgmtInfoActions.addPlayer,
    PlayerMgmtInfoActions.editPlayer,
    PlayerMgmtInfoActions.deletePlayer,
    (state) => ({
      ...state,
      saving: true,
      saved: false,
    })
  ),

  on(PlayerMgmtInfoActions.getPlayersSuccess, (state, action) => ({
    ...state,
    players: action.players,
    loading: false,
    loaded: true,
  })),

  on(
    PlayerMgmtInfoActions.addPlayerSuccess,
    PlayerMgmtInfoActions.editPlayersuccess,
    PlayerMgmtInfoActions.deletePlayersuccess,
    (state, action) => ({
      ...state,
      saving: false,
      saved: true,
    })
  ),

  on(PlayerMgmtInfoActions.error, (state) => initialState)
);

export function reducer(state: State | undefined, action: Action) {
  return r(state, action);
}

export const getPlayers = (state: State) => state.players;

export const getLoading = (state: State) => state.loading;

export const getLoaded = (state: State) => state.loaded;

export const getSaving = (state: State) => state.saving;

export const getSaved = (state: State) => state.saved;
