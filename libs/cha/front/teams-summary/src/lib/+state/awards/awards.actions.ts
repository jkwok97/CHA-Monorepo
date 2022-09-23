import { UserAwardDto } from '@cha/shared/entities';
import { createAction, props } from '@ngrx/store';

const NAMESPACE = '[TEAMS SUMMARY AWARDS]';

const getUserAwards = createAction(`${NAMESPACE} Get User Awards`);

const getUserAwardsSuccess = createAction(
  `${NAMESPACE} Get User Awards Success`,
  props<{ awards: UserAwardDto[] }>()
);

const error = createAction(`${NAMESPACE} Error`);

export const AwardsActions = {
  getUserAwards,
  getUserAwardsSuccess,
  error,
};
