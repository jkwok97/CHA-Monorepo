import { Teams_V2 } from '@api/entities';

export interface GetTeamTransactionDto {
  players: PlayerTransactionDto[];
  goalies: PlayerTransactionDto[];
  draftPicks: DraftPickTransactionDto[];
}

export interface PlayerTransactionDto {
  id: number;
  player_id: {
    firstname: string;
    lastname: string;
    id: number;
  };
  teamInfo: {
    id: number;
    shortname: string;
  };
}

export interface DraftPickTransactionDto {
  id: number;
  team_id: Teams_V2;
  round_one: number;
  round_two: number;
  round_three: number;
  round_four: number;
  round_five: number;
  draft_year: string;
}
