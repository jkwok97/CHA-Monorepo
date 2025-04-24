import { GamesDto } from '@cha/shared/entities';
import { createReducer, on, Action } from '@ngrx/store';
import { GamesCurrentActions } from './games-current.actions';

export interface State {
  games: GamesDto[];
  game: File | null;
  loading: boolean;
  loaded: boolean;
  gameLoading: boolean;
}

const initialState: State = {
  games: [],
  game: null,
  loading: false,
  loaded: false,
  gameLoading: false,
};

const r = createReducer(
  initialState,

  on(
    GamesCurrentActions.getCurrent,
    GamesCurrentActions.getNext,
    GamesCurrentActions.getPrevious,
    (state) => ({
      ...state,
      loading: true,
      loaded: false,
    })
  ),

  on(
    GamesCurrentActions.getCurrentSuccess,
    GamesCurrentActions.getNextSuccess,
    GamesCurrentActions.getPreviousSuccess,
    (state, action) => ({
      ...state,
      games: action.games,
      loading: false,
      loaded: true,
    })
  ),

  on(GamesCurrentActions.getBoxScore, (state, action) => ({
    ...state,
    gameLoading: true,
  })),

  on(GamesCurrentActions.getBoxScoreSuccess, (state, action) => ({
    ...state,
    game: action.game,
    gameLoading: false,
  })),

  on(GamesCurrentActions.getBoxScoreError, (state, action) => ({
    ...state,
    game: null,
    gameLoading: false,
  })),

  on(GamesCurrentActions.resetBoxScore, (state, action) => ({
    ...state,
    game: null,
  })),

  on(GamesCurrentActions.error, (state) => initialState)
);

export function reducer(state: State | undefined, action: Action) {
  return r(state, action);
}

export const getGames = (state: State) => state.games;

export const getLoading = (state: State) => state.loading;

export const getLoaded = (state: State) => state.loaded;

export const getGameLoading = (state: State) => state.gameLoading;

export const getGame = (state: State) => state.game;
