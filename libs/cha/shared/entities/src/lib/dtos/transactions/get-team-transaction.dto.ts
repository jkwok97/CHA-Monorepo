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
  teamInfo: {
    id: number;
    shortname: string;
  };
}
