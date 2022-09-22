import { UserAwardDto } from '@cha/shared/entities';
import { createAction, props } from '@ngrx/store';

const NAMESPACE = '[HOME AWARDS]';

const getUserAwards = createAction(`${NAMESPACE} Get User Awards`);

const getUserAwardsSuccess = createAction(
  `${NAMESPACE} Get User Awards Success`,
  props<{ awards: UserAwardDto[] }>()
);

const error = createAction(`${NAMESPACE} Error`);

export const HomeAwardsActions = {
  getUserAwards,
  getUserAwardsSuccess,
  error,
};
