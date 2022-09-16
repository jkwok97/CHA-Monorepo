import { TeamDto } from '../teams';

export interface StatUserTeamRecordDto {
  id: number;
  team_id: TeamDto;
  wins: number;
  loss: number;
  ties: number;
  points: number;
  home_wins: number;
  home_loss: number;
  home_ties: number;
  road_wins: number;
  road_loss: number;
  road_ties: number;
  div_win: number;
  div_loss: number;
  div_tie: number;
}
