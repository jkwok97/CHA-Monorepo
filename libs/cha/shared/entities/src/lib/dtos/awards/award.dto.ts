import { AwardTypeEnum } from '../../enums';

export interface AwardDto {
  id: number;
  awardTypeId: AwardTypeEnum;
  cha_season: string;
  city: string;
  display_name: string;
  display_season: string;
  ownerFirst: string;
  ownerLast: string;
  nickname: string;
  teamcolor: string;
  teamlogo: string;
  playerFirst?: string;
  playerLast?: string;
  nhl_id?: number;
  player_id?: number;
  games_played?: string;
  goals?: string;
  assists?: string;
  points?: string;
  wins?: string;
  save_pct?: string;
  goals_against_avg?: string;
  goals_for?: string;
  goals_against?: string;
}
