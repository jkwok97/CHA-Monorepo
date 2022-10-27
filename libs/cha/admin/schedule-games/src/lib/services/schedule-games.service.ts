import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ScheduleAllDto } from '@cha/shared/entities';

@Injectable({
  providedIn: 'root',
})
export class ScheduleGamesService {
  constructor(
    private _http: HttpClient,
    @Inject('apiUrl') private apiUrl: string
  ) {}

  getSchedule(season: string) {
    return this._http
      .get(`${this.apiUrl}/schedule/${season}`)
      .pipe(map((result: any) => result));
  }

  saveGame(game: ScheduleAllDto) {
    return this._http
      .put(`${this.apiUrl}/schedule/${game.id}`, game)
      .pipe(map((result: any) => result));
  }
}
