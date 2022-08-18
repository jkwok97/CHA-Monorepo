import { PlayerDto } from '../player';
import { TeamDto } from '../teams';
import { UserDto } from '../user';
import { AwardAwardTypeDto } from './award-award-type.dto';
import { AwardStatsDto } from './award-stats.dto';

export interface AwardDto {
  id: number;
  display_season: string;
  cha_season: string;
  award_type: AwardAwardTypeDto;
  users_id: UserDto;
  team_id: TeamDto;
  player_id?: PlayerDto;
  stats?: AwardStatsDto;
}
