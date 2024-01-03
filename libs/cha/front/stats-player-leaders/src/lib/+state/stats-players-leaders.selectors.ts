import { StatPlayerLeadersDto } from '@cha/shared/entities';
import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as LeagueStatsPlayerReducer from './stats-players-leaders.reducer';

export const selectState =
  createFeatureSelector<LeagueStatsPlayerReducer.State>('league-stats-player');

const selectLoading = createSelector(
  selectState,
  LeagueStatsPlayerReducer.getLoading
);

const selectLoaded = createSelector(
  selectState,
  LeagueStatsPlayerReducer.getLoaded
);

const selectAllLeaders = createSelector(
  selectState,
  LeagueStatsPlayerReducer.getLeaders
);

const selectHitsLeaders = createSelector(
  selectAllLeaders,
  (leaders: StatPlayerLeadersDto | null) => (leaders ? leaders.hits : [])
);

const selectCurrentStreakLeaders = createSelector(
  selectAllLeaders,
  (leaders: StatPlayerLeadersDto | null) => (leaders ? leaders.currStreak : [])
);

const selectLongStreakLeaders = createSelector(
  selectAllLeaders,
  (leaders: StatPlayerLeadersDto | null) => (leaders ? leaders.longStreak : [])
);

const selectBestPlusMinusLeaders = createSelector(
  selectAllLeaders,
  (leaders: StatPlayerLeadersDto | null) =>
    leaders ? leaders.bestPlusMinus : []
);

const selectWorstPlusMinusLeaders = createSelector(
  selectAllLeaders,
  (leaders: StatPlayerLeadersDto | null) =>
    leaders ? leaders.worstPlusMinus : []
);

const selectMinutesLeaders = createSelector(
  selectAllLeaders,
  (leaders: StatPlayerLeadersDto | null) => (leaders ? leaders.minutes : [])
);

const selectPenaltiesLeaders = createSelector(
  selectAllLeaders,
  (leaders: StatPlayerLeadersDto | null) => (leaders ? leaders.penalties : [])
);

const selectShotsLeaders = createSelector(
  selectAllLeaders,
  (leaders: StatPlayerLeadersDto | null) => (leaders ? leaders.shots : [])
);

const selectBlockedShotsLeaders = createSelector(
  selectAllLeaders,
  (leaders: StatPlayerLeadersDto | null) =>
    leaders ? leaders.blockedShots : []
);

const selectShGoalsLeaders = createSelector(
  selectAllLeaders,
  (leaders: StatPlayerLeadersDto | null) => (leaders ? leaders.shGoals : [])
);

const selectPpGoalsLeaders = createSelector(
  selectAllLeaders,
  (leaders: StatPlayerLeadersDto | null) => (leaders ? leaders.ppGoals : [])
);

const selectGwGoalsLeaders = createSelector(
  selectAllLeaders,
  (leaders: StatPlayerLeadersDto | null) => (leaders ? leaders.gwGoals : [])
);

const selectGoalsLeaders = createSelector(
  selectAllLeaders,
  (leaders: StatPlayerLeadersDto | null) => (leaders ? leaders.goals : [])
);

const selectAssistsLeaders = createSelector(
  selectAllLeaders,
  (leaders: StatPlayerLeadersDto | null) => (leaders ? leaders.assists : [])
);

const selectRookiesLeaders = createSelector(
  selectAllLeaders,
  (leaders: StatPlayerLeadersDto | null) => (leaders ? leaders.rookies : [])
);

const selectDefenseLeaders = createSelector(
  selectAllLeaders,
  (leaders: StatPlayerLeadersDto | null) => (leaders ? leaders.defense : [])
);

const selectDefenseGoalLeaders = createSelector(
  selectAllLeaders,
  (leaders: StatPlayerLeadersDto | null) => (leaders ? leaders.defenseGoals : [])
);

const selectPointsLeaders = createSelector(
  selectAllLeaders,
  (leaders: StatPlayerLeadersDto | null) => (leaders ? leaders.points : [])
);

const selectRookieGoalsLeaders = createSelector(
  selectAllLeaders,
  (leaders: StatPlayerLeadersDto | null) => (leaders ? leaders.rookieGoals : [])
);

const selectFaceOffLeaders = createSelector(
  selectAllLeaders,
  (leaders: StatPlayerLeadersDto | null) => (leaders ? leaders.faceoffs : [])
)

const selectShootingLeaders = createSelector(
  selectAllLeaders,
  (leaders: StatPlayerLeadersDto | null) => (leaders ? leaders.shooting : [])
)

const selectCornerLeaders = createSelector(
  selectAllLeaders,
  (leaders: StatPlayerLeadersDto | null) => (leaders ? leaders.corners : [])
)

const selectPassingLeaders = createSelector(
  selectAllLeaders,
  (leaders: StatPlayerLeadersDto | null) => (leaders ? leaders.passing : [])
)

export const LeagueStatsPlayersSelectors = {
  selectLoaded,
  selectLoading,
  selectAllLeaders,
  selectHitsLeaders,
  selectCurrentStreakLeaders,
  selectLongStreakLeaders,
  selectBestPlusMinusLeaders,
  selectMinutesLeaders,
  selectPenaltiesLeaders,
  selectShotsLeaders,
  selectBlockedShotsLeaders,
  selectShGoalsLeaders,
  selectPpGoalsLeaders,
  selectGoalsLeaders,
  selectAssistsLeaders,
  selectRookiesLeaders,
  selectDefenseLeaders,
  selectPointsLeaders,
  selectWorstPlusMinusLeaders,
  selectDefenseGoalLeaders,
  selectGwGoalsLeaders,
  selectRookieGoalsLeaders,
  selectFaceOffLeaders,
  selectShootingLeaders,
  selectCornerLeaders,
  selectPassingLeaders
};
