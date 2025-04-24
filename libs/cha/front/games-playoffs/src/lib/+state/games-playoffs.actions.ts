import { StatTeamPlayoffsDto } from '@cha/shared/entities';
import { createAction, props } from '@ngrx/store';

const NAMESPACE = '[GAMES PLAYOFFS]';

const getStandings = createAction(`${NAMESPACE} Get Standings`);

const getStandingsSuccess = createAction(
  `${NAMESPACE} Get Standings Success`,
  props<{ playoffStandings: StatTeamPlayoffsDto[] }>()
);

const error = createAction(`${NAMESPACE} Error`);

const getBoxScore = createAction(
  `${NAMESPACE} Get Box Score`,
  props<{ gameId: string }>()
);

const getBoxScoreSuccess = createAction(
  `${NAMESPACE} Get Box Score Success`,
  props<{ game: File | null }>()
);

const resetBoxScore = createAction(`${NAMESPACE} Reset Box Score`);

const getBoxScoreError = createAction(`${NAMESPACE} Get Box Score Error`);

export const GamesPlayoffsActions = {
  getStandings,
  getStandingsSuccess,
  error,
  getBoxScore,
  getBoxScoreSuccess,
  resetBoxScore,
  getBoxScoreError,
};
