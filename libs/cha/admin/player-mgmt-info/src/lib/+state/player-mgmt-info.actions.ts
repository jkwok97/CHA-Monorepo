import { PlayerCreateDto, PlayerDto, SalaryAllDto } from '@cha/shared/entities';
import { createAction, props } from '@ngrx/store';

const NAMESPACE = '[PLAYER MGMT INFO]';

const getPlayers = createAction(`${NAMESPACE} Get Players`);

const getPlayersSuccess = createAction(
  `${NAMESPACE} Get Players Success`,
  props<{ players: PlayerDto[] }>()
);

const addPlayer = createAction(
  `${NAMESPACE} Add Player`,
  props<{ player: PlayerCreateDto }>()
);

const addPlayerSuccess = createAction(
  `${NAMESPACE} Add Player Success`,
  props<{ player: PlayerDto }>()
);

const editPlayer = createAction(
  `${NAMESPACE} Edit Player`,
  props<{ player: PlayerDto }>()
);

const editPlayersuccess = createAction(
  `${NAMESPACE} Edit Player Success`,
  props<{ player: PlayerDto }>()
);

const deletePlayer = createAction(
  `${NAMESPACE} Delete Player`,
  props<{ playerId: number }>()
);

const deletePlayersuccess = createAction(
  `${NAMESPACE} Delete Player Success`,
  props<{ player: PlayerDto }>()
);

const addSalary = createAction(
  `${NAMESPACE} Add Salary`,
  props<{ salary: SalaryAllDto }>()
);

const addSalarySuccess = createAction(
  `${NAMESPACE} Add Salary Success`,
  props<{ salary: SalaryAllDto }>()
);

const error = createAction(`${NAMESPACE} Error`);

export const PlayerMgmtInfoActions = {
  getPlayers,
  getPlayersSuccess,
  addPlayer,
  addPlayerSuccess,
  editPlayer,
  editPlayersuccess,
  deletePlayer,
  deletePlayersuccess,
  addSalary,
  addSalarySuccess,
  error,
};
