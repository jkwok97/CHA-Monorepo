import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(
    private _http: HttpClient,
    @Inject('apiUrl') private apiUrl: string
  ) {}

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

  getTransactions(season: string) {
    return this._http
      .get(`${this.apiUrl}/transactions/${season}`)
      .pipe(map((result: any) => result));
  }
}
