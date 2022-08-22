import { PlayerDto } from '../player';
import { TeamDto } from '../teams';

export interface DraftPickDto {
  id: number;
  draft_overall: number;
  draft_round: number;
  draft_year: string;
  player_id: PlayerDto;
  team_id: TeamDto;
}
