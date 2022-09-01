import { StatTeamPlayoffsDto } from '@cha/shared/entities';
import { createAction, props } from '@ngrx/store';

const NAMESPACE = '[GAMES PLAYOFFS]';

const getStandings = createAction(`${NAMESPACE} Get Standings`);

const getStandingsSuccess = createAction(
  `${NAMESPACE} Get Standings Success`,
  props<{ playoffStandings: StatTeamPlayoffsDto[] }>()
);

const error = createAction(`${NAMESPACE} Error`);

export const GamesPlayoffsActions = {
  getStandings,
  getStandingsSuccess,
  error,
};
