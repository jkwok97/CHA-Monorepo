import { TeamDto } from '../teams';

export interface StatTeamsHistoryDto {
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
  penalty_minutes: number;
  sh_goals: number;
  face_off_won: number;
  face_off_lost: number;
  corner_won: number;
  corner_lost: number;
  pass_complete: number;
  pass_incomplete: number;
  shut_outs: number;
  playing_year: string;
  season_type: string;
  team_id: TeamDto;
}
