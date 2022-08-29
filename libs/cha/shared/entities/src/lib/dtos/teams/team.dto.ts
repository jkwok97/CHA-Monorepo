import { TeamsEnum } from '../../enums';
import { DivisionDto } from '../league/division.dto';

export interface TeamDto {
  id: TeamsEnum;
  shortname: string;
  city: string;
  nickname: string;
  isactive: boolean;
  users_id: number;
  teamlogo: string;
  teamaltlogo: string;
  teamcolor: string;
  teamtextcolor: string;
  divisions_id: DivisionDto;
}
