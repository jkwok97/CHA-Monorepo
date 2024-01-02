import { StatPlayerLeaderDto } from './stat-player-leader.dto';

export interface StatPlayerLeadersDto {
  assists: StatPlayerLeaderDto[];
  bestPlusMinus: StatPlayerLeaderDto[];
  worstPlusMinus: StatPlayerLeaderDto[];
  blockedShots: StatPlayerLeaderDto[];
  currStreak: StatPlayerLeaderDto[];
  defense: StatPlayerLeaderDto[];
  defenseGoals: StatPlayerLeaderDto[];
  goals: StatPlayerLeaderDto[];
  hits: StatPlayerLeaderDto[];
  longStreak: StatPlayerLeaderDto[];
  minutes: StatPlayerLeaderDto[];
  penalties: StatPlayerLeaderDto[];
  points: StatPlayerLeaderDto[];
  ppGoals: StatPlayerLeaderDto[];
  rookies: StatPlayerLeaderDto[];
  shGoals: StatPlayerLeaderDto[];
  shots: StatPlayerLeaderDto[];
  gwGoals: StatPlayerLeaderDto[];
}
