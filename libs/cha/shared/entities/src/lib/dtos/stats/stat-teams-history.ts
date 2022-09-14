import { TeamDto } from '../teams';

export interface StatTeamsHistoryDto {
  games_played: number;
  wins: number;
  loss: number;
  ties: number;
  points: number;
  goals_for: number;
  goals_against: number;
  goalsForPerGame: number;
  goalsAgainstPerGame: number;
  goalDiff: number;
  winPct: number;
  ppPct: number;
  pkPct: number;
  pimPerGame: number;
  sh_goals: number;
  foPct: string;
  cornerPct: string;
  passPct: string;
  shut_outs: number;
  playing_year: string;
  season_type: string;
  team_id: TeamDto;
}
