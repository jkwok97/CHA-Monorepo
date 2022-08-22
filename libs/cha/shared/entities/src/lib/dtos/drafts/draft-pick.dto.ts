import { TeamsEnum } from '../../enums';

export interface DraftPickDto {
  id: number;
  draft_overall: number;
  draft_round: number;
  draft_year: string;
  firstname: string;
  lastname: string;
  city: string;
  nickname: string;
  player_id: number;
  team_id: TeamsEnum;
  teamlogo: string;
  nhl_id: number;
}
