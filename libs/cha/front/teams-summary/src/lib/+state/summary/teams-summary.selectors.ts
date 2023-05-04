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
          Number(b.salaries.season_2023) - Number(a.salaries.season_2023) //Adjust every year
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
          Number(b.salaries.season_2023) - Number(a.salaries.season_2023) //Adjust every year
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
      .sort((a, b) => Number(b.ratings?.points) - Number(a.ratings?.points))
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
      .sort((a, b) => Number(b.ratings?.points) - Number(a.ratings?.points))
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
      .sort((a, b) => Number(b.ratings?.points) - Number(a.ratings?.points))
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
      .sort((a, b) => Number(b.ratings?.points) - Number(a.ratings?.points))
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
      .sort((a, b) => Number(b.ratings?.points) - Number(a.ratings?.points))
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
          Number(b.salaries.season_2023) - Number(a.salaries.season_2023) //Adjust every year
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
      .sort((a, b) => Number(b.ratings?.wins) - Number(a.ratings?.wins))
);

const selectGoalieSalariesSortedByNhlStats = createSelector(
  selectGoalieSalaries,
  (playerSalariesRating: SalariesAndRatingsDto[]) =>
    playerSalariesRating
      .filter(
        (playerSalaries: SalariesAndRatingsDto) =>
          playerSalaries.player_id.primary_position === 'G'
      )
      .sort((a, b) => Number(b.nhlStats?.wins) - Number(a.nhlStats?.wins))
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
          (b.nextNhlStats?.wins != null ? b.nextNhlStats?.wins : -Infinity) -
          (a.nextNhlStats?.wins != null ? a.nextNhlStats?.wins : -Infinity)
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
  // Adjust Every Season
  salaries.forEach((salary: SalariesAndRatingsDto) => {
    if (
      salary.salaries.season_2023 &&
      !isNaN(Number(salary.salaries.season_2023)) &&
      !salary.player_id.is_protected
    ) {
      total += Number(salary.salaries.season_2023);
    }
  });

  return total;
}

function getNextTotal(salaries: SalariesAndRatingsDto[]) {
  let total = 0;
  // Adjust Every Season
  salaries.forEach((salary: SalariesAndRatingsDto) => {
    if (
      salary.salaries.season_2024 &&
      !isNaN(Number(salary.salaries.season_2024)) &&
      !salary.player_id.is_protected
    ) {
      total += Number(salary.salaries.season_2024);
    }
  });

  return total;
}
