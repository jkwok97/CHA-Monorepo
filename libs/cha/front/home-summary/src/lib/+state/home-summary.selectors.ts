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
      .sort((a, b) => Number(b.nhlStats?.points) - Number(a.nhlStats?.points))
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
      .sort((a, b) => Number(b.nhlStats?.points) - Number(a.nhlStats?.points))
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
      .sort((a, b) => Number(b.nhlStats?.points) - Number(a.nhlStats?.points))
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
      .sort((a, b) => Number(b.nhlStats?.points) - Number(a.nhlStats?.points))
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
      .sort((a, b) => Number(b.nhlStats?.points) - Number(a.nhlStats?.points))
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
  ) => playerSalaries.length + goalieSalaries.length
);

const selectForwardSalaries = createSelector(
  selectPlayerSalaries,
  (playerSalaries: SalariesAndRatingsDto[]) =>
    playerSalaries
      .filter(
        (playerSalary: SalariesAndRatingsDto) =>
          playerSalary.player_id.isforward
      )
      .sort(
        (a, b) =>
          Number(b.salaries.season_2022) - Number(a.salaries.season_2022)
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
          playerSalary.player_id.isdefense
      )
      .sort(
        (a, b) =>
          Number(b.salaries.season_2022) - Number(a.salaries.season_2022)
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
        (playerSalary: SalariesAndRatingsDto) => playerSalary.player_id.isgoalie
      )
      .sort(
        (a, b) =>
          Number(b.salaries.season_2022) - Number(a.salaries.season_2022)
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
  selectPlayerSalaryLoading
};

function getCurrentTotal(salaries: SalariesAndRatingsDto[]) {
  let total = 0;
  salaries.forEach((salary: SalariesAndRatingsDto) => {
    if (
      salary.salaries.season_2022 &&
      !isNaN(Number(salary.salaries.season_2022)) &&
      !salary.player_id.is_protected
    ) {
      total += Number(salary.salaries.season_2022);
    }
  });

  return total;
}

function getNextTotal(salaries: SalariesAndRatingsDto[]) {
  let total = 0;
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
