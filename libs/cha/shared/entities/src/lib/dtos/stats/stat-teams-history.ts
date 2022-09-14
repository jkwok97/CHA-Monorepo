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
  foPct: number;
  cornerPct: number;
  passPct: number;
  shut_outs: number;
  playing_year: string;
  season_type: string;
  team_id: TeamDto;
}

export interface StatTeamsHistoryRawDto {
  team_id: number;
  season_type: string;
  city: string;
  nickname: string;
  shortname: string;
  teamlogo: string;
  isactive: true;
  games_played: number;
  wins: number;
  loss: number;
  ties: number;
  points: number;
  goals_for: number;
  goals_against: number;
  pp_attempts: number;
  pp_goals: number;
  pk_attempts: number;
  pk_goals: number;
  sh_goals: number;
  penalty_minutes: number;
  shots_for: number;
  shots_against: number;
  shut_outs: number;
  face_off_won: number;
  face_off_lost: number;
  corner_won: number;
  corner_lost: number;
  pass_complete: number;
  pass_incomplete: number;
}
