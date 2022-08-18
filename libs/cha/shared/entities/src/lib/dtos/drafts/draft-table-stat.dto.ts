import { TeamsEnum } from '../../enums';

export interface DraftTableStatDto {
  id: number;
  team_id: TeamsEnum;
  wins: string;
  points: string;
  goals_for: string;
  goals_against: string;
}
