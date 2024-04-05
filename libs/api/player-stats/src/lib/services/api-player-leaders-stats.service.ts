import { Players_Stats_V2, Teams_V2 } from '@api/entities';
import {
  StatPlayerLeaderDto,
  StatPlayerLeadersDto,
} from '@cha/shared/entities';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MoreThanOrEqual, Repository } from 'typeorm';
import { ApiPlayerNhlStatsService } from './api-player-nhl-stats.service';

@Injectable()
export class ApiPlayerLeadersStatsService {
  constructor(
    @InjectRepository(Players_Stats_V2)
    private repo: Repository<Players_Stats_V2>,
    @InjectRepository(Teams_V2)
    private teamInfoRepo: Repository<Teams_V2>,
    private nhlStatsService: ApiPlayerNhlStatsService
  ) {}

  async getPlayerStatsLeaders(
    season: string,
    seasonType: 'Regular' | 'Playoffs',
    minGamesStats: number
  ): Promise<StatPlayerLeadersDto> {
    const hitsLeaders = await this.getHitsLeaders(season, seasonType);
    const pointsLeaders = await this.getPointsLeaders(season, seasonType);
    const pointsAboveExpectedLeaders = await this.getPointsAboveExpectedLeaders(season);
    const assistLeaders = await this.getAssistLeaders(season, seasonType);
    const bestPlusMinusLeaders = await this.getBestPlusMinusLeaders(
      season,
      seasonType
    );
    const worstPlusMinusLeaders = await this.getWorstPlusMinusLeaders(
      season,
      seasonType
    );
    const blockedShotLeaders = await this.getblockedShotLeaders(
      season,
      seasonType
    );
    const currSteakLeaders = await this.getCurrSteakLeaders(season, seasonType);
    const defenseLeaders = await this.getDefenseLeaders(season, seasonType);
    const goalLeaders = await this.getGoalLeaders(season, seasonType);
    const longStreakLeaders = await this.getLongStreakLeaders(
      season,
      seasonType
    );
    const minutesLeaders = await this.getMinutesLeaders(season, seasonType);
    const penaltyLeaders = await this.getPenaltyLeaders(season, seasonType);
    const ppGoalsLeaders = await this.getPpgoalsLeaders(season, seasonType);
    const gwGoalsLeaders = await this.getGwgoalsLeaders(season, seasonType);
    const rookieLeaders = await this.getRookieLeaders(season, seasonType);
    const rookieGoalLeaders = await this.getRookieGoalsLeaders(
      season,
      seasonType
    );
    const shGoalsLeaders = await this.getShGoalsLeaders(season, seasonType);
    const shotsLeaders = await this.getShotsLeaders(season, seasonType);
    const defenseGoalLeaders = await this.getDefenseGoalLeaders(
      season,
      seasonType
    );
    const faceOffLeaders = await this.getFaceOffLeaders(
      season,
      seasonType,
      minGamesStats
    );
    const shootingLeaders = await this.getShootingLeaders(
      season,
      seasonType,
      minGamesStats
    );
    const passingLeaders = await this.getPassingLeaders(
      season,
      seasonType,
      minGamesStats
    );

    const cornersLeaders = await this.getCornersLeaders(
      season,
      seasonType,
      minGamesStats
    );

    return {
      hits: hitsLeaders as unknown as StatPlayerLeaderDto[],
      points: pointsLeaders as unknown as StatPlayerLeaderDto[],
      assists: assistLeaders as unknown as StatPlayerLeaderDto[],
      bestPlusMinus: bestPlusMinusLeaders as unknown as StatPlayerLeaderDto[],
      worstPlusMinus: worstPlusMinusLeaders as unknown as StatPlayerLeaderDto[],
      blockedShots: blockedShotLeaders as unknown as StatPlayerLeaderDto[],
      currStreak: currSteakLeaders as unknown as StatPlayerLeaderDto[],
      defense: defenseLeaders as unknown as StatPlayerLeaderDto[],
      defenseGoals: defenseGoalLeaders as unknown as StatPlayerLeaderDto[],
      goals: goalLeaders as unknown as StatPlayerLeaderDto[],
      longStreak: longStreakLeaders as unknown as StatPlayerLeaderDto[],
      minutes: minutesLeaders as unknown as StatPlayerLeaderDto[],
      penalties: penaltyLeaders as unknown as StatPlayerLeaderDto[],
      ppGoals: ppGoalsLeaders as unknown as StatPlayerLeaderDto[],
      gwGoals: gwGoalsLeaders as unknown as StatPlayerLeaderDto[],
      rookies: rookieLeaders as unknown as StatPlayerLeaderDto[],
      rookieGoals: rookieGoalLeaders as unknown as StatPlayerLeaderDto[],
      shGoals: shGoalsLeaders as unknown as StatPlayerLeaderDto[],
      shots: shotsLeaders as unknown as StatPlayerLeaderDto[],
      faceoffs: faceOffLeaders as unknown as StatPlayerLeaderDto[],
      shooting: shootingLeaders as unknown as StatPlayerLeaderDto[],
      passing: passingLeaders as unknown as StatPlayerLeaderDto[],
      corners: cornersLeaders as unknown as StatPlayerLeaderDto[],
      pointsAboveExpected: pointsAboveExpectedLeaders as unknown as StatPlayerLeaderDto[]
    };
  }

