export interface AwardStatsDto {
  id: number;
  player_id: number;
  playing_year: string;
  games_played: number;
  goals?: number;
  assists?: number;
  points?: number;
  wins?: number;
  goals_against_avg?: string;
  save_pct?: string;
  goals_for?: number;
  goals_against?: number;
}
