import { StatPlayerLeadersDto } from '@cha/shared/entities';
import { Action, createReducer, on } from '@ngrx/store';
import { LeagueStatsPlayersActions } from './stats-players-leaders.actions';

export interface State {
  leaders: StatPlayerLeadersDto | null;
  loading: boolean;
  loaded: boolean;
}

const initialState: State = {
  leaders: null,
  loading: false,
  loaded: false,
};

const r = createReducer(
  initialState,

  on(LeagueStatsPlayersActions.getLeaders, (state) => ({
    ...state,
    loading: true,
    loaded: false,
  })),

  on(LeagueStatsPlayersActions.getLeadersSuccess, (state, action) => ({
    ...state,
    leaders: action.leaders,
    loading: false,
    loaded: true,
  })),

  on(LeagueStatsPlayersActions.error, (state) => initialState)
);

export function reducer(state: State | undefined, action: Action) {
  return r(state, action);
}

export const getLeaders = (state: State) => state.leaders;

export const getLoading = (state: State) => state.loading;

export const getLoaded = (state: State) => state.loaded;
