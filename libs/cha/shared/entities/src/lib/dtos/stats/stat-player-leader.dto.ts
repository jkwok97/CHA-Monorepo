export interface StatPlayerLeaderDto {
  assists?: string;
  plus_minus?: string;
  blocked_shots?: string;
  current_points_streak?: string;
  longest_points_streak?: string;
  goals?: string;
  points?: string;
  hits?: string;
  minutes_played?: string;
  penalty_minutes?: string;
  games_played?: string;
  pp_goals?: string;
  sh_goals?: string;
  gw_goals?: string;
  shots?: string;
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
