import { TeamsEnum } from '../../enums';
import { DivisionDto, GetDivisionDto } from '../league/division.dto';

export interface StatTeamPlayoffsDto {
  id: number;
  team_id: {
    id: TeamsEnum;
    shortname: string;
    city: string;
    teamlogo: string;
    nickname: string;
    divisions_id: DivisionDto;
    teamcolor: string;
  };
  division: GetDivisionDto;
  goals_against: string;
  goals_for: string;
  playing_year: string;
  points: string;
  season_type: 'Regular' | 'Playoffs';
  wins: string;
  conferenceStanding: number;
}
