import { CreateStatPlayerAllDto, StatPlayerAllDto } from '@cha/shared/entities';
import { createAction, props } from '@ngrx/store';

const NAMESPACE = '[PLAYER MGMT PLAYER CURRENT]';

const getPlayers = createAction(`${NAMESPACE} Get Players`);

const getPlayersSuccess = createAction(
  `${NAMESPACE} Get Players Success`,
  props<{ players: StatPlayerAllDto[] }>()
);

const editPlayer = createAction(
  `${NAMESPACE} Edit Player`,
  props<{ player: StatPlayerAllDto }>()
);

const editPlayersuccess = createAction(
  `${NAMESPACE} Edit Player Success`,
  props<{ player: StatPlayerAllDto }>()
);

const deletePlayer = createAction(
  `${NAMESPACE} Delete Player`,
  props<{ playerId: number }>()
);

const deletePlayersuccess = createAction(
  `${NAMESPACE} Delete Player Success`,
  props<{ player: StatPlayerAllDto }>()
);

const error = createAction(`${NAMESPACE} Error`);

export const PlayerMgmtPlayerCurrentActions = {
  getPlayers,
  getPlayersSuccess,
  editPlayer,
  editPlayersuccess,
  deletePlayer,
  deletePlayersuccess,
  error,
};
