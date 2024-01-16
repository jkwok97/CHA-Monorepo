import { TeamsEnum } from '../../enums';

export interface statTeamDto {
  games_played: string;
  wins: string;
  loss: string;
  ties: string;
  points: string;
  goals_for: string;
  goals_against: string;
  pp_attempts: string;
  pp_goals: string;
  pk_attempts: string;
  pk_goals: string;
  penalty_minutes: string;
  long_win_streak: string;
  shots_for: number;
  shots_against: number;
  face_off_won: number;
  face_off_lose: number;
  pass_complete: number;
  pass_incomplete: number;
  team_id: {
    id: TeamsEnum;
    shortname: string;
    city: string;
    teamlogo: string;
    nickname: string;
  };
}
