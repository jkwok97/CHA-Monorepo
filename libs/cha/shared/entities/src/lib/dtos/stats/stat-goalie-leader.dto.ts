export interface StatGoalieLeaderDto {
  shots_for?: string;
  games_played?: string;
  goals_against_avg?: string;
  save_pct?: string;
  shutouts?: string;
  wins?: string;
  player_id: {
    id: number;
    isgoalie: boolean;
    firstname: string;
    lastname: string;
    nhl_id: string;
  };
  teamInfo: {
    id: number;
    teamlogo: string;
    city: string;
    nickname: string;
  };
}
