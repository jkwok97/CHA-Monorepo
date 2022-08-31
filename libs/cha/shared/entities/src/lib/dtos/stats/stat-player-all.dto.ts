export interface StatPlayerAllDto {
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
  position: string;
  games_played: number;
  goals: number;
  assists: number;
  points: number;
  plus_minus: number;
  penalty_minutes: number;
  pp_goals: number;
  sh_goals: number;
  gw_goals: number;
  gt_goals: number;
  shots: number;
  shooting_pct: string;
  minutes_played: number;
  minutes_per_game: string;
  fo_pct: string;
  pass_pct: string;
  corner_pct: string;
  hits: number;
  blocked_shots: number;
}
