export interface StatGoalieAllDto {
  player_id: {
    id: number;
    firstname: string;
    lastname: string;
    nhl_id: string;
    isdefense: boolean;
    isforward: boolean;
  };
  teamInfo: {
    id: number;
    teamlogo: string;
    city: string;
    nickname: string;
  };
  id: number;
  games_played: number;
  minutes_played: number;
  goals_against_avg: number;
  wins: number;
  loss: number;
  ties: number;
  en_goals: number;
  shutouts: number;
  saves: number;
  shots_for: number;
  save_pct: number;
  goals: number;
  assists: number;
  points: number;
  penalty_minutes: number;
  pass_pct: number;
  team_name: number;
}
