import {
  DraftPickTransactionDto,
  GetTeamTransactionDto,
} from '@cha/shared/entities';
import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as TransactionsTradesReducer from './transactions-trades.reducer';

export const selectState =
  createFeatureSelector<TransactionsTradesReducer.State>('transactions-trades');

const selectSaving = createSelector(
  selectState,
  TransactionsTradesReducer.getSaving
);

const selectSaved = createSelector(
  selectState,
  TransactionsTradesReducer.getSaved
);

const selectTeamOne = createSelector(
  selectState,
  TransactionsTradesReducer.getTeamOne
);

const selectTeamOneLoading = createSelector(
  selectState,
  TransactionsTradesReducer.getTeamOneLoading
);

const selectTeamOneLoaded = createSelector(
  selectState,
  TransactionsTradesReducer.getTeamOneLoaded
);

const selectTeamTwo = createSelector(
  selectState,
  TransactionsTradesReducer.getTeamTwo
);

const selectTeamTwoLoading = createSelector(
  selectState,
  TransactionsTradesReducer.getTeamTwoLoading
);

const selectTeamTwoLoaded = createSelector(
  selectState,
  TransactionsTradesReducer.getTeamTwoLoaded
);

const selectTeamOneGrouped = createSelector(
  selectTeamOne,
  (team: GetTeamTransactionDto | null) => {
    if (team) {
      return [
        {
          label: 'Players',
          items: team.players.map((player) => ({
            label: `${player.player_id.firstname} ${player.player_id.lastname}`,
            value: `p-${player.player_id.id}`,
          })),
        },
        {
          label: 'Goalies',
          value: 'g',
          items: team.goalies.map((player) => ({
            label: `${player.player_id.firstname} ${player.player_id.lastname}`,
            value: `g-${player.player_id.id}`,
          })),
        },
        {
          label: 'Draft Picks',
          items: getDraftItems(team.draftPicks, team.players[0].teamInfo.id),
        },
      ];
    } else {
      return [];
    }
  }
);

const selectTeamTwoGrouped = createSelector(
  selectTeamTwo,
  (team: GetTeamTransactionDto | null) => {
    if (team) {
      return [
        {
          label: 'Players',
          items: team.players.map((player) => ({
            label: `${player.player_id.firstname} ${player.player_id.lastname}`,
            value: `p-${player.player_id.id}`,
          })),
        },
        {
          label: 'Goalies',
          items: team.goalies.map((player) => ({
            label: `${player.player_id.firstname} ${player.player_id.lastname}`,
            value: `g-${player.player_id.id}`,
          })),
        },
        {
          label: 'Draft Picks',
          items: getDraftItems(team.draftPicks, team.players[0].teamInfo.id),
        },
      ];
    } else {
      return [];
    }
  }
);

export const TransactionsTradesSelectors = {
  selectSaving,
  selectSaved,
  selectTeamOne,
  selectTeamOneLoading,
  selectTeamOneLoaded,
  selectTeamTwo,
  selectTeamTwoLoading,
  selectTeamTwoLoaded,
  selectTeamOneGrouped,
  selectTeamTwoGrouped,
};

function getDraftItems(
  picks: DraftPickTransactionDto[],
  teamId: number
): any[] {
  const picksArray: any[] = [];

  picks.forEach((pick) => {
    if (pick.round_one === teamId) {
      picksArray.push({
        label: `${pick.team_id.shortname} 1st ${pick.draft_year}`,
        value: `${pick.team_id.shortname} 1st ${pick.draft_year}`,
      });
    }
    if (pick.round_two === teamId) {
      picksArray.push({
        label: `${pick.team_id.shortname} 2nd ${pick.draft_year}`,
        value: `${pick.team_id.shortname} 2nd ${pick.draft_year}`,
      });
    }
    if (pick.round_three === teamId) {
      picksArray.push({
        label: `${pick.team_id.shortname} 3rd ${pick.draft_year}`,
        value: `${pick.team_id.shortname} 3rd ${pick.draft_year}`,
      });
    }
    if (pick.round_four === teamId) {
      picksArray.push({
        label: `${pick.team_id.shortname} 4th ${pick.draft_year}`,
        value: `${pick.team_id.shortname} 4th ${pick.draft_year}`,
      });
    }
    if (pick.round_five === teamId) {
      picksArray.push({
        label: `${pick.team_id.shortname} 5th ${pick.draft_year}`,
        value: `${pick.team_id.shortname} 5th ${pick.draft_year}`,
      });
    }
  });
  return picksArray;
}
