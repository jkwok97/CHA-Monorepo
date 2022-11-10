import { ConferencesEnum } from '../../enums';
import { ConferenceDto } from './conference.dto';

export interface DivisionDto {
  id: number;
  divisionname: string;
  conference_id: ConferenceDto;
  isactive: boolean;
}

export interface DivisionCreateDto {
  divisionname: string;
  conference_id: ConferencesEnum;
  isactive: boolean;
}
