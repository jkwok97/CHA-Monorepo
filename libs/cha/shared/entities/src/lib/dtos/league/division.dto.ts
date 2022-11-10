import { ConferencesEnum } from '../../enums';

export interface DivisionDto {
  id: number;
  divisionname: string;
  conference_id: ConferencesEnum;
  isactive: boolean;
}

export interface DivisionCreateDto {
  divisionname: string;
  conference_id: ConferencesEnum;
  isactive: boolean;
}
