import { Goalies_Stats_V2, Teams_V2 } from '@api/entities';
import {
  StatGoalieLeaderDto,
  StatGoalieLeadersDto,
} from '@cha/shared/entities';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOptionsWhere, In, MoreThanOrEqual, Repository } from 'typeorm';

const COMMON_GOALIE_SELECT = {
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
export class ApiGoalieStatsLeadersService {
  constructor(
    @InjectRepository(Goalies_Stats_V2)
    private readonly repo: Repository<Goalies_Stats_V2>,
    @InjectRepository(Teams_V2)
    private readonly teamInfoRepo: Repository<Teams_V2>
  ) {}

  async getGoalieStatsLeaders(
    season: string,
    seasonType: 'Regular' | 'Playoffs',
    minGames: string
  ): Promise<StatGoalieLeadersDto> {
    const minGamesNum = Number(minGames) || 0;
    const minGamesFilter: FindOptionsWhere<Goalies_Stats_V2> = {
      games_played: MoreThanOrEqual(minGamesNum),
    };

    const [shotsFaced, gaa, savePct, shutouts, wins] = await Promise.all([
      this.getLeaders(season, seasonType, 'shots_for', 'DESC', minGamesFilter),
      this.getLeaders(
        season,
        seasonType,
        'goals_against_avg',
        'ASC',
        minGamesFilter
      ),
      this.getLeaders(season, seasonType, 'save_pct', 'DESC', minGamesFilter),
      this.getLeaders(season, seasonType, 'shutouts', 'DESC'),
      this.getLeaders(season, seasonType, 'wins', 'DESC'),
    ]);

    const allResults = [
      ...shotsFaced,
      ...gaa,
      ...savePct,
      ...shutouts,
      ...wins,
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
          where: {
            shortname: In(uniqueTeamNames),
          },
        })
      : [];

    const teamMap = new Map(teams.map((team) => [team.shortname, team]));

    const attachTeamInfo = (leaders: Goalies_Stats_V2[]) =>
      leaders.map((item) => ({
        ...item,
        teamInfo: teamMap.get(item.team_name) ?? null,
      })) as unknown as StatGoalieLeaderDto[];

    return {
      shotsFaced: attachTeamInfo(shotsFaced),
      gaa: attachTeamInfo(gaa),
      savePct: attachTeamInfo(savePct),
      shutouts: attachTeamInfo(shutouts),
      wins: attachTeamInfo(wins),
    };
  }

  private async getLeaders(
    season: string,
    seasonType: 'Regular' | 'Playoffs',
    statField: keyof Goalies_Stats_V2,
    orderDirection: 'ASC' | 'DESC',
    extraWhere: FindOptionsWhere<Goalies_Stats_V2> = {},
    limit = 10
  ): Promise<Goalies_Stats_V2[]> {
    return this.repo.find({
      select: {
        ...COMMON_GOALIE_SELECT,
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
}
