import { StatPlayerLeaderDto } from './stat-player-leader.dto';

export interface StatPlayerLeadersDto {
  assists: StatPlayerLeaderDto[];
  bestPlusMinus: StatPlayerLeaderDto[];
  blockedShots: StatPlayerLeaderDto[];
  currStreak: StatPlayerLeaderDto[];
  defense: StatPlayerLeaderDto[];
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
  worstPlusMinus: StatPlayerLeaderDto[];
}
