import {
  Goalies_Stats_V2,
  NhlPlayerStatsV2,
  Players_Stats_V2,
  SeasonTotal,
  Teams_V2,
} from '@api/entities';
import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { map, Observable, switchMap, tap } from 'rxjs';
import { In, Repository } from 'typeorm';

@Injectable()
export class ApiNhlService {
  constructor(
    private httpService: HttpService,
    @InjectRepository(Players_Stats_V2)
    private playerStatsRepo: Repository<Players_Stats_V2>,
    @InjectRepository(Goalies_Stats_V2)
    private goalieStatsRepo: Repository<Goalies_Stats_V2>,
    @InjectRepository(Teams_V2)
    private teamsRepo: Repository<Teams_V2>
  ) {}

  nhlCOM = 'https://api.nhle.com/stats/rest/en/season';
  nhlAPI = 'https://api-web.nhle.com/v2/player';
  nhlComSummary = 'https://api.nhle.com/stats/rest/en';
  nhlComLeaders = 'https://api.nhle.com/stats/rest/en/leaders';
  sportsNet = 'https://stats-api.sportsnet.ca/web_player_table';

  getNhlLeaders(playerType: string, statType: string, season: string) {
    const t = Date.now();
    return this.httpService
      .get(
        `${this.nhlComLeaders}/${playerType}s/${statType}?cayenneExp=season=${season}%20and%20gameType=2`,
        { timeout: 8000 }
      )
      .pipe(
        tap(() => console.log(`NHL API: ${Date.now() - t}ms`)),
        map((response) => response.data),
        switchMap((response) =>
          this.setChaTeamInfo(response.data, season, 'p')
        ),
        tap(() => console.log(`Total incl. DB: ${Date.now() - t}ms`))
      );
  }

  getNhlGoalieLeaders(
    playerType: string,
    statType: string,
    season: string,
    minGames: string
  ): Observable<any[]> {
    const leaders = this.httpService
      .get(
        `${this.nhlComLeaders}/${playerType}s/${statType}?cayenneExp=season=${season}%20and%20gameType=2%20and%20gamesPlayed%20%3E=%20${minGames}`
      )
      .pipe(
        map((response) => response.data),
        switchMap((response) => this.setChaTeamInfo(response.data, season, 'g'))
      );

    return leaders;
  }

  getNhlRookieLeaders(
    playerType: string,
    statType: string,
    season: string
  ): Observable<any[]> {
    const leaders = this.httpService
      .get(
        `${this.nhlComLeaders}/${playerType}s/${statType}?cayenneExp=season=${season}%20and%20gameType=2%20and%20isRookie%20=%20%27Y%27`
      )
      .pipe(
        map((response) => response.data),
        switchMap((response) => this.setChaTeamInfo(response.data, season, 'p'))
      );

    return leaders;
  }

  getNhlDefenseLeaders(
    playerType: string,
    statType: string,
    season: string
  ): Observable<any[]> {
    const leaders = this.httpService
      .get(
        `${this.nhlComLeaders}/${playerType}s/${statType}?cayenneExp=season=${season}%20and%20gameType=2%20and%20player.positionCode%20=%20%27D%27`
      )
      .pipe(
        map((response) => response.data),
        switchMap((response) => this.setChaTeamInfo(response.data, season, 'p'))
      );

    return leaders;
  }

  getNhlSummaryFromSportsnet(
    season: string,
    seasonType: string
  ): Observable<{ player_stats: { skaters: any[]; goalies: any[] } }> {
    return this.httpService
      .get(
        `${this.sportsNet}?league=nhl&season_year=${season}&season_type=${seasonType}`
      )
      .pipe(
        map((response) => response.data),
        switchMap((response) => {
          return this.setChaTeamInfoForSportsnet(response.data, season);
        })
      );
  }

  getNhlRookieSummary(
    season: string,
    player: string,
    statsType: string,
    sort: string,
    start: string,
    pageSize: string
  ): Observable<any[]> {
    const leaders = this.httpService
      .get(
        `${this.nhlComSummary}/${player}/summary?isAggregate=false&isGame=false&sort=%5B%7B%22property%22:%22${statsType}%22,%22direction%22:%22${sort}%22%7D,%7B%22property%22:%22gamesPlayed%22,%22direction%22:%22ASC%22%7D,%7B%22property%22:%22playerId%22,%22direction%22:%22ASC%22%7D%5D&start=${start}&limit=${pageSize}&factCayenneExp=gamesPlayed%3E=1&cayenneExp=gameTypeId=2%20and%20isRookie=%221%22%20and%20seasonId%3C=${season}%20and%20seasonId%3E=${season}`
      )
      .pipe(
        map((response) => response.data),
        switchMap((response) =>
          this.setChaTeamInfoRookies(response.data, season)
        )
      );

    return leaders;
  }

