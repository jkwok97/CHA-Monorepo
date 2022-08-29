import { Players_Stats_V2 } from '@api/entities';
import {
  StatPlayerLeaderDto,
  StatPlayerLeadersDto,
} from '@cha/shared/entities';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ApiPlayerStatsService {
  constructor(
    @InjectRepository(Players_Stats_V2)
    private repo: Repository<Players_Stats_V2>
  ) {}

  teamNameSelect = {
    id: true,
    shortname: true,
    teamlogo: true,
  };

  playerIdSelect = {
    id: true,
    firstname: true,
    lastname: true,
    nhl_id: true,
    isgoalie: true,
  };

  async getPlayerStatsLeaders(
    season: string,
    seasonType: 'Regular' | 'Playoffs'
  ): Promise<StatPlayerLeadersDto> {
    const hitsLeaders = await this.getHitsLeaders(season, seasonType);
    // const pointsLeaders = await this.getPointsLeaders(season, seasonType);

    return {
      hits: hitsLeaders as unknown as StatPlayerLeaderDto[],
      points: [],
      assists: [],
      bestPlusMinus: [],
      blockedShots: [],
      currStreak: [],
      defense: [],
      goals: [],
      longStreak: [],
      minutes: [],
      penalties: [],
      ppGoals: [],
      rookies: [],
      shGoals: [],
      shots: [],
      worstPlusMinus: [],
    };
  }

  private async getHitsLeaders(
    season: string,
    seasonType: 'Regular' | 'Playoffs'
  ) {
    return await this.repo
      .find({
        relations: {
          player_id: true,
          // team_name: true,
        },
        select: {
          id: true, 
          hits: true,
          team_name: true,
          // team_name: this.teamNameSelect,
          player_id: this.playerIdSelect,
        },
        where: {
          playing_year: season,
          season_type: seasonType,
        },
        order: {
          hits: 'DESC',
        },
        take: 10,
      })
      .catch((err) => console.log(err));
  }

  private async getPointsLeaders(
    season: string,
    seasonType: 'Regular' | 'Playoffs'
  ) {
    return await this.repo
      .find({
        relations: ['player_id'],
        select: {
          points: true,
          // team_name: this.teamNameSelect,
          player_id: this.playerIdSelect,
        },
        where: {
          playing_year: season,
          season_type: seasonType,
        },
        order: {
          points: 'DESC',
        },
        take: 10,
      })
      .catch((err) => console.log(err));
  }
}
