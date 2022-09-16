import { Team_Stats_V2 } from '@api/entities';
import { StatUserTeamRecordDto } from '@cha/shared/entities';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ApiUserTeamStatsService {
  constructor(
    @InjectRepository(Team_Stats_V2)
    private repo: Repository<Team_Stats_V2>
  ) {}

  async getUserTeamRecordBySeasonBySeasonType(
    season: string,
    seasonType: 'Regular' | 'Playoffs'
  ): Promise<StatUserTeamRecordDto> {
    return await this.repo.findOne({
      relations: ['team_id'],
      select: {
        team_id: {
          id: true,
          city: true,
          teamlogo: true,
          shortname: true,
          nickname: true,
        },
        id: true,
        wins: true,
        loss: true,
        ties: true,
        points: true,
        home_wins: true,
        home_loss: true,
        home_ties: true,
        road_wins: true,
        road_loss: true,
        road_ties: true,
        div_win: true,
        div_loss: true,
        div_tie: true,
      },
      where: {
        playing_year: season,
        season_type: seasonType,
      },
    });
  }
}
