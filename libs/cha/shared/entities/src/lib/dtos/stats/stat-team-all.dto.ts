import { DivisionsEnum, TeamsEnum } from '../../enums';
import { DivisionDto } from '../league/division.dto';

export interface StatTeamAllDto {
  id: number;
  team_id: {
    id: TeamsEnum;
    shortname: string;
    city: string;
    teamlogo: string;
    nickname: string;
    divisions_id: DivisionDto;
  };
  div_loss: string;
  div_tie: string;
  div_win: string;
  games_played: string;
  goals_against: string;
  goals_for: string;
  home_loss: string;
  home_ties: string;
  home_wins: string;
  loss: string;
  penalty_minutes: string;
  pk_attempts: string;
  pk_goals: string;
  pk_min: string;
  playing_year: string;
  points: string;
  pp_attempts: string;
  pp_goals: string;
  road_loss: string;
  road_ties: string;
  road_wins: string;
  season_type: 'Regular' | 'Playoffs';
  ties: string;
  trail_after_two_loss: string;
  trail_after_two_ties: string;
  trail_after_two_wins: string;
  wins: string;
}
