import { PlayerDto } from '../player';
import { TeamDto } from '../teams';
import { GoalieRatingDto } from './goalie-rating.dto';
import { PlayerRatingDto } from './player-rating.dto';

export interface SalariesAndRatingsDto {
  id: number;
  team_name: string;
  player_id: PlayerDto;
  salaries: SalaryDto;
  ratings: PlayerRatingDto | GoalieRatingDto;
  teamInfo: TeamDto;
}

export interface SalaryDto {
  id: number;
  player_id: number;
  season_2022: string | null;
  season_2023: string | null;
  season_2024: string | null;
  season_2025: string | null;
}
