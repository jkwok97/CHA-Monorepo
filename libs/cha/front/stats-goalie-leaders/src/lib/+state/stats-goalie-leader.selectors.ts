import { StatGoalieLeadersDto } from '@cha/shared/entities';
import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as LeagueStatsGoalieReducer from './stats-goalie-leader.reducer';

export const selectState =
  createFeatureSelector<LeagueStatsGoalieReducer.State>('league-stats-goalie');

const selectLoading = createSelector(
  selectState,
  LeagueStatsGoalieReducer.getLoading
);

const selectLoaded = createSelector(
  selectState,
  LeagueStatsGoalieReducer.getLoaded
);

const selectAllLeaders = createSelector(
  selectState,
  LeagueStatsGoalieReducer.getLeaders
);

const selectShotsFacedLeaders = createSelector(
  selectAllLeaders,
  (leaders: StatGoalieLeadersDto | null) => (leaders ? leaders.shotsFaced : [])
);

const selectSavePctLeaders = createSelector(
  selectAllLeaders,
  (leaders: StatGoalieLeadersDto | null) => (leaders ? leaders.savePct : [])
);

const selectShutoutsLeaders = createSelector(
  selectAllLeaders,
  (leaders: StatGoalieLeadersDto | null) => (leaders ? leaders.shutouts : [])
);

const selectGaaLeaders = createSelector(
  selectAllLeaders,
  (leaders: StatGoalieLeadersDto | null) => (leaders ? leaders.gaa : [])
);

const selectWinsLeaders = createSelector(
  selectAllLeaders,
  (leaders: StatGoalieLeadersDto | null) => (leaders ? leaders.wins : [])
);

export const LeagueStatsGoaliesSelectors = {
  selectLoaded,
  selectLoading,
  selectAllLeaders,
  selectShotsFacedLeaders,
  selectSavePctLeaders,
  selectShutoutsLeaders,
  selectGaaLeaders,
  selectWinsLeaders,
};
