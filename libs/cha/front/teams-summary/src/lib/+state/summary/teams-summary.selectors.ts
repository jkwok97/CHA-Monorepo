import { SalariesAndRatingsDto, UserDto } from '@cha/shared/entities';
import { selectFeatureState, State } from '../index';
import { createSelector } from '@ngrx/store';

import * as TeamsSummaryReducer from './teams-summary.reducer';

const selectState = createSelector(
  selectFeatureState,
  (state: State) => state.summary
);

const selectLoading = createSelector(
  selectState,
  TeamsSummaryReducer.getLoading
);

const selectLoaded = createSelector(selectState, TeamsSummaryReducer.getLoaded);

const selectUser = createSelector(selectState, TeamsSummaryReducer.getUser);

const selectUserId = createSelector(
  selectUser,
  (user: UserDto | undefined) => user?.id
);

const selectTeam = createSelector(selectState, TeamsSummaryReducer.getTeam);

const selectTeamRecordLoading = createSelector(
  selectState,
  TeamsSummaryReducer.getTeamRecordLoading
);

const selectTeamRecordLoaded = createSelector(
  selectState,
  TeamsSummaryReducer.getTeamRecordLoaded
);

const selectTeamRecord = createSelector(
  selectState,
  TeamsSummaryReducer.getTeamRecord
);

const selectPlayerSalaryLoading = createSelector(
  selectState,
  TeamsSummaryReducer.getPlayerSalaryLoading
);

const selectPlayerSalaryLoaded = createSelector(
  selectState,
  TeamsSummaryReducer.getPlayerSalaryLoaded
);

const selectCurrentPlayerStat = createSelector(
  selectState,
  TeamsSummaryReducer.getCurrentPlayerStat
);

const selectCurrentGoalieStat = createSelector(
  selectState,
  TeamsSummaryReducer.getCurrentGoalieStat
);

const selectCurrentNHLStat = createSelector(
  selectState,
  TeamsSummaryReducer.getCurrentNHLStat
);

const selectPlayerSalaries = createSelector(
  selectState,
  TeamsSummaryReducer.getPlayerSalaries
);

const selectStatsLoading = createSelector(
  selectState,
  TeamsSummaryReducer.getStatsLoading
);

const selectForwardSalaries = createSelector(
  selectPlayerSalaries,
  (playerSalaries: SalariesAndRatingsDto[]) =>
    playerSalaries
      .filter(
        (playerSalary: SalariesAndRatingsDto) =>
          playerSalary.player_id.isforward &&
          !playerSalary.player_id.is_protected
      )
      .sort(
        (a, b) =>
          Number(b.salaries.season_2025) - Number(a.salaries.season_2025) // TODO UPDATE EVERY SEASON
      )
      .map((playerSalary: SalariesAndRatingsDto) => ({
        player_id: playerSalary.player_id,
        salaries: playerSalary.salaries,
      }))
);

const selectDefenseSalaries = createSelector(
  selectPlayerSalaries,
  (playerSalaries: SalariesAndRatingsDto[]) =>
    playerSalaries
      .filter(
        (playerSalary: SalariesAndRatingsDto) =>
          playerSalary.player_id.isdefense &&
          !playerSalary.player_id.is_protected
      )
      .sort(
        (a, b) =>
          Number(b.salaries.season_2025) - Number(a.salaries.season_2025) // TODO UPDATE EVERY SEASON
      )
      .map((playerSalary: SalariesAndRatingsDto) => ({
        player_id: playerSalary.player_id,
        salaries: playerSalary.salaries,
      }))
);

const selectCenterSalariesByRating = createSelector(
  selectPlayerSalaries,
  (playerSalariesRating: SalariesAndRatingsDto[]) =>
    playerSalariesRating
      .filter(
        (playerSalaries: SalariesAndRatingsDto) =>
          playerSalaries.player_id.primary_position === 'C'
      )
      .sort(
        (a, b) =>
          Number(b.ratings?.points != null ? b.ratings.points : -Infinity) -
          Number(a.ratings?.points != null ? a.ratings.points : -Infinity)
      )
);

