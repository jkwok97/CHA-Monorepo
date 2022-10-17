import { StatPlayerAllDto } from '@cha/shared/entities';
import { createReducer, on, Action } from '@ngrx/store';
import { PlayerMgmtPlayerCurrentActions } from './player-mgmt-player-current.actions';

export interface State {
  players: StatPlayerAllDto[];
  player: StatPlayerAllDto | null;
  loading: boolean;
  loaded: boolean;
  saving: boolean;
  saved: boolean;
}

const initialState: State = {
  players: [],
  player: null,
  loading: false,
  loaded: false,
  saving: false,
  saved: false,
};

const r = createReducer(
  initialState,

  on(PlayerMgmtPlayerCurrentActions.getPlayers, (state) => ({
    ...state,
    loading: true,
    loaded: false,
  })),

  on(
    PlayerMgmtPlayerCurrentActions.addPlayer,
    PlayerMgmtPlayerCurrentActions.editPlayer,
    PlayerMgmtPlayerCurrentActions.deletePlayer,
    (state) => ({
      ...state,
      saving: true,
      saved: false,
    })
  ),

  on(PlayerMgmtPlayerCurrentActions.getPlayersSuccess, (state, action) => ({
    ...state,
    players: action.players,
    loading: false,
    loaded: true,
  })),

  on(
    PlayerMgmtPlayerCurrentActions.editPlayersuccess,
    PlayerMgmtPlayerCurrentActions.deletePlayersuccess,
    (state, action) => ({
      ...state,
      saving: false,
      saved: true,
    })
  ),

  on(PlayerMgmtPlayerCurrentActions.addPlayerSuccess, (state, action) => ({
    ...state,
    player: action.player,
    saving: false,
    saved: true,
  })),

  on(PlayerMgmtPlayerCurrentActions.error, (state) => initialState)
);

export function reducer(state: State | undefined, action: Action) {
  return r(state, action);
}

export const getPlayers = (state: State) => state.players;

export const getPlayer = (state: State) => state.player;

export const getLoading = (state: State) => state.loading;

export const getLoaded = (state: State) => state.loaded;

export const getSaving = (state: State) => state.saving;

export const getSaved = (state: State) => state.saved;
