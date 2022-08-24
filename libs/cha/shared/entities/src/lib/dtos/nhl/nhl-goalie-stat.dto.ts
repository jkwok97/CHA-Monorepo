export interface NhlGoalieStatDto {
  assists: number;
  gamesPlayed: number;
  gamesStarted?: number;
  goalieFullName?: string;
  goals: number;
  goalsAgainst?: number;
  goalsAgainstAverage?: number;
  lastName: string;
  losses?: number;
  otLosses?: number;
  penaltyMinutes: number;
  playerId: number;
  player_id?: number;
  points: number;
  savePct?: number;
  saves?: number;
  seasonId: number;
  shootsCatches: string;
  shotsAgainst?: number;
  shutouts?: number;
  teamAbbrevs: string;
  ties?: null;
  timeOnIce?: number;
  wins?: number;
  chaTeam?: string;
}
