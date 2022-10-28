import { PlayerDto } from '../player';
import { TeamDto } from '../teams';

export interface GetTradeDto {
  id: number;
  transaction_date: Date;
  team_one_id: TeamDto;
  team_one_picks: string[];
  team_one_players: PlayerDto[];
  team_two_id: TeamDto;
  team_two_picks: string[];
  team_two_players: PlayerDto[];
}
