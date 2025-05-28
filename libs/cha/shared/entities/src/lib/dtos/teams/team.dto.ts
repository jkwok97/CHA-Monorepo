import { TeamsEnum } from '../../enums';
import { DivisionDto } from '../league';

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

export interface TeamCreateDto {
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
