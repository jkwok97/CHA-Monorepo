export interface StatGoalieAllDto {
  player_id: {
    id: number;
    firstname: string;
    lastname: string;
    nhl_id: string;
    isdefense: boolean;
    isforward: boolean;
    sportsnet_id: string;
  };
  teamInfo: {
    id: number;
    teamlogo: string;
    city: string;
    nickname: string;
    shortname?: string;
  };
  id: number;
  games_played: number;
  minutes_played: number;
  goals_against_avg: number | string;
  wins: number;
  loss: number;
  ties: number;
  en_goals: number;
  shutouts: number;
  goals_against: number;
  saves: number;
  shots_for: number;
  save_pct: number | string;
  goals: number;
  assists: number;
  points: number;
  penalty_minutes: number;
  pass_pct: number | string;
  team_name: string;
}
