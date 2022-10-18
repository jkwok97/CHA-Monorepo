import { TeamDto } from '../teams';

export interface WaiversDto {
  id: number;
  team_id: number;
  priority_number: number;
  teamInfo?: TeamDto;
}
