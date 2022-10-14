import { GoalieRatingDto, PlayerRatingDto } from '@cha/shared/entities';
import { createReducer, on, Action } from '@ngrx/store';
import { PlayerMgmtRatingsActions } from './player-mgmt-ratings.actions';

export interface State {
  players: PlayerRatingDto[];
  player: PlayerRatingDto | null;
  goalies: GoalieRatingDto[];
  goalie: GoalieRatingDto | null;
  loading: boolean;
  playersLoaded: boolean;
  goaliesLoaded: boolean;
  saving: boolean;
  saved: boolean;
}

const initialState: State = {
  players: [],
  player: null,
  goalies: [],
  goalie: null,
  loading: false,
  playersLoaded: false,
  goaliesLoaded: false,
  saving: false,
  saved: false,
};

const r = createReducer(
  initialState,

  on(PlayerMgmtRatingsActions.getPlayers, (state) => ({
    ...state,
    loading: true,

    playersLoaded: false,
  })),

  on(PlayerMgmtRatingsActions.getGoalies, (state) => ({
    ...state,
    loading: true,
    goaliesLoaded: false,
  })),

  on(
    PlayerMgmtRatingsActions.editPlayer,
    PlayerMgmtRatingsActions.editGoalie,
    (state) => ({
      ...state,
      saving: true,
      saved: false,
    })
  ),

  on(PlayerMgmtRatingsActions.getPlayersSuccess, (state, action) => ({
    ...state,
    players: action.players,
    loading: false,
    playersLoaded: true,
  })),

  on(PlayerMgmtRatingsActions.getGoaliesSuccess, (state, action) => ({
    ...state,
    goalies: action.goalies,
    loading: false,
    goaliesLoaded: true,
  })),

  on(
    PlayerMgmtRatingsActions.editPlayersuccess,
    PlayerMgmtRatingsActions.editGoaliesuccess,
    (state, action) => ({
      ...state,
      saving: false,
      saved: true,
    })
  ),

  on(PlayerMgmtRatingsActions.error, (state) => initialState)
);

export function reducer(state: State | undefined, action: Action) {
  return r(state, action);
}

export const getPlayers = (state: State) => state.players;

export const getPlayer = (state: State) => state.player;

export const getGoalies = (state: State) => state.goalies;

export const getGoalie = (state: State) => state.goalie;

export const getLoading = (state: State) => state.loading;

export const getPlayersLoaded = (state: State) => state.playersLoaded;

export const getGoaliesLoaded = (state: State) => state.goaliesLoaded;

export const getSaving = (state: State) => state.saving;

export const getSaved = (state: State) => state.saved;
