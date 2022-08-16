import { AwardTypeEnum } from '../../enums';
import { PlayerDto } from '../player';
import { TeamDto } from '../teams';
import { UserDto } from '../user';

export interface AwardPlayerDto {
  id: number;
  display_season: string;
  cha_season: string;
  award_type: AwardTypeEnum;
  users_id: UserDto;
  team_id: TeamDto;
  player_id: PlayerDto;
}
