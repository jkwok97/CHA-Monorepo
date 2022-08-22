import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as NhlLeadersReducer from './nhl-leaders.reducer';

export const selectState =
  createFeatureSelector<NhlLeadersReducer.State>('nhl-leaders');

const selectLeaders = createSelector(selectState, NhlLeadersReducer.getLeaders);

const selectPointsLeaders = createSelector(
  selectLeaders,
  (leaders) => leaders.points
);

const selectGoalsLeaders = createSelector(
  selectLeaders,
  (leaders) => leaders.goals
);

const selectAssistsLeaders = createSelector(
  selectLeaders,
  (leaders) => leaders.assists
);

const selectRookiePointsLeaders = createSelector(
  selectLeaders,
  (leaders) => leaders.rookiePoints
);

const selectRookieGoalsLeaders = createSelector(
  selectLeaders,
  (leaders) => leaders.rookieGoals
);

const selectRookieAssistsLeaders = createSelector(
  selectLeaders,
  (leaders) => leaders.rookieAssists
);

const selectGaaLeaders = createSelector(
  selectLeaders,
  (leaders) => leaders.gaa
);

const selectSavePctLeaders = createSelector(
  selectLeaders,
  (leaders) => leaders.savePct
);

const selectShutoutLeaders = createSelector(
  selectLeaders,
  (leaders) => leaders.shutouts
);

const selectDefensePointsLeaders = createSelector(
  selectLeaders,
  (leaders) => leaders.defensePoints
);

const selectDefenseGoalsLeaders = createSelector(
  selectLeaders,
  (leaders) => leaders.defenseGoals
);

const selectDefenseAssistsLeaders = createSelector(
  selectLeaders,
  (leaders) => leaders.defenseAssists
);

const selectLoading = createSelector(selectState, NhlLeadersReducer.getLoading);

const selectLoaded = createSelector(selectState, NhlLeadersReducer.getLoaded);

export const NhlLeadersSelectors = {
  selectLeaders,
  selectPointsLeaders,
  selectGoalsLeaders,
  selectAssistsLeaders,
  selectRookiePointsLeaders,
  selectRookieGoalsLeaders,
  selectRookieAssistsLeaders,
  selectGaaLeaders,
  selectSavePctLeaders,
  selectShutoutLeaders,
  selectDefensePointsLeaders,
  selectDefenseGoalsLeaders,
  selectDefenseAssistsLeaders,
  selectLoaded,
  selectLoading,
};
