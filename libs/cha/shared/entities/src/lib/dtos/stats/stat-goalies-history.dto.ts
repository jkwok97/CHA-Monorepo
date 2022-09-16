import { PlayerDto } from '../player';
import { TeamDto } from '../teams';

export interface StatGoaliesHistoryDto {
  playing_year: string;
  season_type: string;
  teamInfo: TeamDto;
  player_id: PlayerDto;
  games_played: number;
  minutes_played: number;
  goals_against_avg: number;
  wins: number;
  loss: number;
  ties: number;
  shutouts: number;
  goals_against: number;
  saves: number;
  shots_for: number;
  save_pct: number;
  goals: number;
  assists: number;
  points: number;
  penalty_minutes: number;
}
