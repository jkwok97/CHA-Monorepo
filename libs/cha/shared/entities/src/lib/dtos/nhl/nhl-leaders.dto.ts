import { NhlPlayerDto, NhlGoalieDto } from './nhl-player.dto';

export interface NhlLeadersDto {
  points: NhlPlayerDto[];
  goals: NhlPlayerDto[];
  assists: NhlPlayerDto[];
  rookiePoints: NhlPlayerDto[];
  rookieGoals: NhlPlayerDto[];
  rookieAssists: NhlPlayerDto[];
  gaa: NhlGoalieDto[];
  savePct: NhlGoalieDto[];
  shutouts: NhlGoalieDto[];
  defensePoints: NhlPlayerDto[];
  defenseGoals: NhlPlayerDto[];
  defenseAssists: NhlPlayerDto[];
}
