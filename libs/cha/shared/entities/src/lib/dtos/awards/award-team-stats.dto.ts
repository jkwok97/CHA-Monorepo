export interface AwardTeamStatsDto {
  id: number;
  team_id: number;
  playing_year: string;
  games_played: number;
  wins: number;
  goals_for: number;
  goals_against: number;
  points: number;
}
