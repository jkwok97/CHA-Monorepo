import { GoalieRatingDto, PlayerRatingDto } from '@cha/shared/entities';
import { createAction, props } from '@ngrx/store';

const NAMESPACE = '[PLAYER MGMT RATINGS]';

const getPlayers = createAction(`${NAMESPACE} Get Players`);

const getPlayersSuccess = createAction(
  `${NAMESPACE} Get Players Success`,
  props<{ players: PlayerRatingDto[] }>()
);

const editPlayer = createAction(
  `${NAMESPACE} Edit Player`,
  props<{ player: PlayerRatingDto }>()
);

const editPlayersuccess = createAction(
  `${NAMESPACE} Edit Player Success`,
  props<{ player: PlayerRatingDto }>()
);

const getGoalies = createAction(`${NAMESPACE} Get Goalies`);

const getGoaliesSuccess = createAction(
  `${NAMESPACE} Get Goalies Success`,
  props<{ goalies: GoalieRatingDto[] }>()
);

const editGoalie = createAction(
  `${NAMESPACE} Edit Goalie`,
  props<{ goalie: GoalieRatingDto }>()
);

const editGoaliesuccess = createAction(
  `${NAMESPACE} Edit Goalie Success`,
  props<{ goalie: GoalieRatingDto }>()
);

const error = createAction(`${NAMESPACE} Error`);

export const PlayerMgmtRatingsActions = {
  getPlayers,
  getPlayersSuccess,
  getGoalies,
  getGoaliesSuccess,
  editPlayer,
  editPlayersuccess,
  editGoalie,
  editGoaliesuccess,
  error,
};
