import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class GamesCurrentService {
  constructor(
    private _http: HttpClient,
    @Inject('apiUrl') private apiUrl: string
  ) {}

  getGames(season: string, gameDay: number) {
    return this._http
      .get(`${this.apiUrl}/schedule/next/${season}/${gameDay}`)
      .pipe(map((result: any) => result));
  }
}
