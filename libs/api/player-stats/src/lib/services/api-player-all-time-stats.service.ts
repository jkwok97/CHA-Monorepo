import { Players_Stats_V2, Teams_V2 } from '@api/entities';
import { StatPlayersHistoryDto } from '@cha/shared/entities';
import { Injectable } from '@nestjs/common';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { DataSource, In, Repository } from 'typeorm';

const CACHE_TTL_MS = 10 * 60 * 1000;

@Injectable()
export class ApiPlayerAllTimeStatsService {
  private cache = new Map<
    string,
    { expires: number; data: Promise<StatPlayersHistoryDto[]> }
  >();

  constructor(
    @InjectRepository(Players_Stats_V2)
    private repo: Repository<Players_Stats_V2>,
    @InjectRepository(Teams_V2)
    private teamInfoRepo: Repository<Teams_V2>,
    @InjectDataSource() private dataSource: DataSource
  ) {}

  getAllTimePlayerStatsBySeasonByType(
    seasonType: 'Regular' | 'Playoffs'
  ): Promise<StatPlayersHistoryDto[]> {
    return this.cached(`bySeason:${seasonType}`, async () => {
      const allStats = await this.repo.find({
        select: {
          id: true,
          team_name: true,
          position: true,
          games_played: true,
          goals: true,
          assists: true,
          points: true,
          plus_minus: true,
          penalty_minutes: true,
          pp_goals: true,
          sh_goals: true,
          gw_goals: true,
          shots: true,
          shooting_pct: true,
          minutes_played: true,
          minutes_per_game: true,
          fo_pct: true,
          pass_pct: true,
          corner_pct: true,
          hit_per_game: true,
          blocked_shots: true,
          playing_year: true,
          player_id: {
            id: true,
            firstname: true,
            lastname: true,
            nhl_id: true,
            isdefense: true,
            isforward: true,
          },
        },
        relations: ['player_id'],
        where: {
          season_type: seasonType,
        },
        take: 1500,
        order: {
          points: 'DESC',
        },
      });

      const allStatsWithTeamInfo = await this.setTeamInfo(allStats);

      return this.convertStats(allStatsWithTeamInfo, false);
    });
  }

  getAllTimePlayerStatsSummedBySeasonByType(
    seasonType: 'Regular' | 'Playoffs'
  ): Promise<StatPlayersHistoryDto[]> {
    return this.cached(`summed:${seasonType}`, async () => {
      const result = await this.dataSource.query(
        `select
        b.firstname as firstname,
        b.lastname as lastname,
        b.isdefense as isdefense,
        b.isforward as isforward,
        b.isgoalie as isgoalie,
        b.nhl_id as nhl_id,
        a.player_id as player_id,
        a.season_type as season_type,
        a.position as position,
        sum(a.games_played) as games_played,
        sum(a.goals) as goals,
        sum(a.assists) as assists,
        sum(a.points) as points,
        sum(a.plus_minus) as plus_minus,
        sum(a.penalty_minutes) as penalty_minutes,
        sum(a.sh_goals) as sh_goals,
        sum(a.pp_goals) as pp_goals,
        sum(a.gw_goals) as gw_goals,
        sum(a.shots) as shots,
        sum(a.minutes_played) as minutes_played,
        sum(a.hits) as hits,
        sum(a.blocked_shots) as blocked_shots
        from players_stats_v2 as a
        join players_v2 as b on b.id = a.player_id
        where a.points > 0
          and a.season_type = $1
        group by b.firstname, b.lastname, b.isgoalie, b.isdefense, b.isforward, b.nhl_id, a.player_id, a.season_type, a.position
        order by points DESC`,
        [seasonType]
      );

      return this.convertStats(result, true);
    });
  }

  // Results only change when stats are loaded, so share them between requests
  private cached(
    key: string,
    load: () => Promise<StatPlayersHistoryDto[]>
  ): Promise<StatPlayersHistoryDto[]> {
    const hit = this.cache.get(key);

    if (hit && hit.expires > Date.now()) {
      return hit.data;
    }

    const data = load().catch((err) => {
      this.cache.delete(key); // don't cache failures
      throw err;
    });

    this.cache.set(key, { expires: Date.now() + CACHE_TTL_MS, data });

    return data;
  }

  // One query for all teams instead of one per row
  private async setTeamInfo(array: Players_Stats_V2[]) {
    const teamNames = [
      ...new Set(array.map((item) => item.team_name).filter(Boolean)),
    ];

    const teams = teamNames.length
      ? await this.teamInfoRepo.find({
          select: {
            id: true,
            city: true,
            teamlogo: true,
            nickname: true,
            shortname: true,
          },
          where: { shortname: In(teamNames) },
        })
      : [];

    const teamByName = new Map<string, any>();
    for (const { shortname, ...team } of teams) {
      if (!teamByName.has(shortname)) teamByName.set(shortname, team);
    }

    return array.map((item) => ({
      ...item,
      teamInfo: teamByName.get(item.team_name) ?? null,
    }));
  }

  private convertStats(array: any[], raw: boolean) {
    return array.map((stat: any) => ({
      playing_year: stat.playing_year,
      season_type: stat.season_type,
      teamInfo: !raw ? stat['teamInfo'] : null,
      player_id: !raw
        ? stat.player_id
        : {
            id: stat['player_id'],
            firstname: stat['firstname'],
            lastname: stat['lastname'],
            nhl_id: stat['nhl_id'],
            isactive: null,
            isgoalie: null,
            isdefense: stat['isdefense'],
            isforward: stat['isforward'],
            is_protected: null,
          },
      position: stat.position,
      games_played: Number(stat.games_played),
      goals: Number(stat.goals),
      assists: Number(stat.assists),
      points: Number(stat.points),
      pointsPerSixty: Number(
        ((Number(stat.points) / Number(stat.minutes_played)) * 60).toFixed(2)
      ),
      plus_minus: Number(stat.plus_minus),
      penalty_minutes: Number(stat.penalty_minutes),
      pp_goals: Number(stat.pp_goals),
      sh_goals: Number(stat.sh_goals),
      gw_goals: Number(stat.gw_goals),
      shots: Number(stat.shots),
      shooting_pct: !raw
        ? Number(stat.shooting_pct)
        : Number(((Number(stat.goals) / Number(stat.shots)) * 100).toFixed(1)),
      minutes_per_game: !raw
        ? Number(stat.minutes_per_game)
        : Number(
            (Number(stat.minutes_played) / Number(stat.games_played)).toFixed(1)
          ),
      fo_pct: !raw ? Number(stat.fo_pct) : null,
      pass_pct: !raw ? Number(stat.pass_pct) : null,
      corner_pct: !raw ? Number(stat.corner_pct) : null,
      hit_per_game: !raw
        ? Number(stat.hit_per_game)
        : Number((Number(stat.hits) / Number(stat.games_played)).toFixed(1)),
      blocked_shots: Number(stat.blocked_shots),
    }));
  }
}
