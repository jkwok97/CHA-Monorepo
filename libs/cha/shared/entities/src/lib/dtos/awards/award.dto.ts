import { PlayerDto } from '../player';
import { TeamDto } from '../teams';
import { UserDto } from '../user';
import { AwardAwardTypeDto } from './award-award-type.dto';
import { AwardGoalieStatsDto } from './award-goalie-stats.dto';
import { AwardPlayerStatsDto } from './award-player-stats.dto';
import { AwardTeamStatsDto } from './award-team-stats.dto';

export interface AwardDto {
  id: number;
  display_season: string;
  cha_season: string;
  award_type: AwardAwardTypeDto;
  users_id: UserDto;
  team_id: TeamDto;
  player_id?: PlayerDto;
  player_stats?: AwardPlayerStatsDto;
  goalie_stats?: AwardGoalieStatsDto;
  team_stats?: AwardTeamStatsDto;
}
