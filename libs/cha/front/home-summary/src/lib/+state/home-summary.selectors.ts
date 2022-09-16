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

const selectPlayerSalaries = createSelector(
  selectState,
  HomeSummaryReducer.getPlayerSalaries
);

const selectCenterSalaries = createSelector(
  selectPlayerSalaries,
  (playerSalariesRating: SalariesAndRatingsDto[]) =>
    playerSalariesRating.filter(
      (rating: SalariesAndRatingsDto) => rating.ratings.c_rate !== '0'
    )
);

const selectLeftWingSalaries = createSelector(
  selectPlayerSalaries,
  (playerSalariesRating: SalariesAndRatingsDto[]) =>
    playerSalariesRating.filter(
      (rating: SalariesAndRatingsDto) => rating.ratings.l_rate !== '0'
    )
);

const selectRightWingSalaries = createSelector(
  selectPlayerSalaries,
  (playerSalariesRating: SalariesAndRatingsDto[]) =>
    playerSalariesRating.filter(
      (rating: SalariesAndRatingsDto) => rating.ratings.r_rate !== '0'
    )
);

const selectLeftDefenseSalaries = createSelector(
  selectPlayerSalaries,
  (playerSalariesRating: SalariesAndRatingsDto[]) =>
    playerSalariesRating.filter(
      (rating: SalariesAndRatingsDto) => rating.ratings.ld_rate !== '0'
    )
);

const selectRightDefenseSalaries = createSelector(
  selectPlayerSalaries,
  (playerSalariesRating: SalariesAndRatingsDto[]) =>
    playerSalariesRating.filter(
      (rating: SalariesAndRatingsDto) => rating.ratings.rd_rate !== '0'
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

const selectTotal = createSelector(
  selectPlayerSalaries,
  selectGoalieSalaries,
  (
    playerSalaries: SalariesAndRatingsDto[],
    goalieSalaries: SalariesAndRatingsDto[]
  ) => {
    const playerTotals = getTotal(playerSalaries);
    const goalieTotals = getTotal(goalieSalaries);
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

export const HomeSummarySelectors = {
  selectTeamRecordLoading,
  selectTeamRecordLoaded,
  selectTeamRecord,
  selectLeftWingSalaries,
  selectRightWingSalaries,
  selectCenterSalaries,
  selectLeftDefenseSalaries,
  selectRightDefenseSalaries,
  selectGoalieSalaries,
  selectTotal,
  selectPlayersCount,
  selectGoaliesSalaryLoaded,
  selectPlayerSalaryLoaded,
};

function getTotal(salaries: SalariesAndRatingsDto[]) {
  let total = 0;
  salaries.forEach((salary: SalariesAndRatingsDto) => {
    if (salary.salaries.season_2022) {
      total += Number(salary.salaries.season_2022);
    }
  });

  return total;
}
