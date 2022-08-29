import { Players_Stats_V2, Teams_V2 } from '@api/entities';
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
    private repo: Repository<Players_Stats_V2>,
    @InjectRepository(Teams_V2)
    private teamInfoRepo: Repository<Teams_V2>
  ) {}

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
    const pointsLeaders = await this.getPointsLeaders(season, seasonType);
    const assistLeaders = await this.getAssistLeaders(season, seasonType);

    return {
      hits: hitsLeaders as unknown as StatPlayerLeaderDto[],
      points: pointsLeaders as unknown as StatPlayerLeaderDto[],
      assists: assistLeaders as unknown as StatPlayerLeaderDto[],
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
    const hitsLeaders = await this.repo.find({
      select: {
        id: true,
        hits: true,
        team_name: true,
        player_id: {
          id: true,
          firstname: true,
          lastname: true,
          nhl_id: true,
          isgoalie: true,
        },
      },
      relations: {
        player_id: true,
      },
      where: {
        playing_year: season,
        season_type: seasonType,
      },
      order: {
        hits: 'DESC',
      },
      take: 10,
    });

    const hitsLeadersWithTeamInfo = await this.setTeamInfo(hitsLeaders);

    return hitsLeadersWithTeamInfo;
  }

  private async getPointsLeaders(
    season: string,
    seasonType: 'Regular' | 'Playoffs'
  ) {
    const pointsLeaders = await this.repo.find({
      select: {
        id: true,
        team_name: true,
        points: true,
        player_id: this.playerIdSelect,
      },
      relations: ['player_id'],
      where: {
        playing_year: season,
        season_type: seasonType,
      },
      order: {
        points: 'DESC',
      },
      take: 10,
    });

    const pointsLeadersWithTeamInfo = await this.setTeamInfo(pointsLeaders);

    return pointsLeadersWithTeamInfo;
  }

  private async getAssistLeaders(
    season: string,
    seasonType: 'Regular' | 'Playoffs'
  ) {
    const assistLeaders = await this.repo.find({
      select: {
        id: true,
        team_name: true,
        assists: true,
        player_id: this.playerIdSelect,
      },
      relations: ['player_id'],
      where: {
        playing_year: season,
        season_type: seasonType,
      },
      order: {
        points: 'DESC',
      },
      take: 10,
    });

    const assistLeadersWithTeamInfo = await this.setTeamInfo(assistLeaders);

    return assistLeadersWithTeamInfo;
  }

  private async setTeamInfo(array: Players_Stats_V2[]) {
    return await Promise.all(
      array.map(async (item) => ({
        ...item,
        teamInfo: await this.getTeamInfo(item.team_name),
      }))
    );
  }

  private async getTeamInfo(teamName: string) {
    return await this.teamInfoRepo.findOne({
      select: {
        id: true,
        city: true,
        teamlogo: true,
        nickname: true,
      },
      where: {
        shortname: teamName,
      },
    });
  }
}
