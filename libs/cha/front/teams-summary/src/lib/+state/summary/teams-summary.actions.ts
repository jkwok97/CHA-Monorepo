import {
  StatUserTeamRecordDto,
  SalariesAndRatingsDto,
  StatPlayerAllDto,
  StatGoalieAllDto,
  NhlGoalieStatDto,
  NhlPlayerStatDto,
  TeamDto,
  UserDto,
} from '@cha/shared/entities';
import { createAction, props } from '@ngrx/store';

const NAMESPACE = '[TEAMS SUMMARY]';

const getUserByTeamId = createAction(
  `${NAMESPACE} Get User By Team Id`,
  props<{ teamId: number }>()
);

const getUserByTeamIdSuccess = createAction(
  `${NAMESPACE} Get User By Team Id Success`,
  props<{ user: UserDto }>()
);

const getUserTeam = createAction(
  `${NAMESPACE} Get User Team`,
  props<{ userId: number }>()
);

const getUserTeamSuccess = createAction(
  `${NAMESPACE} Get User Team Success`,
  props<{ team: TeamDto }>()
);

const getUserTeamRecordBySeasonAndSeasonType = createAction(
  `${NAMESPACE} Get Team Record By Season and Season Type`,
  props<{ teamId: number }>()
);

const getUserTeamRecordBySeasonAndSeasonTypeSuccess = createAction(
  `${NAMESPACE} Get Team Record By Season and Season Type Success`,
  props<{ record: StatUserTeamRecordDto }>()
);

const getUserTeamPlayerSalaries = createAction(
  `${NAMESPACE} Get User Team Players Salaries`,
  props<{ teamName: string }>()
);

const getUserTeamPlayerSalariesSuccess = createAction(
  `${NAMESPACE} Get User Team Players Salaries Success`,
  props<{ playerSalaries: SalariesAndRatingsDto[] }>()
);

const getUserTeamGoaliesSalaries = createAction(
  `${NAMESPACE} Get User Team Goalies Salaries`,
  props<{ teamName: string }>()
);

const getUserTeamGoaliesSalariesSuccess = createAction(
  `${NAMESPACE} Get User Team Goalies Salaries Success`,
  props<{ goalieSalaries: SalariesAndRatingsDto[] }>()
);

const getCHACurrentPlayerStats = createAction(
  `${NAMESPACE} Get Current CHA stats for Player`,
  props<{ playerId: number }>()
);

const getCHACurrentPlayerStatsSuccess = createAction(
  `${NAMESPACE} Get Current CHA stats for Player Success`,
  props<{ stats: StatPlayerAllDto[] }>()
);

const getCHACurrentGoalieStats = createAction(
  `${NAMESPACE} Get Current CHA stats for Goalie`,
  props<{ playerId: number }>()
);

const getCHACurrentGoalieStatsSuccess = createAction(
  `${NAMESPACE} Get Current CHA stats for Goalie Success`,
  props<{ stats: StatGoalieAllDto[] }>()
);

const getNHLCurrentStats = createAction(
  `${NAMESPACE} Get Current NHL stats`,
  props<{ playerId: number }>()
);

const getNHLCurrentStatsSuccess = createAction(
  `${NAMESPACE} Get Current NHL stats Success`,
  props<{ stats: NhlGoalieStatDto | NhlPlayerStatDto | null }>()
);

const error = createAction(`${NAMESPACE} Error`);

const reset = createAction(`${NAMESPACE} Reset`);

export const TeamsSummaryActions = {
  getUserByTeamId,
  getUserByTeamIdSuccess,
  getUserTeamRecordBySeasonAndSeasonType,
  getUserTeamRecordBySeasonAndSeasonTypeSuccess,
  getUserTeamPlayerSalaries,
  getUserTeamPlayerSalariesSuccess,
  getUserTeamGoaliesSalaries,
  getUserTeamGoaliesSalariesSuccess,
  getCHACurrentPlayerStats,
  getCHACurrentPlayerStatsSuccess,
  getCHACurrentGoalieStats,
  getCHACurrentGoalieStatsSuccess,
  getNHLCurrentStats,
  getNHLCurrentStatsSuccess,
  getUserTeam,
  getUserTeamSuccess,
  error,
  reset,
};
