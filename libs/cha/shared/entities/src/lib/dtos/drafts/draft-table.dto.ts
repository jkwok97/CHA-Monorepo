import { TeamsEnum } from '../../enums';
import { TeamDto } from '../teams';
import { DraftTableStatDto } from './draft-table-stat.dto';

export interface DraftTableDto {
  id: number;
  draft_year: string;
  team_id: TeamDto;
  round_one: TeamsEnum;
  round_two: TeamsEnum;
  round_three: TeamsEnum;
  round_four: TeamsEnum;
  round_five: TeamsEnum;
  stats: DraftTableStatDto;
}