  private async getCornersLeaders(
    season: string,
    seasonType: 'Regular' | 'Playoffs',
    minGamesStats: number
  ) {
    const cornersLeaders = await this.repo.find({
      select: {
        id: true,
        corner_pct: true,
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
        corner_total: MoreThanOrEqual(minGamesStats),
      },
      order: {
        corner_pct: 'DESC',
      },
      take: 10,
    });

    const cornersLeadersWithTeamInfo = await this.setTeamInfo(cornersLeaders);

    return cornersLeadersWithTeamInfo;
  }

  private async getPassingLeaders(
    season: string,
    seasonType: 'Regular' | 'Playoffs',
    minGamesStats: number
  ) {
    const passingLeaders = await this.repo.find({
      select: {
        id: true,
        pass_pct: true,
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
        pass_attempts: MoreThanOrEqual(minGamesStats),
      },
      order: {
        pass_pct: 'DESC',
      },
      take: 10,
    });

    const passingLeadersWithTeamInfo = await this.setTeamInfo(passingLeaders);

    return passingLeadersWithTeamInfo;
  }

  private async getShootingLeaders(
    season: string,
    seasonType: 'Regular' | 'Playoffs',
    minGamesStats: number
  ) {
    const qualifiedShootingLeaders = await this.repo.find({
      select: {
        id: true,
        shooting_pct: true,
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
        shots: MoreThanOrEqual(minGamesStats),
      },
    });

    const shootingLeaders = await this.setShootingLeaders(
      qualifiedShootingLeaders
    );

    const shootingLeadersSorted = shootingLeaders
      .sort((a, b) => b.shooting_pct - a.shooting_pct)
      .slice(0, 10);

    const shootingLeadersWithTeamInfo = await this.setTeamInfo(
      shootingLeadersSorted
    );

    return shootingLeadersWithTeamInfo;
  }

