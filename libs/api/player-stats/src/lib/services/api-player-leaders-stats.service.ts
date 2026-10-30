import {
  NhlPlayerStatsV2,
  Players_Stats_V2,
  SeasonTotal,
  Teams_V2,
} from '@api/entities';
import {
  StatPlayerLeaderDto,
  StatPlayerLeadersDto,
} from '@cha/shared/entities';
import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOptionsWhere, In, MoreThanOrEqual, Repository } from 'typeorm';
import { firstValueFrom } from 'rxjs';
import { HttpService } from '@nestjs/axios';

const COMMON_PLAYER_SELECT = {
  id: true,
  team_name: true,
  player_id: {
    id: true,
    firstname: true,
    lastname: true,
    nhl_id: true,
    isgoalie: true,
  },
} as const;

@Injectable()
export class ApiPlayerLeadersStatsService {
  private readonly logger = new Logger(ApiPlayerLeadersStatsService.name);
  private readonly nhlAPI = 'https://api-web.nhle.com/v2/player';

  constructor(
    @InjectRepository(Players_Stats_V2)
    private readonly repo: Repository<Players_Stats_V2>,
    @InjectRepository(Teams_V2)
    private readonly teamInfoRepo: Repository<Teams_V2>,
    private readonly httpService: HttpService
  ) {}

  async getPlayerStatsLeaders(
    season: string,
    seasonType: 'Regular' | 'Playoffs',
    minGamesStats: number
  ): Promise<StatPlayerLeadersDto> {
    const [
      hits,
      points,
      assists,
      bestPlusMinus,
      worstPlusMinus,
      blockedShots,
      currStreak,
      defense,
      defenseGoals,
      goals,
      longStreak,
      minutes,
      penalties,
      ppGoals,
      gwGoals,
      rookies,
      rookieGoals,
      shGoals,
      shots,
      faceoffs,
      shooting,
      passing,
      corners,
    ] = await Promise.all([
      this.getTopLeaders(season, seasonType, 'hits', 'DESC'),
      this.getTopLeaders(season, seasonType, 'points', 'DESC'),
      this.getTopLeaders(season, seasonType, 'assists', 'DESC'),
      this.getTopLeaders(season, seasonType, 'plus_minus', 'DESC'),
      this.getTopLeaders(season, seasonType, 'plus_minus', 'ASC'),
      this.getTopLeaders(season, seasonType, 'blocked_shots', 'DESC'),
      this.getTopLeaders(season, seasonType, 'current_points_streak', 'DESC'),
      this.getTopLeaders(season, seasonType, 'points', 'DESC', {
        player_id: { isdefense: true },
      }),
      this.getTopLeaders(season, seasonType, 'goals', 'DESC', {
        player_id: { isdefense: true },
      }),
      this.getTopLeaders(season, seasonType, 'goals', 'DESC'),
      this.getTopLeaders(season, seasonType, 'longest_points_streak', 'DESC'),
      this.getTopLeaders(season, seasonType, 'minutes_played', 'DESC'),
      this.getTopLeaders(season, seasonType, 'penalty_minutes', 'DESC'),
      this.getTopLeaders(season, seasonType, 'pp_goals', 'DESC'),
      this.getTopLeaders(season, seasonType, 'gw_goals', 'DESC'),
      this.getTopLeaders(season, seasonType, 'points', 'DESC', {
        player_status: 'Rookie',
      }),
      this.getTopLeaders(season, seasonType, 'goals', 'DESC', {
        player_status: 'Rookie',
      }),
      this.getTopLeaders(season, seasonType, 'sh_goals', 'DESC'),
      this.getTopLeaders(season, seasonType, 'shots', 'DESC'),
      this.getTopLeaders(season, seasonType, 'fo_pct', 'DESC', {
        fo_won: MoreThanOrEqual(minGamesStats),
      }),
      this.getShootingLeaders(season, seasonType, minGamesStats),
      this.getTopLeaders(season, seasonType, 'pass_pct', 'DESC', {
        pass_attempts: MoreThanOrEqual(minGamesStats),
      }),
      this.getTopLeaders(season, seasonType, 'corner_pct', 'DESC', {
        corner_total: MoreThanOrEqual(minGamesStats),
      }),
    ]);

    const allResults = [
      ...hits,
      ...points,
      ...assists,
      ...bestPlusMinus,
      ...worstPlusMinus,
      ...blockedShots,
      ...currStreak,
      ...defense,
      ...defenseGoals,
      ...goals,
      ...longStreak,
      ...minutes,
      ...penalties,
      ...ppGoals,
      ...gwGoals,
      ...rookies,
      ...rookieGoals,
      ...shGoals,
      ...shots,
      ...faceoffs,
      ...shooting,
      ...passing,
      ...corners,
    ];

    const uniqueTeamNames = Array.from(
      new Set(allResults.map((r) => r.team_name).filter(Boolean))
    );

    const teams = uniqueTeamNames.length
      ? await this.teamInfoRepo.find({
          select: {
            id: true,
            city: true,
            teamlogo: true,
            nickname: true,
            shortname: true,
          },
          where: { shortname: In(uniqueTeamNames) },
        })
      : [];

    const teamMap = new Map(teams.map((team) => [team.shortname, team]));

    const attachTeamInfo = <T extends { team_name: string }>(items: T[]) =>
      items.map((item) => ({
        ...item,
        teamInfo: teamMap.get(item.team_name) ?? null,
      })) as unknown as StatPlayerLeaderDto[];

    return {
      hits: attachTeamInfo(hits),
      points: attachTeamInfo(points),
      assists: attachTeamInfo(assists),
      bestPlusMinus: attachTeamInfo(bestPlusMinus),
      worstPlusMinus: attachTeamInfo(worstPlusMinus),
      blockedShots: attachTeamInfo(blockedShots),
      currStreak: attachTeamInfo(currStreak),
      defense: attachTeamInfo(defense),
      defenseGoals: attachTeamInfo(defenseGoals),
      goals: attachTeamInfo(goals),
      longStreak: attachTeamInfo(longStreak),
      minutes: attachTeamInfo(minutes),
      penalties: attachTeamInfo(penalties),
      ppGoals: attachTeamInfo(ppGoals),
      gwGoals: attachTeamInfo(gwGoals),
      rookies: attachTeamInfo(rookies),
      rookieGoals: attachTeamInfo(rookieGoals),
      shGoals: attachTeamInfo(shGoals),
      shots: attachTeamInfo(shots),
      faceoffs: attachTeamInfo(faceoffs),
      shooting: attachTeamInfo(shooting),
      passing: attachTeamInfo(passing),
      corners: attachTeamInfo(corners),
      pointsAboveExpected: [],
      pointsBelowExpected: [],
    };
  }

