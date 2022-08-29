import { ConferenceDto } from './conference.dto';

export interface DivisionDto {
  id: number;
  divisionname: string;
  conference_id: ConferenceDto;
  isactive: boolean;
}
