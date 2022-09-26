export interface PlayerDto {
  id: number;
  firstname: string;
  lastname: string;
  nhl_id: string;
  isactive: boolean;
  isgoalie: boolean;
  isdefense: boolean;
  isforward: boolean;
  is_protected: boolean;
  primary_position: string;
}
