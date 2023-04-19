import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class GamesPlayoffsService {
  constructor(
    private _http: HttpClient,
    @Inject('apiUrl') private apiUrl: string,
    @Inject('fileUrl') private fileUrl: string
  ) {}

  getPlayoffStandings(season: string, seasonType: string) {
    return this._http
      .get(`${this.apiUrl}/team-stats/playoffs/${season}/${seasonType}`)
      .pipe(map((result: any) => result));
  }

  getBoxScore(gameId: string, season: string) {
    return this._http
      .get(`${this.fileUrl}/${season}/${gameId}.txt`, { responseType: 'text' })
      .pipe(map((result: any) => result));
  }
}
