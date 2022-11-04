import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class GamesAllService {
  constructor(
    private _http: HttpClient,
    @Inject('apiUrl') private apiUrl: string,
    @Inject('fileUrl') private fileUrl: string
  ) {}

  getSchedule(season: string) {
    return this._http
      .get(`${this.apiUrl}/schedule/${season}`)
      .pipe(map((result: any) => result));
  }

  getBoxScore(gameId: number, season: string) {
    return this._http
      .get(`${this.fileUrl}/${season}/${gameId}.txt`, { responseType: 'text' })
      .pipe(map((result: any) => result));
  }
}