const selectCenterSalariesByNhlStats = createSelector(
  selectPlayerSalaries,
  (playerSalariesRating: SalariesAndRatingsDto[]) =>
    playerSalariesRating
      .filter(
        (playerSalaries: SalariesAndRatingsDto) =>
          playerSalaries.player_id.primary_position === 'C'
      )
      .sort(
        (a, b) =>
          (b.nhlStats?.points != null ? b.nhlStats?.points : -Infinity) -
          (a.nhlStats?.points != null ? a.nhlStats?.points : -Infinity)
      )
);

const selectCenterSalariesByFutureNhlStats = createSelector(
  selectPlayerSalaries,
  (playerSalariesRating: SalariesAndRatingsDto[]) =>
    playerSalariesRating
      .filter(
        (playerSalaries: SalariesAndRatingsDto) =>
          playerSalaries.player_id.primary_position === 'C'
      )
      .sort(
        (a, b) =>
          (b.nextNhlStats?.points != null
            ? b.nextNhlStats?.points
            : -Infinity) -
          (a.nextNhlStats?.points != null ? a.nextNhlStats?.points : -Infinity)
      )
);

const selectLeftWingSalariesByRating = createSelector(
  selectPlayerSalaries,
  (playerSalariesRating: SalariesAndRatingsDto[]) =>
    playerSalariesRating
      .filter(
        (playerSalaries: SalariesAndRatingsDto) =>
          playerSalaries.player_id.primary_position === 'LW'
      )
      .sort(
        (a, b) =>
          Number(b.ratings?.points != null ? b.ratings.points : -Infinity) -
          Number(a.ratings?.points != null ? a.ratings.points : -Infinity)
      )
);

const selectLeftWingSalariesByNhlStats = createSelector(
  selectPlayerSalaries,
  (playerSalariesRating: SalariesAndRatingsDto[]) =>
    playerSalariesRating
      .filter(
        (playerSalaries: SalariesAndRatingsDto) =>
          playerSalaries.player_id.primary_position === 'LW'
      )
      .sort(
        (a, b) =>
          (b.nhlStats?.points != null ? b.nhlStats?.points : -Infinity) -
          (a.nhlStats?.points != null ? a.nhlStats?.points : -Infinity)
      )
);

const selectLeftWingSalariesByFutureNhlStats = createSelector(
  selectPlayerSalaries,
  (playerSalariesRating: SalariesAndRatingsDto[]) =>
    playerSalariesRating
      .filter(
        (playerSalaries: SalariesAndRatingsDto) =>
          playerSalaries.player_id.primary_position === 'LW'
      )
      .sort(
        (a, b) =>
          (b.nextNhlStats?.points != null
            ? b.nextNhlStats?.points
            : -Infinity) -
          (a.nextNhlStats?.points != null ? a.nextNhlStats?.points : -Infinity)
      )
);

const selectRightWingSalariesByRating = createSelector(
  selectPlayerSalaries,
  (playerSalariesRating: SalariesAndRatingsDto[]) =>
    playerSalariesRating
      .filter(
        (playerSalaries: SalariesAndRatingsDto) =>
          playerSalaries.player_id.primary_position === 'RW'
      )
      .sort(
        (a, b) =>
          Number(b.ratings?.points != null ? b.ratings.points : -Infinity) -
          Number(a.ratings?.points != null ? a.ratings.points : -Infinity)
      )
);

const selectRightWingSalariesByNhlStats = createSelector(
  selectPlayerSalaries,
  (playerSalariesRating: SalariesAndRatingsDto[]) =>
    playerSalariesRating
      .filter(
        (playerSalaries: SalariesAndRatingsDto) =>
          playerSalaries.player_id.primary_position === 'RW'
      )
      .sort(
        (a, b) =>
          (b.nhlStats?.points != null ? b.nhlStats?.points : -Infinity) -
          (a.nhlStats?.points != null ? a.nhlStats?.points : -Infinity)
      )
);

