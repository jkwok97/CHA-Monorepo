import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class StatsPlayersLeadersService {
  constructor(
    private _http: HttpClient,
    @Inject('apiUrl') private apiUrl: string
  ) {}

  getAllPlayerLeaders(
    season: string,
    seasonType: string,
    minGamesStats: number
  ) {
    return this._http
      .get(
        `${this.apiUrl}/player-stats/leaders/${season}/${seasonType}/${minGamesStats}`
      )
      .pipe(map((result: any) => result));
  }
}
