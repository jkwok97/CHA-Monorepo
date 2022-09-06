import { GamesDto } from '@cha/shared/entities';
import { createReducer, on, Action } from '@ngrx/store';
import { GamesCurrentActions } from './league-trades.actions';

export interface State {
  games: GamesDto[];
  loading: boolean;
  loaded: boolean;
}

const initialState: State = {
  games: [],
  loading: false,
  loaded: false,
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

  on(GamesCurrentActions.error, (state) => initialState)
);

export function reducer(state: State | undefined, action: Action) {
  return r(state, action);
}

export const getGames = (state: State) => state.games;

export const getLoading = (state: State) => state.loading;

export const getLoaded = (state: State) => state.loaded;
