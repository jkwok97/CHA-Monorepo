import { TeamDto } from '../teams';

export interface GamesDto {
  id: number;
  gameDay: string;
  visTeamScore: number;
  visTeamInfo: TeamDto;
  visTeamLastFive: string[];
  visTeamRecord: TeamRecordDto;
  visTeamVersus: TeamVersusRecordDto;
  homeTeamScore: 3;
  homeTeamInfo: TeamDto;
  homeTeamLastFive: string[];
  homeTeamRecord: TeamRecordDto;
  homeTeamVersus: TeamVersusRecordDto;
}

export interface TeamVersusRecordDto {
  wins: number;
  loss: number;
  ties: number;
}

export interface TeamRecordDto {
  id: number;
  wins: string;
  loss: string;
  ties: string;
}
