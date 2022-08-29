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

  async getPlayerStatsLeaders(
    season: string,
    seasonType: 'Regular' | 'Playoffs'
  ): Promise<StatPlayerLeadersDto> {
    const hitsLeaders = await this.getHitsLeaders(season, seasonType);
    const pointsLeaders = await this.getPointsLeaders(season, seasonType);
    const assistLeaders = await this.getAssistLeaders(season, seasonType);
    const bestPlusMinusLeaders = await this.getBestPlusMinusLeaders(
      season,
      seasonType
    );
    const blockedShotLeaders = await this.getblockedShotLeaders(
      season,
      seasonType
    );
    const currSteakLeaders = await this.getCurrSteakLeaders(season, seasonType);
    const defenseLeaders = await this.getDefenseLeaders(season, seasonType);

    return {
      hits: hitsLeaders as unknown as StatPlayerLeaderDto[],
      points: pointsLeaders as unknown as StatPlayerLeaderDto[],
      assists: assistLeaders as unknown as StatPlayerLeaderDto[],
      bestPlusMinus: bestPlusMinusLeaders as unknown as StatPlayerLeaderDto[],
      blockedShots: blockedShotLeaders as unknown as StatPlayerLeaderDto[],
      currStreak: currSteakLeaders as unknown as StatPlayerLeaderDto[],
      defense: defenseLeaders as unknown as StatPlayerLeaderDto[],
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
        player_id: {
          id: true,
          firstname: true,
          lastname: true,
          nhl_id: true,
          isgoalie: true,
        },
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
        player_id: {
          id: true,
          firstname: true,
          lastname: true,
          nhl_id: true,
          isgoalie: true,
        },
      },
      relations: ['player_id'],
      where: {
        playing_year: season,
        season_type: seasonType,
      },
      order: {
        assists: 'DESC',
      },
      take: 10,
    });

    const assistLeadersWithTeamInfo = await this.setTeamInfo(assistLeaders);

    return assistLeadersWithTeamInfo;
  }

  private async getBestPlusMinusLeaders(
    season: string,
    seasonType: 'Regular' | 'Playoffs'
  ) {
    const bestPlusMinusLeaders = await this.repo.find({
      select: {
        id: true,
        team_name: true,
        plus_minus: true,
        player_id: {
          id: true,
          firstname: true,
          lastname: true,
          nhl_id: true,
          isgoalie: true,
        },
      },
      relations: ['player_id'],
      where: {
        playing_year: season,
        season_type: seasonType,
      },
      order: {
        plus_minus: 'DESC',
      },
      take: 10,
    });

    const bestPlusMinusLeadersWithTeamInfo = await this.setTeamInfo(
      bestPlusMinusLeaders
    );

    return bestPlusMinusLeadersWithTeamInfo;
  }

  private async getblockedShotLeaders(
    season: string,
    seasonType: 'Regular' | 'Playoffs'
  ) {
    const blockedShotLeaders = await this.repo.find({
      select: {
        id: true,
        team_name: true,
        blocked_shots: true,
        player_id: {
          id: true,
          firstname: true,
          lastname: true,
          nhl_id: true,
          isgoalie: true,
        },
      },
      relations: ['player_id'],
      where: {
        playing_year: season,
        season_type: seasonType,
      },
      order: {
        blocked_shots: 'DESC',
      },
      take: 10,
    });

    const blockedShotLeadersWithTeamInfo = await this.setTeamInfo(
      blockedShotLeaders
    );

    return blockedShotLeadersWithTeamInfo;
  }

  private async getCurrSteakLeaders(
    season: string,
    seasonType: 'Regular' | 'Playoffs'
  ) {
    const currStreakLeaders = await this.repo.find({
      select: {
        id: true,
        team_name: true,
        current_points_streak: true,
        player_id: {
          id: true,
          firstname: true,
          lastname: true,
          nhl_id: true,
          isgoalie: true,
        },
      },
      relations: ['player_id'],
      where: {
        playing_year: season,
        season_type: seasonType,
      },
      order: {
        current_points_streak: 'DESC',
      },
      take: 10,
    });

    const currStreakLeadersWithTeamInfo = await this.setTeamInfo(
      currStreakLeaders
    );

    return currStreakLeadersWithTeamInfo;
  }

  private async getDefenseLeaders(
    season: string,
    seasonType: 'Regular' | 'Playoffs'
  ) {
    const defenseLeaders = await this.repo.find({
      select: {
        id: true,
        team_name: true,
        points: true,
        player_id: {
          id: true,
          firstname: true,
          lastname: true,
          nhl_id: true,
          isgoalie: true,
          isdefense: true,
        },
      },
      relations: ['player_id'],
      where: {
        playing_year: season,
        season_type: seasonType,
        player_id: {
          isdefense: true,
        },
      },
      order: {
        points: 'DESC',
      },
      take: 10,
    });

    const defenseLeadersWithTeamInfo = await this.setTeamInfo(defenseLeaders);

    return defenseLeadersWithTeamInfo;
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
