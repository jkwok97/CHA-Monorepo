import { PlayerRatingDto } from './player-rating.dto';

export interface GoalieRatingDto extends PlayerRatingDto {
  id: number;
  player_id: string;
  skating: string;
  speed: string;
  passing: string;
  points?: string;
  wins?: string;
  goals_against_avg?: string;
  save_pct?: string;
  games_played?: string;
  goals?: string;
  assists?: string;
  shots?: string;
  shooting_pct?: string;
  playerInfo?: {
    id: number;
    firstname: string;
    lastname: string;
  };
}