  private async getFaceOffLeaders(
    season: string,
    seasonType: 'Regular' | 'Playoffs',
    minGamesStats: number
  ) {
    const faceOffLeaders = await this.repo.find({
      select: {
        id: true,
        fo_pct: true,
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
        fo_won: MoreThanOrEqual(minGamesStats),
      },
      order: {
        fo_pct: 'DESC',
      },
      take: 10,
    });

    const faceOffLeadersWithTeamInfo = await this.setTeamInfo(faceOffLeaders);

    return faceOffLeadersWithTeamInfo;
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

  private async getPointsAboveExpectedLeaders(season: string) {
    const chaPlayerPoints = await this.repo.find({
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
        season_type: 'Regular',
      },
      order: {
        points: 'DESC',
      },
    });

    await chaPlayerPoints.map(async (player) => {
      return {
        ...player,
        nhlPoints: await this.nhlStatsService.getNhlPlayerPointsByPlayerId(Number(player.player_id.nhl_id), '20222023')
      }
    })

    return chaPlayerPoints;
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

  private async getWorstPlusMinusLeaders(
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
        plus_minus: 'ASC',
      },
      take: 10,
    });

    const bestPlusMinusLeadersWithTeamInfo = await this.setTeamInfo(
      bestPlusMinusLeaders
    );

    return bestPlusMinusLeadersWithTeamInfo;
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

  private async getDefenseGoalLeaders(
    season: string,
    seasonType: 'Regular' | 'Playoffs'
  ) {
    const defenseGoalLeaders = await this.repo.find({
      select: {
        id: true,
        team_name: true,
        goals: true,
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
        goals: 'DESC',
      },
      take: 10,
    });

    const defenseLeadersWithTeamInfo = await this.setTeamInfo(
      defenseGoalLeaders
    );

    return defenseLeadersWithTeamInfo;
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

  private async getGoalLeaders(
    season: string,
    seasonType: 'Regular' | 'Playoffs'
  ) {
    const goalLeaders = await this.repo.find({
      select: {
        id: true,
        team_name: true,
        goals: true,
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
        goals: 'DESC',
      },
      take: 10,
    });

    const goalLeadersWithTeamInfo = await this.setTeamInfo(goalLeaders);

    return goalLeadersWithTeamInfo;
  }

  private async getLongStreakLeaders(
    season: string,
    seasonType: 'Regular' | 'Playoffs'
  ) {
    const longStreakLeaders = await this.repo.find({
      select: {
        id: true,
        team_name: true,
        longest_points_streak: true,
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
        longest_points_streak: 'DESC',
      },
      take: 10,
    });

    const longStreakLeadersWithTeamInfo = await this.setTeamInfo(
      longStreakLeaders
    );

    return longStreakLeadersWithTeamInfo;
  }

  private async getMinutesLeaders(
    season: string,
    seasonType: 'Regular' | 'Playoffs'
  ) {
    const minutesLeaders = await this.repo.find({
      select: {
        id: true,
        team_name: true,
        minutes_played: true,
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
        minutes_played: 'DESC',
      },
      take: 10,
    });

    const minutesLeadersWithTeamInfo = await this.setTeamInfo(minutesLeaders);

    return minutesLeadersWithTeamInfo;
  }

  private async getPenaltyLeaders(
    season: string,
    seasonType: 'Regular' | 'Playoffs'
  ) {
    const penaltyLeaders = await this.repo.find({
      select: {
        id: true,
        team_name: true,
        penalty_minutes: true,
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
        penalty_minutes: 'DESC',
      },
      take: 10,
    });

    const penaltyLeadersWithTeamInfo = await this.setTeamInfo(penaltyLeaders);

    return penaltyLeadersWithTeamInfo;
  }

  private async getGwgoalsLeaders(
    season: string,
    seasonType: 'Regular' | 'Playoffs'
  ) {
    const ppGoalsLeaders = await this.repo.find({
      select: {
        id: true,
        team_name: true,
        gw_goals: true,
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
        gw_goals: 'DESC',
      },
      take: 10,
    });

    const ppGoalsLeadersWithTeamInfo = await this.setTeamInfo(ppGoalsLeaders);

    return ppGoalsLeadersWithTeamInfo;
  }

  private async getPpgoalsLeaders(
    season: string,
    seasonType: 'Regular' | 'Playoffs'
  ) {
    const ppGoalsLeaders = await this.repo.find({
      select: {
        id: true,
        team_name: true,
        pp_goals: true,
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
        pp_goals: 'DESC',
      },
      take: 10,
    });

    const ppGoalsLeadersWithTeamInfo = await this.setTeamInfo(ppGoalsLeaders);

    return ppGoalsLeadersWithTeamInfo;
  }

  private async getRookieGoalsLeaders(
    season: string,
    seasonType: 'Regular' | 'Playoffs'
  ) {
    const rookieLeaders = await this.repo.find({
      select: {
        id: true,
        team_name: true,
        goals: true,
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
        player_status: 'Rookie',
      },
      order: {
        goals: 'DESC',
      },
      take: 10,
    });

    const rookieLeadersWithTeamInfo = await this.setTeamInfo(rookieLeaders);

    return rookieLeadersWithTeamInfo;
  }

  private async getRookieLeaders(
    season: string,
    seasonType: 'Regular' | 'Playoffs'
  ) {
    const rookieLeaders = await this.repo.find({
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
        player_status: 'Rookie',
      },
      order: {
        points: 'DESC',
      },
      take: 10,
    });

    const rookieLeadersWithTeamInfo = await this.setTeamInfo(rookieLeaders);

    return rookieLeadersWithTeamInfo;
  }

  private async getShGoalsLeaders(
    season: string,
    seasonType: 'Regular' | 'Playoffs'
  ) {
    const shGoalsLeaders = await this.repo.find({
      select: {
        id: true,
        team_name: true,
        sh_goals: true,
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
        sh_goals: 'DESC',
      },
      take: 10,
    });

    const shGoalsLeadersWithTeamInfo = await this.setTeamInfo(shGoalsLeaders);

    return shGoalsLeadersWithTeamInfo;
  }

  private async getShotsLeaders(
    season: string,
    seasonType: 'Regular' | 'Playoffs'
  ) {
    const shotsLeaders = await this.repo.find({
      select: {
        id: true,
        team_name: true,
        shots: true,
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
        shots: 'DESC',
      },
      take: 10,
    });

    const shotsLeadersWithTeamInfo = await this.setTeamInfo(shotsLeaders);

    return shotsLeadersWithTeamInfo;
  }

  private async setShootingLeaders(array: Players_Stats_V2[]) {
    return await Promise.all(
      array.map(async (item) => ({
        ...item,
        shooting_pct: Number(item.shooting_pct),
      }))
    );
  }

  private async setTeamInfo(array: any[]) {
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
