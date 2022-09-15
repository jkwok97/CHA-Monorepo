import { PlayerDto } from '../player';
import { TeamDto } from '../teams';

export interface StatPlayersHistoryDto {
  playing_year: string;
  season_type: string;
  teamInfo: TeamDto;
  player_id: PlayerDto;
  position: string;
  games_played: number;
  goals: number;
  assists: number;
  points: number;
  pointsPerSixty: number;
  plus_minus: number;
  penalty_minutes: number;
  pp_goals: number;
  sh_goals: number;
  shots: number;
  shooting_pct: number;
  minutes_per_game: number;
  fo_pct: number;
  corner_pct: number;
  pass_pct: number;
  hit_per_game: number;
  blocked_shots: number;
}
