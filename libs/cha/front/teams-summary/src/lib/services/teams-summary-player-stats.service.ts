import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TeamsSummaryPlayerStatsService {
  constructor(
    private _http: HttpClient,
    @Inject('apiUrl') private apiUrl: string
  ) {}

  getUserPlayersStatsBySeasonType(
    userId: number | undefined,
    seasonType: string
  ) {
    if (userId) {
      return this._http
        .get(`${this.apiUrl}/player-stats/user/${userId}/history/${seasonType}`)
        .pipe(map((result: any) => result));
    } else {
      return of([]);
    }
  }

  getUserPlayersAllTimeStatsBySeasonType(
    userId: number | undefined,
    seasonType: string
  ) {
    if (userId) {
      return this._http
        .get(
          `${this.apiUrl}/player-stats/user/${userId}/history/all/${seasonType}`
        )
        .pipe(map((result: any) => result));
    } else {
      return of([]);
    }
  }
}