  private async getTopLeaders(
    season: string,
    seasonType: 'Regular' | 'Playoffs',
    statField: keyof Players_Stats_V2,
    orderDirection: 'ASC' | 'DESC',
    extraWhere: FindOptionsWhere<Players_Stats_V2> = {},
    limit = 10
  ): Promise<Players_Stats_V2[]> {
    return this.repo.find({
      select: {
        ...COMMON_PLAYER_SELECT,
        [statField]: true,
      } as any,
      relations: {
        player_id: true,
      },
      where: {
        playing_year: season,
        season_type: seasonType,
        ...extraWhere,
      },
      order: {
        [statField]: orderDirection,
      } as any,
      take: limit,
    });
  }

  private async getShootingLeaders(
    season: string,
    seasonType: 'Regular' | 'Playoffs',
    minShots: number
  ): Promise<Players_Stats_V2[]> {
    return this.repo
      .createQueryBuilder('stats')
      .leftJoinAndSelect('stats.player_id', 'player')
      .orderBy('CAST(stats.shooting_pct AS FLOAT)', 'DESC')
      .where('stats.playing_year = :season', { season })
      .andWhere('stats.season_type = :seasonType', { seasonType })
      .andWhere('stats.shots >= :minShots', { minShots })
      .take(10)
      .getMany();
  }
}
