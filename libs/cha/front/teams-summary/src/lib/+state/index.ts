import { createFeatureSelector, ActionReducerMap } from '@ngrx/store';
import * as teamsSummaryAwardsReducer from './awards/awards.reducer';
import * as teamsSummaryGoalieStatsReducer from './goalie-stats/goalie-stats.reducer';
import * as teamsSummaryPlayerStatsReducer from './player-stats/player-stats.reducer';
import * as teamsSummaryReducer from './summary/teams-summary.reducer';
import * as teamsSummaryTeamStatsReducer from './team-stats/team-stats.reducer';

export const selectFeatureState = createFeatureSelector<State>('teams-summary');

export const reducer: ActionReducerMap<State> = {
  awards: teamsSummaryAwardsReducer.reducer,
  goalieStats: teamsSummaryGoalieStatsReducer.reducer,
  playerStats: teamsSummaryPlayerStatsReducer.reducer,
  summary: teamsSummaryReducer.reducer,
  teamStats: teamsSummaryTeamStatsReducer.reducer,
};

export interface State {
  awards: teamsSummaryAwardsReducer.State;
  goalieStats: teamsSummaryGoalieStatsReducer.State;
  playerStats: teamsSummaryPlayerStatsReducer.State;
  summary: teamsSummaryReducer.State;
  teamStats: teamsSummaryTeamStatsReducer.State;
}
