import { TeamDto } from '../teams';

export interface ScheduleAllDto {
  id: number;
  game_day: number;
  vis_team_id: number;
  vis_team_game_number: number;
  vis_team_score: number;
  visTeamInfo: TeamDto;
  home_team_id: number;
  home_team_game_number: number;
  home_team_score: number;
  homeTeamInfo: TeamDto;
  playing_year: string;
}