const selectRightWingSalariesByFutureNhlStats = createSelector(
  selectPlayerSalaries,
  (playerSalariesRating: SalariesAndRatingsDto[]) =>
    playerSalariesRating
      .filter(
        (playerSalaries: SalariesAndRatingsDto) =>
          playerSalaries.player_id.primary_position === 'RW'
      )
      .sort(
        (a, b) =>
          (b.nextNhlStats?.points != null
            ? b.nextNhlStats?.points
            : -Infinity) -
          (a.nextNhlStats?.points != null ? a.nextNhlStats?.points : -Infinity)
      )
);

const selectLeftDefenseSalariesByRating = createSelector(
  selectPlayerSalaries,
  (playerSalariesRating: SalariesAndRatingsDto[]) =>
    playerSalariesRating
      .filter(
        (playerSalaries: SalariesAndRatingsDto) =>
          playerSalaries.player_id.primary_position === 'LD'
      )
      .sort(
        (a, b) =>
          Number(b.ratings?.points != null ? b.ratings.points : -Infinity) -
          Number(a.ratings?.points != null ? a.ratings.points : -Infinity)
      )
);

const selectLeftDefenseSalariesByNhlStats = createSelector(
  selectPlayerSalaries,
  (playerSalariesRating: SalariesAndRatingsDto[]) =>
    playerSalariesRating
      .filter(
        (playerSalaries: SalariesAndRatingsDto) =>
          playerSalaries.player_id.primary_position === 'LD'
      )
      .sort(
        (a, b) =>
          (b.nhlStats?.points != null ? b.nhlStats?.points : -Infinity) -
          (a.nhlStats?.points != null ? a.nhlStats?.points : -Infinity)
      )
);

const selectLeftDefenseSalariesByFutureNhlStats = createSelector(
  selectPlayerSalaries,
  (playerSalariesRating: SalariesAndRatingsDto[]) =>
    playerSalariesRating
      .filter(
        (playerSalaries: SalariesAndRatingsDto) =>
          playerSalaries.player_id.primary_position === 'LD'
      )
      .sort(
        (a, b) =>
          (b.nextNhlStats?.points != null
            ? b.nextNhlStats?.points
            : -Infinity) -
          (a.nextNhlStats?.points != null ? a.nextNhlStats?.points : -Infinity)
      )
);

const selectRightDefenseSalariesByRating = createSelector(
  selectPlayerSalaries,
  (playerSalariesRating: SalariesAndRatingsDto[]) =>
    playerSalariesRating
      .filter(
        (playerSalaries: SalariesAndRatingsDto) =>
          playerSalaries.player_id.primary_position === 'RD'
      )
      .sort(
        (a, b) =>
          Number(b.ratings?.points != null ? b.ratings.points : -Infinity) -
          Number(a.ratings?.points != null ? a.ratings.points : -Infinity)
      )
);

const selectRightDefenseSalariesByNhlStats = createSelector(
  selectPlayerSalaries,
  (playerSalariesRating: SalariesAndRatingsDto[]) =>
    playerSalariesRating
      .filter(
        (playerSalaries: SalariesAndRatingsDto) =>
          playerSalaries.player_id.primary_position === 'RD'
      )
      .sort(
        (a, b) =>
          (b.nhlStats?.points != null ? b.nhlStats?.points : -Infinity) -
          (a.nhlStats?.points != null ? a.nhlStats?.points : -Infinity)
      )
);

