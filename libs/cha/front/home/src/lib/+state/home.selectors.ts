import { GetTransactionDto, SalariesAndRatingsDto } from '@cha/shared/entities';
import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as HomeReducer from './home.reducer';

export const selectState = createFeatureSelector<HomeReducer.State>('home');

const selectTeamRecordLoading = createSelector(
  selectState,
  HomeReducer.getTeamRecordLoading
);

const selectTeamRecordLoaded = createSelector(
  selectState,
  HomeReducer.getTeamRecordLoaded
);

const selectTeamRecord = createSelector(selectState, HomeReducer.getTeamRecord);

const selectPlayerSalaryLoaded = createSelector(
  selectState,
  HomeReducer.getPlayerSalaryLoaded
);

const selectCurrentPlayerStat = createSelector(
  selectState,
  HomeReducer.getCurrentPlayerStat
);

const selectCurrentGoalieStat = createSelector(
  selectState,
  HomeReducer.getCurrentGoalieStat
);

const selectCurrentNHLStat = createSelector(
  selectState,
  HomeReducer.getCurrentNHLStat
);

const selectPlayerSalaries = createSelector(
  selectState,
  HomeReducer.getPlayerSalaries
);

const selectStatsLoading = createSelector(
  selectState,
  HomeReducer.getStatsLoading
);

const selectGoaliesSalaryLoaded = createSelector(
  selectState,
  HomeReducer.getGoalieSalaryLoaded
);

const selectGoalieSalaries = createSelector(
  selectState,
  HomeReducer.getGoalieSalaries
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

const selectPlayerSalaryLoading = createSelector(
  selectState,
  HomeReducer.getPlayerSalaryLoading
);

const selectTrades = createSelector(selectState, HomeReducer.getTrades);

const selectRecentTrades = createSelector(
  selectTrades,
  (trades: GetTransactionDto[]) => trades.filter((e, i) => i < 10)
);

export const HomeSelectors = {
  selectTeamRecordLoading,
  selectTeamRecordLoaded,
  selectTeamRecord,
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
  selectDefenseSalaries,
  selectForwardSalaries,
  selectGoalieSalariesFiltered,
  selectPlayerSalaryLoading,
  selectRecentTrades,
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
