import { StatTeamsHistoryDto } from './stat-teams-history';

export interface StatUserTeamHistoryDto {
  id: number;
  shortname: string;
  city: string;
  nickname: string;
  isactive: boolean;
  users_id: number;
  teamlogo: string;
  teamaltlogo: string;
  teamcolor: string;
  teamtextcolor: string;
  divisions_id: {
    id: 5;
    divisionname: string;
    conference_id: number;
    isactive: boolean;
  };
  teamStats: StatTeamsHistoryDto[];
}
