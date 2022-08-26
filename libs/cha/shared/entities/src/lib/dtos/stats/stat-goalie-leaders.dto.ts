import { StatGoalieLeaderDto } from './stat-goalie-leader.dto';

export interface StatGoalieLeadersDto {
  shotsFaced: StatGoalieLeaderDto[];
  gaa: StatGoalieLeaderDto[];
  savePct: StatGoalieLeaderDto[];
  shutouts: StatGoalieLeaderDto[];
  wins: StatGoalieLeaderDto[];
}
