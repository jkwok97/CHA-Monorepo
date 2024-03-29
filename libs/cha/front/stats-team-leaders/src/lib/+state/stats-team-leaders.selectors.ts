import { statTeamDto } from '@cha/shared/entities';
import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as LeagueStatsTeamReducer from './stats-team-leaders.reducer';

export const selectState =
  createFeatureSelector<LeagueStatsTeamReducer.State>('league-stats-team');

const selectLoading = createSelector(
  selectState,
  LeagueStatsTeamReducer.getLoading
);

const selectLoaded = createSelector(
  selectState,
  LeagueStatsTeamReducer.getLoaded
);

const selectLeagueTeamStats = createSelector(
  selectState,
  LeagueStatsTeamReducer.getLeagueTeamStats
);

const selectLeagueTeamStatsStandings = createSelector(
  selectLeagueTeamStats,
  (teamStats: statTeamDto[]) => sortStandings(teamStats)
);

const selectLeagueTeamStatsWinningStreak = createSelector(
  selectLeagueTeamStats,
  (teamStats: statTeamDto[]) => sortWinningStreak(teamStats)
);

const selectLeagueTeamStatsPenalties = createSelector(
  selectLeagueTeamStats,
  (teamStats: statTeamDto[]) => sortPenalties(teamStats)
);

const selectLeagueTeamStatsGoalDiff = createSelector(
  selectLeagueTeamStats,
  (teamStats: statTeamDto[]) => sortGoalDiff(teamStats)
);

const selectLeagueTeamStatsShotsDiff = createSelector(
  selectLeagueTeamStats,
  (teamStats: statTeamDto[]) => sortShotDiff(teamStats)
);

const selectLeagueTeamStatsFaceoffs = createSelector(
  selectLeagueTeamStats,
  (teamStats: statTeamDto[]) => sortFaceoffs(teamStats)
);
const selectLeagueTeamStatsPassing = createSelector(
  selectLeagueTeamStats,
  (teamStats: statTeamDto[]) => sortPassing(teamStats)
);

const selectLeagueTeamStatsPp = createSelector(
  selectLeagueTeamStats,
  (teamStats: statTeamDto[]) => sortPp(teamStats)
);

const selectLeagueTeamStatsPk = createSelector(
  selectLeagueTeamStats,
  (teamStats: statTeamDto[]) => sortPk(teamStats)
);

export const LeagueStatsTeamSelectors = {
  selectLoaded,
  selectLoading,
  selectLeagueTeamStats,
  selectLeagueTeamStatsStandings,
  selectLeagueTeamStatsWinningStreak,
  selectLeagueTeamStatsPenalties,
  selectLeagueTeamStatsGoalDiff,
  selectLeagueTeamStatsPp,
  selectLeagueTeamStatsPk,
  selectLeagueTeamStatsShotsDiff,
  selectLeagueTeamStatsFaceoffs,
  selectLeagueTeamStatsPassing,
};

function sortStandings(teamStats: statTeamDto[]): statTeamDto[] {
  const data = teamStats.filter(
    (stat: statTeamDto) => Number(stat.games_played) > 0
  );

  const sortedData = data.sort((a, b) => {
    if (Number(b.points) === Number(a.points)) {
      if (Number(b.wins) === Number(a.wins)) {
        if (
          Number(b.goals_for) - Number(b.goals_against) ===
          Number(a.goals_for) - Number(a.goals_against)
        ) {
          return Number(b.goals_for) - Number(a.goals_for);
        } else {
          return (
            Number(b.goals_for) -
            Number(b.goals_against) -
            (Number(a.goals_for) - Number(a.goals_against))
          );
        }
      } else {
        return Number(b.wins) - Number(a.wins);
      }
    } else {
      return Number(b.points) - Number(a.points);
    }
  });

  return sortedData;
}

function sortWinningStreak(teamStats: statTeamDto[]): statTeamDto[] {
  const data = teamStats.filter(
    (stat: statTeamDto) => Number(stat.games_played) > 0
  );
  const sortedData = data.sort(
    (a, b) => Number(b.long_win_streak) - Number(a.long_win_streak)
  );
  return sortedData;
}

function sortPenalties(teamStats: statTeamDto[]): statTeamDto[] {
  const data = teamStats.filter(
    (stat: statTeamDto) => Number(stat.games_played) > 0
  );
  const sortedData = data.sort(
    (a, b) =>
      Number(b.penalty_minutes) / Number(b.games_played) -
      Number(a.penalty_minutes) / Number(a.games_played)
  );
  return sortedData;
}

function sortGoalDiff(teamStats: statTeamDto[]): statTeamDto[] {
  const data = teamStats.filter(
    (stat: statTeamDto) => Number(stat.games_played) > 0
  );
  const sortedData = data.sort(
    (a, b) =>
      Number(b.goals_for) -
      Number(b.goals_against) -
      (Number(a.goals_for) - Number(a.goals_against))
  );
  return sortedData;
}

function sortShotDiff(teamStats: statTeamDto[]): statTeamDto[] {
  const data = teamStats.filter(
    (stat: statTeamDto) => Number(stat.games_played) > 0
  );
  const sortedData = data.sort(
    (a, b) =>
      Number(b.shots_for) -
      Number(b.shots_against) -
      (Number(a.shots_for) - Number(a.shots_against))
  );
  return sortedData;
}

function sortPp(teamStats: statTeamDto[]): statTeamDto[] {
  const data = teamStats.filter(
    (stat: statTeamDto) => Number(stat.games_played) > 0
  );
  const sortedData = data.sort(
    (a, b) =>
      (Number(b.pp_goals) / Number(b.pp_attempts)) * 100 -
      (Number(a.pp_goals) / Number(a.pp_attempts)) * 100
  );
  return sortedData;
}

function sortPk(teamStats: statTeamDto[]): statTeamDto[] {
  const data = teamStats.filter(
    (stat: statTeamDto) => Number(stat.games_played) > 0
  );
  const sortedData = data.sort(
    (a, b) =>
      ((Number(b.pk_attempts) - Number(b.pk_goals)) / Number(b.pk_attempts)) *
        100 -
      ((Number(a.pk_attempts) - Number(a.pk_goals)) / Number(a.pk_attempts)) *
        100
  );
  return sortedData;
}

function sortFaceoffs(teamStats: statTeamDto[]): statTeamDto[] {
  const data = teamStats.filter(
    (stat: statTeamDto) => Number(stat.games_played) > 0
  );
  const sortedData = data.sort(
    (a, b) =>
      ((Number(b.face_off_won) - Number(b.face_off_lost)) /
        (Number(b.face_off_won) + Number(b.face_off_lost))) *
        100 -
      ((Number(a.face_off_won) - Number(a.face_off_lost)) /
        (Number(a.face_off_won) + Number(a.face_off_lost))) *
        100
  );
  return sortedData;
}

function sortPassing(teamStats: statTeamDto[]): statTeamDto[] {
  const data = teamStats.filter(
    (stat: statTeamDto) => Number(stat.games_played) > 0
  );
  const sortedData = data.sort(
    (a, b) =>
      ((Number(b.pass_complete) - Number(b.pass_incomplete)) /
        (Number(b.pass_complete) + Number(b.pass_incomplete))) *
        100 -
      ((Number(a.pass_complete) - Number(a.pass_incomplete)) /
        (Number(a.pass_complete) + Number(a.pass_incomplete))) *
        100
  );
  return sortedData;
}
