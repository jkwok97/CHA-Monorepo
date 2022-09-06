export interface GetTransactionDto {
  id: number;
  transactionDate: Date;
  teamOneInfo: TeamInfoTransactionDto;
  teamOnePlayers: PlayerInfoTransactionDto[];
  teamOnePicks: string[];
  teamTwoInfo: TeamInfoTransactionDto;
  teamTwoPlayers: PlayerInfoTransactionDto[];
  teamTwoPicks: string;
}

export interface TeamInfoTransactionDto {
  id: number;
  city: string;
  teamlogo: string;
  nickname: string;
  teamcolor: string;
}

export interface PlayerInfoTransactionDto {
  id: number;
  firstname: string;
  lastname: string;
  nhl_id: string;
}
