import { statTeamDto, Team_Stats_V2 } from '@cha/shared/entities';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ApiTeamStatsService {
  constructor(
    @InjectRepository(Team_Stats_V2)
    private repo: Repository<Team_Stats_V2>
  ) {}

  async getTeamStatsBySeasonByType(
    season: string,
    seasonType: 'Regular' | 'Playoffs'
  ): Promise<Team_Stats_V2[]> {
    return await this.repo.find({
      where: {
        playing_year: season,
        season_type: seasonType,
      },
    });
  }
}
