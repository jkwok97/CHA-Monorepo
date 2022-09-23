import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { of } from 'rxjs';
import { TeamDto } from '@cha/shared/entities';

@Injectable({
  providedIn: 'root',
})
export class TeamsSummaryService {
  constructor(
    private _http: HttpClient,
    @Inject('apiUrl') private apiUrl: string
  ) {}

  getUserByTeamId(teamId: number) {
    if (teamId) {
      return this._http
        .get(`${this.apiUrl}/teams/${teamId}`)
        .pipe(map((result: any) => result));
    } else {
      return of(null);
    }
  }

  getTeamByUserId(userId: number) {
    if (userId) {
      return this._http
        .get(`${this.apiUrl}/teams/user/${userId}`)
        .pipe(
          map(
            (result: any) => result.filter((item: TeamDto) => item.isactive)[0]
          )
        );
    } else {
      return of(null);
    }
  }

  getUserTeamStatsBySeasonType(userId: number | undefined, seasonType: string) {
    if (userId) {
      return this._http
        .get(`${this.apiUrl}/team-stats/user/${userId}/history/${seasonType}`)
        .pipe(map((result: any) => result));
    } else {
      return of([]);
    }
  }

  getUserTeamRecordBySeasonAndSeasonType(
    teamId: number,
    season: string,
    seasonType: string
  ) {
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