const selectRightDefenseSalariesByFutureNhlStats = createSelector(
  selectPlayerSalaries,
  (playerSalariesRating: SalariesAndRatingsDto[]) =>
    playerSalariesRating
      .filter(
        (playerSalaries: SalariesAndRatingsDto) =>
          playerSalaries.player_id.primary_position === 'RD'
      )
      .sort(
        (a, b) =>
          (b.nextNhlStats?.points != null
            ? b.nextNhlStats?.points
            : -Infinity) -
          (a.nextNhlStats?.points != null ? a.nextNhlStats?.points : -Infinity)
      )
);

const selectGoaliesSalaryLoaded = createSelector(
  selectState,
  TeamsSummaryReducer.getGoalieSalaryLoaded
);

const selectGoalieSalaries = createSelector(
  selectState,
  TeamsSummaryReducer.getGoalieSalaries
);

const selectGoalieSalariesFiltered = createSelector(
  selectGoalieSalaries,
  (goalieSalaries: SalariesAndRatingsDto[]) =>
    goalieSalaries
      .filter(
        (playerSalary: SalariesAndRatingsDto) =>
          playerSalary.player_id.isgoalie &&
          !playerSalary.player_id.is_protected
      )
      .sort(
        (a, b) =>
          Number(b.salaries.season_2025) - Number(a.salaries.season_2025) // TODO UPDATE EVERY SEASON
      )
      .map((goalieSalary: SalariesAndRatingsDto) => ({
        player_id: goalieSalary.player_id,
        salaries: goalieSalary.salaries,
      }))
);

const selectGoalieSalariesSortedByRating = createSelector(
  selectGoalieSalaries,
  (playerSalariesRating: SalariesAndRatingsDto[]) =>
    playerSalariesRating
      .filter(
        (playerSalaries: SalariesAndRatingsDto) =>
          playerSalaries.player_id.primary_position === 'G'
      )
      .sort(
        (a, b) =>
          (Number(b.ratings?.wins) != null
            ? Number(b.ratings?.wins)
            : -Infinity) -
          (Number(a.ratings?.wins) != null
            ? Number(a.ratings?.wins)
            : -Infinity)
      )
);

const selectGoalieSalariesSortedByNhlStats = createSelector(
  selectGoalieSalaries,
  (playerSalariesRating: SalariesAndRatingsDto[]) =>
    playerSalariesRating
      .filter(
        (playerSalaries: SalariesAndRatingsDto) =>
          playerSalaries.player_id.primary_position === 'G'
      )
      .sort(
        (a, b) =>
          (Number(b.nhlStats?.wins) != null
            ? Number(b.nhlStats?.wins)
            : -Infinity) -
          (Number(a.nhlStats?.wins) != null
            ? Number(a.nhlStats?.wins)
            : -Infinity)
      )
);

const selectGoalieSalariesSortedByFutureNhlStats = createSelector(
  selectGoalieSalaries,
  (playerSalariesRating: SalariesAndRatingsDto[]) =>
    playerSalariesRating
      .filter(
        (playerSalaries: SalariesAndRatingsDto) =>
          playerSalaries.player_id.primary_position === 'G'
      )
      .sort(
        (a, b) =>
          (Number(b.nextNhlStats?.wins) != null
            ? Number(b.nextNhlStats?.wins)
            : -Infinity) -
          (Number(a.nextNhlStats?.wins) != null
            ? Number(a.nextNhlStats?.wins)
            : -Infinity)
      )
);

const selectTotal = createSelector(
  selectPlayerSalaries,
  selectGoalieSalaries,
  (
    playerSalaries: SalariesAndRatingsDto[],
    goalieSalaries: SalariesAndRatingsDto[]
  ) => {
    const playerTotals = getCurrentTotal(playerSalaries);
    const goalieTotals = getCurrentTotal(goalieSalaries);
    return playerTotals + goalieTotals;
  }
);

const selectNextTotal = createSelector(
  selectPlayerSalaries,
  selectGoalieSalaries,
  (
    playerSalaries: SalariesAndRatingsDto[],
    goalieSalaries: SalariesAndRatingsDto[]
  ) => {
    const playerTotals = getNextTotal(playerSalaries);
    const goalieTotals = getNextTotal(goalieSalaries);
    return playerTotals + goalieTotals;
  }
);

