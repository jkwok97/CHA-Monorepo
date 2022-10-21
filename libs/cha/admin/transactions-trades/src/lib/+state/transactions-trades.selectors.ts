import { GetTeamTransactionDto } from '@cha/shared/entities';
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
        // {
        //   label: 'Draft Picks',
        //   items: team.draftPicks.map((pick) => ({
        //     label: `${pick.team_id}`,
        //     value: pick.id
        //   }))
        // }
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
        // {
        //   label: 'Draft Picks',
        //   items: team.draftPicks.map((pick) => ({
        //     label: `${pick.team_id}`,
        //     value: pick.id
        //   }))
        // }
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
