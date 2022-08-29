import { StatGoalieLeadersDto } from '@cha/shared/entities';
import { Action, createReducer, on } from '@ngrx/store';
import { LeagueStatsGoaliesActions } from './stats-goalie-leaders.actions';

export interface State {
  leaders: StatGoalieLeadersDto | null;
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

  on(LeagueStatsGoaliesActions.getLeaders, (state) => ({
    ...state,
    loading: true,
    loaded: false,
  })),

  on(LeagueStatsGoaliesActions.getLeadersSuccess, (state, action) => ({
    ...state,
    leaders: action.leaders,
    loading: false,
    loaded: true,
  })),

  on(LeagueStatsGoaliesActions.error, (state) => initialState)
);

export function reducer(state: State | undefined, action: Action) {
  return r(state, action);
}

export const getLeaders = (state: State) => state.leaders;

export const getLoading = (state: State) => state.loading;

export const getLoaded = (state: State) => state.loaded;
