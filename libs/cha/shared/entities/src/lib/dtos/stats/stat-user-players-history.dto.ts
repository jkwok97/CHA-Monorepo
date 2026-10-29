import { StatPlayersHistoryDto } from './stat-players-history.dto';

export interface StatUserPlayersHistoryDto {
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
    id: string;
    divisionname: string;
    conference_id: number;
    isactive: boolean;
  };
  playerStats: StatPlayersHistoryDto[];
}
