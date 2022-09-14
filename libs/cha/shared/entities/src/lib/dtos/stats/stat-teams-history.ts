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
  home_wins: string;
  home_loss: string;
  home_ties: string;
  road_wins: string;
  road_loss: string;
  road_ties: string;
  div_win: string;
  div_loss: string;
  div_tie: string;
  trail_after_two_wins: string;
  trail_after_two_loss: string;
  trail_after_two_ties: string;
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
