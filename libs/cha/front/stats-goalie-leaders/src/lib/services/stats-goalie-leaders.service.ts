import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { StatGoalieLeadersDto } from '@cha/shared/entities';

@Injectable({
  providedIn: 'root',
})
export class StatsGoalieLeadersService {
  constructor(
    private _http: HttpClient,
    @Inject('apiUrl') private apiUrl: string
  ) {}

  getAllGoalieLeaders(
    season: string,
    seasonType: string,
    minGames: string
  ): Observable<StatGoalieLeadersDto> {
    return this._http
      .get(
        `${this.apiUrl}/goalies-stats/leaders/${season}/${seasonType}/${minGames}`
      )
      .pipe(map((result: any) => result));
  }
}
