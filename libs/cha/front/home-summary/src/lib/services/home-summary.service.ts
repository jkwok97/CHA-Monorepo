import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HomeSummaryService {
  constructor(
    private _http: HttpClient,
    @Inject('apiUrl') private apiUrl: string
  ) {}

  getUserTeamRecordBySeasonAndSeasonType(
    teamId: number,
    season: string,
    seasonType: string
  ) {
    console.log(season, seasonType);
    return this._http
      .get(
        `${this.apiUrl}/team-stats/user/${teamId}/record/${season}/${seasonType}`
      )
      .pipe(map((result: any) => result));
  }

  getUserTeamPlayersSalariesBySeason(
    teamName: string,
    season: string,
    ratingsSeason: string
  ) {
    return this._http
      .get(
        `${this.apiUrl}/salaries/user/${teamName}/players/${season}/${ratingsSeason}`
      )
      .pipe(map((result: any) => result));
  }

  getUserTeamGoaliesSalariesBySeason(
    teamName: string,
    season: string,
    ratingsSeason: string
  ) {
    return this._http
      .get(
        `${this.apiUrl}/salaries/user/${teamName}/goalies/${season}/${ratingsSeason}`
      )
      .pipe(map((result: any) => result));
  }

  getCHACurrentPlayerStatsByPlayerId(
    season: string,
    seasonType: string,
    playerId: number
  ) {
    return this._http
      .get(
        `${this.apiUrl}/player-stats/current/${season}/${seasonType}/${playerId}`
      )
      .pipe(map((result: any) => result));
  }

  getCHACurrentGoalieStatsByPlayerId(
    season: string,
    seasonType: string,
    playerId: number
  ) {
    return this._http
      .get(
        `${this.apiUrl}/goalie-stats/current/${season}/${seasonType}/${playerId}`
      )
      .pipe(map((result: any) => result));
  }

  getNHLCurrentStatsByPlayerId(playerId: number, season: string) {
    return this._http
      .get(`${this.apiUrl}/nhl/player/stats/${playerId}/${season}`)
      .pipe(map((result: any) => result));
  }
}
