import { Goalies_Stats_V2, Players_Stats_V2, Teams_V2 } from '@api/entities';
import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AxiosResponse } from 'axios';
import { map, Observable, switchMap } from 'rxjs';
import { Repository } from 'typeorm';

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
  nhlAPI = 'https://api-web.nhle.com/v1/player';
  nhlComSummary = 'https://api.nhle.com/stats/rest/en';
  nhlComLeaders = 'https://api.nhle.com/stats/rest/en/leaders';
  sportsNet = 'https://mobile-statsv2.sportsnet.ca/web_player_table';

  getNhlLeaders(
    playerType: string,
    statType: string,
    season: string
  ): Observable<any[]> {
    const leaders = this.httpService
      .get(
        `${this.nhlComLeaders}/${playerType}s/${statType}?cayenneExp=season=${season}%20and%20gameType=2`
      )
      .pipe(
        map((response) => response.data),
        switchMap((response) => this.setChaTeamInfo(response.data, season, 'p'))
      );

    return leaders;
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
    const leaders = this.httpService
      .get(
        `${this.sportsNet}?league=nhl&season=${season}&season_type=${seasonType}`
      )
      .pipe(
        map((response) => response.data),
        switchMap((response) =>
          this.setChaTeamInfoForSportsnet(response.data, season)
        )
      );

    return leaders;
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
  ): Observable<AxiosResponse<any[]>> {
    return this.httpService
      .get(`${this.nhlAPI}/${playerId}/landing`)
      .pipe(
        map((response) => response.data.featuredStats.regularSeason?.subSeason)
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
    const string1 = season.slice(2, 4);

    const newSeasonString = `${season}-${Number(string1) + 1}`;

    return (statObject = {
      player_stats: {
        skaters: await Promise.all(
          statObject.player_stats.skaters.map(async (skater) => ({
            ...skater,
            chaPlayerTeam: await this.getChaTeamSportsnet(
              skater.player_id,
              newSeasonString,
              'p'
            ),
          }))
        ),
        goalies: await Promise.all(
          statObject.player_stats.goalies.map(async (skater) => ({
            ...skater,
            chaPlayerTeam: await this.getChaTeamSportsnet(
              skater.player_id,
              newSeasonString,
              'g'
            ),
          }))
        ),
      },
    });
  }

  private async setChaTeamInfo(array: any[], season: string, type: string) {
    const string1 = season.slice(0, 4);
    const string2 = season.slice(6, 8);

    const newSeasonString = `${string1}-${string2}`;

    return await Promise.all(
      array.map(async (item) => ({
        ...item,
        chaPlayerTeam: await this.getChaTeam(
          item.player.id,
          newSeasonString,
          type
        ),
      }))
    );
  }

  private async setChaTeamInfoRookies(array: any[], season: string) {
    const string1 = season.slice(0, 4);
    const string2 = season.slice(6, 8);

    const newSeasonString = `${string1}-${string2}`;

    return await Promise.all(
      array.map(async (item) => ({
        ...item,
        chaPlayerTeam: await this.getChaTeam(
          item.playerId,
          newSeasonString,
          'p'
        ),
      }))
    );
  }

  private async getChaTeam(id: number, season: string, type: string) {
    let playerStatTeam;

    if (type === 'p') {
      playerStatTeam = await this.playerStatsRepo.findOne({
        select: {
          id: true,
          player_id: {
            id: true,
            nhl_id: true,
          },
          team_name: true,
        },
        where: {
          player_id: {
            nhl_id: id.toString(),
          },
          playing_year: season,
          season_type: 'Regular',
        },
      });
    } else {
      playerStatTeam = await this.goalieStatsRepo.findOne({
        select: {
          id: true,
          player_id: {
            id: true,
            nhl_id: true,
          },
          team_name: true,
        },
        where: {
          player_id: {
            nhl_id: id.toString(),
          },
          playing_year: season,
          season_type: 'Regular',
        },
      });
    }

    const playerStatTeamWithInfo = await this.getChaTeamInfo(playerStatTeam);

    return playerStatTeamWithInfo;
  }

  private async getChaTeamSportsnet(id: number, season: string, type: string) {
    let playerStatTeam;

    if (type === 'p') {
      playerStatTeam = await this.playerStatsRepo.findOne({
        select: {
          id: true,
          player_id: {
            id: true,
            sportsnet_id: true,
          },
          team_name: true,
        },
        where: {
          player_id: {
            sportsnet_id: id.toString(),
          },
          playing_year: season,
          season_type: 'Regular',
        },
      });
    } else {
      playerStatTeam = await this.goalieStatsRepo.findOne({
        select: {
          id: true,
          player_id: {
            id: true,
            sportsnet_id: true,
          },
          team_name: true,
        },
        where: {
          player_id: {
            sportsnet_id: id.toString(),
          },
          playing_year: season,
          season_type: 'Regular',
        },
      });
    }

    const playerStatTeamWithInfo = await this.getChaTeamInfo(playerStatTeam);

    return playerStatTeamWithInfo;
  }

  private async getChaTeamInfo(playerStatTeam: Players_Stats_V2) {
    return this.teamsRepo.find({
      select: {
        id: true,
        teamlogo: true,
        city: true,
        nickname: true,
      },
      where: {
        shortname: playerStatTeam ? playerStatTeam.team_name : 'FA',
      },
    });
  }
}