  getNhlPlayerStatsByPlayerId(
    playerId: number,
    season: string
  ): Observable<SeasonTotal | undefined> {
    return this.httpService
      .get<NhlPlayerStatsV2>(`${this.nhlAPI}/${playerId}/player-stats`)
      .pipe(
        map((response) =>
          response.data?.seasonTotals?.find(
            (s) =>
              s.season === Number(season) &&
              s.gameTypeId === 2 &&
              s.leagueAbbrev.default === 'NHL'
          )
        )
      );
  }

  private async setChaTeamInfoForSportsnet(
    statObject: {
      player_stats: {
        skaters: any[];
        goalies: any[];
      };
    },
    season: string
  ) {
    const newSeasonString = `${season}-${Number(season.slice(2, 4)) + 1}`;
    const { skaters, goalies } = statObject.player_stats;

    console.log(Object.keys(skaters[0]), skaters[0]);

    const [skaterTeams, goalieTeams] = await Promise.all([
      this.getChaTeamsByPlayerIds(
        skaters.map((s) => s.player_id),
        newSeasonString,
        'p',
        'sportsnet_id'
      ),
      this.getChaTeamsByPlayerIds(
        goalies.map((g) => g.player_id),
        newSeasonString,
        'g',
        'sportsnet_id'
      ),
    ]);

    return {
      player_stats: {
        skaters: skaters.map((s) => ({
          ...s,
          chaPlayerTeam: skaterTeams.get(String(s.player_id)) ?? [],
        })),
        goalies: goalies.map((g) => ({
          ...g,
          chaPlayerTeam: goalieTeams.get(String(g.player_id)) ?? [],
        })),
      },
    };
  }

  private async setChaTeamInfoRookies(
    array: any[],
    season: string
  ): Promise<any[]> {
    const newSeasonString = `${season.slice(0, 4)}-${season.slice(6, 8)}`;

    const teamsByNhlId = await this.getChaTeamsByPlayerIds(
      array.map((item) => item.playerId),
      newSeasonString,
      'p'
    );

    return array.map((item) => ({
      ...item,
      chaPlayerTeam: teamsByNhlId.get(String(item.playerId)) ?? [],
    }));
  }

  private async setChaTeamInfo(
    array: any[],
    season: string,
    type: string
  ): Promise<any[]> {
    const newSeasonString = `${season.slice(0, 4)}-${season.slice(6, 8)}`;

    const teamsByNhlId = await this.getChaTeamsByPlayerIds(
      array.map((item) => item.player.id),
      newSeasonString,
      type
    );

    return array.map((item) => ({
      ...item,
      chaPlayerTeam: teamsByNhlId.get(String(item.player.id)) ?? [],
    }));
  }

  private async getChaTeamsByPlayerIds(
    ids: (number | string)[],
    season: string,
    type: string,
    idField: 'nhl_id' | 'sportsnet_id' = 'nhl_id'
  ) {
    const repo = (
      type === 'p' ? this.playerStatsRepo : this.goalieStatsRepo
    ) as Repository<Players_Stats_V2>;

    const stringIds = ids.map(String);

    console.log(
      'lookup',
      type,
      idField,
      season,
      stringIds.slice(0, 5),
      stringIds.length
    );

    // Query 1: every player's team name in one go
    const stats = await repo.find({
      select: {
        id: true,
        team_name: true,
        player_id: { id: true, [idField]: true },
      } as any,
      relations: { player_id: true },
      where: {
        player_id: { [idField]: In(stringIds) },
        playing_year: season,
        season_type: 'Regular',
      } as any,
    });

    console.log(type, idField, stats.length, stats[0]?.player_id);

    const teamNameById = new Map(
      stats.map((s: any) => [String(s.player_id[idField]), s.team_name])
    );

    // Query 2: every distinct team in one go ('FA' for players with no row)
    const shortnames = [...new Set([...teamNameById.values(), 'FA'])];
    const teams = await this.teamsRepo.find({
      select: {
        id: true,
        teamlogo: true,
        city: true,
        nickname: true,
        shortname: true,
      },
      where: { shortname: In(shortnames) },
    });

    const teamsByShortname = new Map<string, any[]>();
    for (const { shortname, ...team } of teams) {
      teamsByShortname.set(shortname, [
        ...(teamsByShortname.get(shortname) ?? []),
        team,
      ]);
    }

    // Same output as before: an array of team rows per player
    const result = new Map<string, any[]>();
    for (const id of stringIds) {
      result.set(id, teamsByShortname.get(teamNameById.get(id) ?? 'FA') ?? []);
    }
    return result;
  }
}
