import { ScheduleAllDto } from '@cha/shared/entities';
import { createReducer, on, Action } from '@ngrx/store';
import { GamesAllActions } from './games-all.actions';

export interface State {
  schedule: ScheduleAllDto[];
  game: File | null;
  loading: boolean;
  loaded: boolean;
  gameLoading: boolean;
}

const initialState: State = {
  schedule: [],
  game: null,
  loading: false,
  loaded: false,
  gameLoading: false
};

const r = createReducer(
  initialState,

  on(GamesAllActions.getAll, (state) => ({
    ...state,
    loading: true,
    loaded: false,
  })),

  on(GamesAllActions.getAllSuccess, (state, action) => ({
    ...state,
    schedule: action.schedule,
    loading: false,
    loaded: true,
  })),

  on(GamesAllActions.getBoxScore, (state, action) => ({
    ...state,
    gameLoading: true
  })),

  on(GamesAllActions.getBoxScoreSuccess, (state, action) => ({
    ...state,
    game: action.game,
    gameLoading: false
  })),

  on(GamesAllActions.resetBoxScore, (state, action) => ({
    ...state,
    game: null,
  })),

  on(GamesAllActions.error, (state) => initialState)
);

export function reducer(state: State | undefined, action: Action) {
  return r(state, action);
}

export const getSchedule = (state: State) => state.schedule;

export const getGame = (state: State) => state.game;

export const getLoading = (state: State) => state.loading;

export const getLoaded = (state: State) => state.loaded;

export const getGameLoading = (state: State) => state.gameLoading;
