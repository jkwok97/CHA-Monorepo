import { SalariesAndRatingsDto } from '@cha/shared/entities';
import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as HomeSummaryReducer from './home-summary.reducer';

export const selectState =
  createFeatureSelector<HomeSummaryReducer.State>('home-summary');

const selectTeamRecordLoading = createSelector(
  selectState,
  HomeSummaryReducer.getTeamRecordLoading
);

const selectTeamRecordLoaded = createSelector(
  selectState,
  HomeSummaryReducer.getTeamRecordLoaded
);

const selectTeamRecord = createSelector(
  selectState,
  HomeSummaryReducer.getTeamRecord
);

const selectPlayerSalaryLoaded = createSelector(
  selectState,
  HomeSummaryReducer.getPlayerSalaryLoaded
);

const selectCurrentPlayerStat = createSelector(
  selectState,
  HomeSummaryReducer.getCurrentPlayerStat
);

const selectCurrentGoalieStat = createSelector(
  selectState,
  HomeSummaryReducer.getCurrentGoalieStat
);

const selectCurrentNHLStat = createSelector(
  selectState,
  HomeSummaryReducer.getCurrentNHLStat
);

const selectPlayerSalaries = createSelector(
  selectState,
  HomeSummaryReducer.getPlayerSalaries
);

const selectStatsLoading = createSelector(
  selectState,
  HomeSummaryReducer.getStatsLoading
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

const selectGoaliesSalaryLoaded = createSelector(
  selectState,
  HomeSummaryReducer.getGoalieSalaryLoaded
);

const selectGoalieSalaries = createSelector(
  selectState,
  HomeSummaryReducer.getGoalieSalaries
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

const selectPlayerSalaryLoading = createSelector(
  selectState,
  HomeSummaryReducer.getPlayerSalaryLoading
);

export const HomeSummarySelectors = {
  selectTeamRecordLoading,
  selectTeamRecordLoaded,
  selectTeamRecord,
  selectLeftWingSalariesByRating,
  selectRightWingSalariesByRating,
  selectCenterSalariesByRating,
  selectLeftDefenseSalariesByRating,
  selectRightDefenseSalariesByRating,
  selectLeftWingSalariesByNhlStats,
  selectRightWingSalariesByNhlStats,
  selectCenterSalariesByNhlStats,
  selectLeftDefenseSalariesByNhlStats,
  selectRightDefenseSalariesByNhlStats,
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
  selectGoalieSalariesSortedByRating,
  selectGoalieSalariesSortedByNhlStats,
  selectDefenseSalaries,
  selectForwardSalaries,
  selectGoalieSalariesFiltered,
  selectPlayerSalaryLoading,
};

function getCurrentTotal(salaries: SalariesAndRatingsDto[]) {
  let total = 0;
  salaries.forEach((salary: SalariesAndRatingsDto) => {
    if (
      salary.salaries.season_2023 && //Adjust every year
      !isNaN(Number(salary.salaries.season_2023)) && //Adjust every year
      !salary.player_id.is_protected
    ) {
      total += Number(salary.salaries.season_2023); //Adjust every year
    }
  });

  return total;
}

function getNextTotal(salaries: SalariesAndRatingsDto[]) {
  let total = 0;
  salaries.forEach((salary: SalariesAndRatingsDto) => {
    if (
      salary.salaries.season_2024 && //Adjust every year
      !isNaN(Number(salary.salaries.season_2024)) && //Adjust every year
      !salary.player_id.is_protected
    ) {
      total += Number(salary.salaries.season_2024); //Adjust every year
    }
  });

  return total;
}
