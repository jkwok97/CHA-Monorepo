import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { map, Observable } from 'rxjs';

@Injectable()
export class ApiNhlService {
  constructor(private httpService: HttpService) {}

  nhlCOM = 'https://api.nhle.com/stats/rest/en/leaders';
  nhlComSummary = 'https://api.nhle.com/stats/rest/en';
  sportsNet = 'https://mobile-statsv2.sportsnet.ca/web_player_table';

  getNhlLeaders(
    playerType: string,
    statType: string,
    season: string
  ): Observable<AxiosResponse<any[]>> {
    const leaders = this.httpService
      .get(
        `${this.nhlCOM}/${playerType}s/${statType}?cayenneExp=season=${season}%20and%20gameType=2`
      )
      .pipe(map((response) => response.data));

    return leaders;
  }

  getNhlGoalieLeaders(
    playerType: string,
    statType: string,
    season: string,
    minGames: string
  ): Observable<AxiosResponse<any[]>> {
    const leaders = this.httpService
      .get(
        `${this.nhlCOM}/${playerType}s/${statType}?cayenneExp=season=${season}%20and%20gameType=2%20and%20gamesPlayed%20%3E=%20${minGames}`
      )
      .pipe(map((response) => response.data));

    return leaders;
  }

  getNhlRookieLeaders(
    playerType: string,
    statType: string,
    season: string
  ): Observable<AxiosResponse<any[]>> {
    const leaders = this.httpService
      .get(
        `${this.nhlCOM}/${playerType}s/${statType}?cayenneExp=season=${season}%20and%20gameType=2%20and%20isRookie%20=%20%27Y%27`
      )
      .pipe(map((response) => response.data));

    return leaders;
  }

  getNhlDefenseLeaders(
    playerType: string,
    statType: string,
    season: string
  ): Observable<AxiosResponse<any[]>> {
    const leaders = this.httpService
      .get(
        `${this.nhlCOM}/${playerType}s/${statType}?cayenneExp=season=${season}%20and%20gameType=2%20and%20player.positionCode%20=%20%27D%27`
      )
      .pipe(map((response) => response.data));

    return leaders;
  }

  getNhlSummaryFromSportsnet(
    season: string,
    seasonType: string
  ): Observable<AxiosResponse<any[]>> {
    const leaders = this.httpService
      .get(
        `${this.sportsNet}?league=nhl&season=${season}&season_type=${seasonType}`
      )
      .pipe(map((response) => response.data));

    return leaders;
  }

  getNhlRookieSummary(
    season: string,
    player: string,
    statsType: string,
    sort: string,
    start: string,
    pageSize: string
  ): Observable<AxiosResponse<any[]>> {
    const leaders = this.httpService
      .get(
        `${this.nhlComSummary}/${player}/summary?isAggregate=false&isGame=false&sort=%5B%7B%22property%22:%22${statsType}%22,%22direction%22:%22${sort}%22%7D%5D&start=${start}&limit=${pageSize}&cayenneExp=gameTypeId=2%20and%20isRookie=%221%22%20and%20seasonId%3C=${season}%20and%20seasonId%3E=${season}`
      )
      .pipe(map((response) => response.data));

    return leaders;
  }
}
