import { AwardAwardTypeDto, UserDto } from '@cha/shared/entities';
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

export const LeagueAwardsSelectors = {
  selectLoaded,
  selectLoading,
  selectSaving,
  selectSaved,
  selectAwards,
  selectUsers,
  selectUsersOptions,
  selectAwardTypesOptions,
};
