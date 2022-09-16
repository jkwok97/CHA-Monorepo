import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HistoryPlayersService {
  constructor(
    private _http: HttpClient,
    @Inject('apiUrl') private apiUrl: string
  ) {}

  getAllTimePlayersStatsBySeasonType(seasonType: string) {
    return this._http
      .get(`${this.apiUrl}/player-stats/history/season/${seasonType}`)
      .pipe(map((result: any) => result));
  }

  getAllTimePlayersStatsBySeasonTypeSummed(seasonType: string) {
    return this._http
      .get(`${this.apiUrl}/player-stats/history/all-time/${seasonType}`)
      .pipe(map((result: any) => result));
  }
}
