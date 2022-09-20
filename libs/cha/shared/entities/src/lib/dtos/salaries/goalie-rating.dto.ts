import { PlayerRatingDto } from './player-rating.dto';

export interface GoalieRatingDto extends PlayerRatingDto {
  id: number;
  skating: string;
  speed: string;
  passing: string;
  wins?: string;
}
