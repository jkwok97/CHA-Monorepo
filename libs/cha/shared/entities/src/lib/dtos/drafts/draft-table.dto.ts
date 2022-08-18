import { TeamsEnum } from '../../enums';
import { TeamDto } from '../teams';
import { DraftTableStatDto } from './draft-table-stat.dto';

export interface DraftTableDto {
  id: number;
  city: string;
  nickname: string;
  shortname: string;
  team_id: TeamDto;
  teamlogo: string;
  round_one: TeamsEnum;
  round_two: TeamsEnum;
  round_three: TeamsEnum;
  round_four: TeamsEnum;
  round_five: TeamsEnum;
  stats: DraftTableStatDto;
}
