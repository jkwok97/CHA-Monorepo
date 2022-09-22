export interface UserAwardDto {
  id: number;
  display_season: string;
  award_type: {
    id: number;
    display_name: string;
  };
  users_id: {
    id: number;
    firstname: string;
    lastname: string;
  };
  player_id: {
    id: number;
    firstname: string;
    lastname: string;
    nhl_id: string;
  };
  team_id: {
    id: number;
    teamlogo: string;
  };
}
