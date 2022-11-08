import { AwardAwardTypeDto, AwardCreateDto, AwardDto, UserDto } from '@cha/shared/entities';
import { createAction, props } from '@ngrx/store';

const NAMESPACE = '[LEAGUE AWARDS]';

const getAwards = createAction(`${NAMESPACE} Get Awards`);

const getAwardsSuccess = createAction(
  `${NAMESPACE} Get Awards Success`,
  props<{ awards: AwardDto[] }>()
);

const addAward = createAction(
  `${NAMESPACE} Add Award`,
  props<{ award: AwardCreateDto }>()
);

const addAwardSuccess = createAction(
  `${NAMESPACE} Add Award Success`,
  props<{ award: AwardDto }>()
);

const editAward = createAction(
  `${NAMESPACE} Edit Award`,
  props<{ award: AwardDto }>()
);

const editAwardSuccess = createAction(
  `${NAMESPACE} Edit Award Success`,
  props<{ award: AwardDto }>()
);

const deleteAward = createAction(
  `${NAMESPACE} Delete Award`,
  props<{ awardId: number }>()
);

const deleteAwardSuccess = createAction(
  `${NAMESPACE} Delete Award Success`,
  props<{ award: AwardDto }>()
);

const getUsers = createAction(`${NAMESPACE} Get Users`);

const getUsersSuccess = createAction(
  `${NAMESPACE} Get Users Success`,
  props<{ users: UserDto[] }>()
);

const getAwardTypes = createAction(`${NAMESPACE} Get Award Types`);

const getAwardTypesSuccess = createAction(
  `${NAMESPACE} Get Award Types Success`,
  props<{ awardTypes: AwardAwardTypeDto[] }>()
);

const error = createAction(`${NAMESPACE} Error`);

export const LeagueAwardsActions = {
  getAwards,
  getAwardsSuccess,
  addAward,
  addAwardSuccess,
  editAward,
  editAwardSuccess,
  deleteAward,
  deleteAwardSuccess,
  getUsers,
  getUsersSuccess,
  getAwardTypes,
  getAwardTypesSuccess,
  error,
};