const selectPlayersCount = createSelector(
  selectPlayerSalaries,
  selectGoalieSalaries,
  (
    playerSalaries: SalariesAndRatingsDto[],
    goalieSalaries: SalariesAndRatingsDto[]
  ) =>
    playerSalaries.filter(
      (player: SalariesAndRatingsDto) => !player.player_id.is_protected
    ).length +
    goalieSalaries.filter(
      (goalie: SalariesAndRatingsDto) => !goalie.player_id.is_protected
    ).length
);

const selectProtectedPlayerCount = createSelector(
  selectPlayerSalaries,
  selectGoalieSalaries,
  (
    playerSalaries: SalariesAndRatingsDto[],
    goalieSalaries: SalariesAndRatingsDto[]
  ) =>
    playerSalaries.filter(
      (player: SalariesAndRatingsDto) => player.player_id.is_protected
    ).length +
    goalieSalaries.filter(
      (goalie: SalariesAndRatingsDto) => goalie.player_id.is_protected
    ).length
);

export const TeamsSummarySelectors = {
  selectLoaded,
  selectLoading,
  selectUser,
  selectUserId,
  selectTeam,
  selectTeamRecordLoading,
  selectTeamRecordLoaded,
  selectTeamRecord,
  selectLeftWingSalariesByRating,
  selectRightWingSalariesByRating,
  selectCenterSalariesByRating,
  selectLeftDefenseSalariesByRating,
  selectRightDefenseSalariesByRating,
  selectGoalieSalariesSortedByRating,
  selectLeftWingSalariesByNhlStats,
  selectRightWingSalariesByNhlStats,
  selectCenterSalariesByNhlStats,
  selectLeftDefenseSalariesByNhlStats,
  selectRightDefenseSalariesByNhlStats,
  selectGoalieSalariesSortedByNhlStats,
  selectGoalieSalaries,
  selectTotal,
  selectNextTotal,
  selectPlayersCount,
  selectProtectedPlayerCount,
  selectGoaliesSalaryLoaded,
  selectPlayerSalaryLoaded,
  selectCurrentPlayerStat,
  selectCurrentGoalieStat,
  selectCurrentNHLStat,
  selectStatsLoading,
  selectPlayerSalaryLoading,
  selectForwardSalaries,
  selectDefenseSalaries,
  selectGoalieSalariesFiltered,
  selectCenterSalariesByFutureNhlStats,
  selectLeftWingSalariesByFutureNhlStats,
  selectRightWingSalariesByFutureNhlStats,
  selectLeftDefenseSalariesByFutureNhlStats,
  selectRightDefenseSalariesByFutureNhlStats,
  selectGoalieSalariesSortedByFutureNhlStats,
};

function getCurrentTotal(salaries: SalariesAndRatingsDto[]) {
  let total = 0;

  salaries.forEach((salary: SalariesAndRatingsDto) => {
    if (
      salary.salaries.season_2025 && // TODO UPDATE EVERY SEASON
      !isNaN(Number(salary.salaries.season_2025)) && // TODO UPDATE EVERY SEASON
      !salary.player_id.is_protected
    ) {
      total += Number(salary.salaries.season_2025); // TODO UPDATE EVERY SEASON
    }
  });

  return total;
}

function getNextTotal(salaries: SalariesAndRatingsDto[]) {
  let total = 0;

  salaries.forEach((salary: SalariesAndRatingsDto) => {
    if (
      salary.salaries.season_2026 && // TODO UPDATE EVERY SEASON
      !isNaN(Number(salary.salaries.season_2026)) && // TODO UPDATE EVERY SEASON
      !salary.player_id.is_protected
    ) {
      total += Number(salary.salaries.season_2026); // TODO UPDATE EVERY SEASON
    }
  });

  return total;
}
