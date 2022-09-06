import {
  GetTransactionDto,
  PlayerInfoTransactionDto,
} from '@cha/shared/entities';
import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as LeagueTradesReducer from './league-trades.reducer';

export const selectState =
  createFeatureSelector<LeagueTradesReducer.State>('league-trades');

const selectLoading = createSelector(
  selectState,
  LeagueTradesReducer.getLoading
);

const selectLoaded = createSelector(selectState, LeagueTradesReducer.getLoaded);

const selectTransactions = createSelector(
  selectState,
  LeagueTradesReducer.getTransactions
);

const selectFilter = createSelector(selectState, LeagueTradesReducer.getFilter);

const selectFilteredTrades = createSelector(
  selectTransactions,
  selectFilter,
  (transactions: GetTransactionDto[], filterValue: string) => {
    return transactions.filter((transaction: GetTransactionDto) =>
      filterTransactions(transaction, filterValue)
    );
  }
);

export const LeagueTradesSelectors = {
  selectLoaded,
  selectLoading,
  selectTransactions,
  selectFilter,
  selectFilteredTrades,
};

function filterTransactions(
  transaction: GetTransactionDto,
  filterValue: string
) {
  return (
    transaction.teamOneInfo.city
      ?.toLowerCase()
      .includes(filterValue.toLowerCase()) ||
    transaction.teamOneInfo.nickname
      ?.toLowerCase()
      .includes(filterValue.toLowerCase()) ||
    transaction.teamTwoInfo.city
      ?.toLowerCase()
      .includes(filterValue.toLowerCase()) ||
    transaction.teamTwoInfo.nickname
      ?.toLowerCase()
      .includes(filterValue.toLowerCase()) ||
    transaction.teamOnePlayers.filter((player: PlayerInfoTransactionDto) =>
      player.player.firstname.toLowerCase().includes(filterValue.toLowerCase())
    ).length > 0 ||
    transaction.teamOnePlayers.filter((player: PlayerInfoTransactionDto) =>
      player.player.lastname.toLowerCase().includes(filterValue.toLowerCase())
    ).length > 0 ||
    transaction.teamTwoPlayers.filter((player: PlayerInfoTransactionDto) =>
      player.player.firstname.toLowerCase().includes(filterValue.toLowerCase())
    ).length > 0 ||
    transaction.teamTwoPlayers.filter((player: PlayerInfoTransactionDto) =>
      player.player.lastname.toLowerCase().includes(filterValue.toLowerCase())
    ).length > 0
  );
}
