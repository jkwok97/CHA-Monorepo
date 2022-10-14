export interface PlayerRatingDto {
  id: number;
  player_id: string;
  game_fatigue: string;
  shift_fatigue: string;
  c_rate: string;
  l_rate: string;
  r_rate: string;
  ld_rate: string;
  rd_rate: string;
  shooting: string;
  skating: string;
  speed: string;
  passing: string;
  forecheck: string;
  physical: string;
  intimidation: string;
  clear_crease: string;
  rock: string;
  pk: string;
  shot_block: string;
  face_off: string;
  assist_rating: string;
  points?: string;
  wins?: string;
  goals_against_avg?: string;
  save_pct?: string;
  games_played?: string;
  goals?: string;
  assists?: string;
  shots?: string;
  shooting_pct?: string;
  playerInfo?: {
    id: number;
    firstname: string;
    lastname: string;
  };
}
