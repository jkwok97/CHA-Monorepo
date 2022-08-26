import { TeamsEnum } from '../../enums';

export interface statTeamDto {
  city: string;
  conferencename: string;
  corner_lost: string;
  corner_won: string;
  div_loss: string;
  div_tie: string;
  div_win: string;
  divisionname: string;
  empty_net: string;
  even_after_two_loss: string;
  even_after_two_ties: string;
  even_after_two_wins: string;
  face_off_lost: string;
  face_off_won: string;
  games_played: string;
  goals_against: string;
  goals_for: string;
  home_loss: string;
  home_ties: string;
  home_wins: string;
  id: number;
  isactive: true;
  lead_after_two_loss: string;
  lead_after_two_ties: string;
  lead_after_two_wins: string;
  long_win_streak: string;
  loss: string;
  nickname: string;
  ot_loss: string;
  ot_win: string;
  pass_complete: string;
  pass_incomplete: string;
  penalty_minutes: string;
  pk_attempts: string;
  pk_goals: string;
  pk_min: string;
  playing_year: string;
  points: string;
  pp_attempts: string;
  pp_goals: string;
  pp_min: string;
  road_loss: string;
  road_ties: string;
  road_wins: string;
  season_type: string;
  sh_goals: string;
  shortname: string;
  shots_against: string;
  shots_for: string;
  shut_outs: string;
  team_id: TeamsEnum;
  teamlogo: string;
  ties: string;
  trail_after_two_loss: string;
  trail_after_two_ties: string;
  trail_after_two_wins: string;
  wins: string;
}
