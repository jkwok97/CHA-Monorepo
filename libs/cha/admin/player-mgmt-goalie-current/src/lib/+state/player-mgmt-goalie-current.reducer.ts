import { StatGoalieAllDto } from '@cha/shared/entities';
import { createReducer, on, Action } from '@ngrx/store';
import { PlayerMgmtGoalieCurrentActions } from './player-mgmt-goalie-current.actions';

export interface State {
  goalies: StatGoalieAllDto[];
  goalie: StatGoalieAllDto | null;
  loading: boolean;
  loaded: boolean;
  saving: boolean;
  saved: boolean;
}

const initialState: State = {
  goalies: [],
  goalie: null,
  loading: false,
  loaded: false,
  saving: false,
  saved: false,
};

const r = createReducer(
  initialState,

  on(PlayerMgmtGoalieCurrentActions.getGoalies, (state) => ({
    ...state,
    loading: true,
    loaded: false,
  })),

  on(
    PlayerMgmtGoalieCurrentActions.editGoalie,
    PlayerMgmtGoalieCurrentActions.deleteGoalie,
    (state) => ({
      ...state,
      saving: true,
      saved: false,
    })
  ),

  on(PlayerMgmtGoalieCurrentActions.getGoaliesSuccess, (state, action) => ({
    ...state,
    goalies: action.goalies,
    loading: false,
    loaded: true,
  })),

  on(
    PlayerMgmtGoalieCurrentActions.editGoaliesuccess,
    PlayerMgmtGoalieCurrentActions.deleteGoaliesuccess,
    (state, action) => ({
      ...state,
      saving: false,
      saved: true,
    })
  ),

  on(PlayerMgmtGoalieCurrentActions.error, (state) => initialState)
);

export function reducer(state: State | undefined, action: Action) {
  return r(state, action);
}

export const getGoalies = (state: State) => state.goalies;

export const getGoalie = (state: State) => state.goalie;

export const getLoading = (state: State) => state.loading;

export const getLoaded = (state: State) => state.loaded;

export const getSaving = (state: State) => state.saving;

export const getSaved = (state: State) => state.saved;
