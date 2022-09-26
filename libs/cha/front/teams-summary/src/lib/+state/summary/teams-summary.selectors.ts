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

const selectCenterSalaries = createSelector(
  selectPlayerSalaries,
  (playerSalariesRating: SalariesAndRatingsDto[]) =>
    playerSalariesRating
      .filter(
        (playerSalaries: SalariesAndRatingsDto) =>
          playerSalaries.player_id.primary_position === 'C'
      )
      .sort((a, b) => Number(b.ratings?.points) - Number(a.ratings?.points))
);

const selectLeftWingSalaries = createSelector(
  selectPlayerSalaries,
  (playerSalariesRating: SalariesAndRatingsDto[]) =>
    playerSalariesRating
      .filter(
        (playerSalaries: SalariesAndRatingsDto) =>
          playerSalaries.player_id.primary_position === 'LW'
      )
      .sort((a, b) => Number(b.ratings?.points) - Number(a.ratings?.points))
);

const selectRightWingSalaries = createSelector(
  selectPlayerSalaries,
  (playerSalariesRating: SalariesAndRatingsDto[]) =>
    playerSalariesRating
      .filter(
        (playerSalaries: SalariesAndRatingsDto) =>
          playerSalaries.player_id.primary_position === 'RW'
      )
      .sort((a, b) => Number(b.ratings?.points) - Number(a.ratings?.points))
);

const selectLeftDefenseSalaries = createSelector(
  selectPlayerSalaries,
  (playerSalariesRating: SalariesAndRatingsDto[]) =>
    playerSalariesRating
      .filter(
        (playerSalaries: SalariesAndRatingsDto) =>
          playerSalaries.player_id.primary_position === 'LD'
      )
      .sort((a, b) => Number(b.ratings?.points) - Number(a.ratings?.points))
);

const selectRightDefenseSalaries = createSelector(
  selectPlayerSalaries,
  (playerSalariesRating: SalariesAndRatingsDto[]) =>
    playerSalariesRating
      .filter(
        (playerSalaries: SalariesAndRatingsDto) =>
          playerSalaries.player_id.primary_position === 'RD'
      )
      .sort((a, b) => Number(b.ratings?.points) - Number(a.ratings?.points))
);

const selectGoaliesSalaryLoaded = createSelector(
  selectState,
  TeamsSummaryReducer.getGoalieSalaryLoaded
);

const selectGoalieSalaries = createSelector(
  selectState,
  TeamsSummaryReducer.getGoalieSalaries
);

const selectGoalieSalariesSorted = createSelector(
  selectGoalieSalaries,
  (playerSalariesRating: SalariesAndRatingsDto[]) =>
    playerSalariesRating
      .filter(
        (playerSalaries: SalariesAndRatingsDto) =>
          playerSalaries.player_id.primary_position === 'G'
      )
      .sort((a, b) => Number(b.ratings?.wins) - Number(a.ratings?.wins))
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

export const TeamsSummarySelectors = {
  selectLoaded,
  selectLoading,
  selectUser,
  selectUserId,
  selectTeam,
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
  selectNextTotal,
  selectPlayersCount,
  selectGoaliesSalaryLoaded,
  selectPlayerSalaryLoaded,
  selectCurrentPlayerStat,
  selectCurrentGoalieStat,
  selectCurrentNHLStat,
  selectStatsLoading,
  selectGoalieSalariesSorted,
  selectPlayerSalaryLoading,
};

function getCurrentTotal(salaries: SalariesAndRatingsDto[]) {
  let total = 0;
  salaries.forEach((salary: SalariesAndRatingsDto) => {
    if (
      salary.salaries.season_2022 &&
      !isNaN(Number(salary.salaries.season_2022))
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
      !isNaN(Number(salary.salaries.season_2023))
    ) {
      total += Number(salary.salaries.season_2023);
    }
  });

  return total;
}