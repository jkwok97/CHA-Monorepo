import { AwardTypeEnum } from '../../enums';

export interface AwardAwardTypeDto {
  id: AwardTypeEnum;
  display_name: string;
  award_type?: string;
}
