import {
  AwardAwardTypeDto,
  StatPlayerAwardDto,
  UserDto,
} from '@cha/shared/entities';
import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as LeagueAwardsReducer from './league-awards.reducer';

export const selectState =
  createFeatureSelector<LeagueAwardsReducer.State>('league-awards');

const selectLoading = createSelector(
  selectState,
  LeagueAwardsReducer.getLoading
);

const selectLoaded = createSelector(selectState, LeagueAwardsReducer.getLoaded);

const selectSaving = createSelector(selectState, LeagueAwardsReducer.getSaving);

const selectSaved = createSelector(selectState, LeagueAwardsReducer.getSaved);

const selectAwards = createSelector(selectState, LeagueAwardsReducer.getAwards);

const selectUsers = createSelector(selectState, LeagueAwardsReducer.getUsers);

const selectUsersOptions = createSelector(selectUsers, (users: UserDto[]) =>
  users.map((user: UserDto) => ({
    value: user.id,
    label: `${user.firstname} ${user.lastname}`,
  }))
);

const selectAwardTypes = createSelector(
  selectState,
  LeagueAwardsReducer.getAwardTypes
);

const selectAwardTypesOptions = createSelector(
  selectAwardTypes,
  (awardTypes: AwardAwardTypeDto[]) =>
    awardTypes.map((awardType: AwardAwardTypeDto) => ({
      value: awardType.id,
      label: `${awardType.display_name}`,
    }))
);

const selectPlayers = createSelector(
  selectState,
  LeagueAwardsReducer.getPlayers
);

const selectPlayersOptions = createSelector(
  selectPlayers,
  (players: StatPlayerAwardDto[]) =>
    players.map((player: StatPlayerAwardDto) => ({
      value: player.player_id.id,
      label: `${player.player_id.firstname} ${player.player_id.lastname}`,
    }))
);

const selectGoalies = createSelector(
  selectState,
  LeagueAwardsReducer.getGoalies
);

const selectGoaliesOptions = createSelector(
  selectGoalies,
  (goalies: StatPlayerAwardDto[]) =>
    goalies.map((goalie: StatPlayerAwardDto) => ({
      value: goalie.player_id.id,
      label: `${goalie.player_id.firstname} ${goalie.player_id.lastname}`,
    }))
);

export const LeagueAwardsSelectors = {
  selectLoaded,
  selectLoading,
  selectSaving,
  selectSaved,
  selectAwards,
  selectUsers,
  selectUsersOptions,
  selectAwardTypesOptions,
  selectPlayersOptions,
  selectGoaliesOptions,
};
