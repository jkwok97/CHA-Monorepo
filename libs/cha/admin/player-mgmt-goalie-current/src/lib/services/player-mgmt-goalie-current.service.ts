import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { StatGoalieAllDto } from '@cha/shared/entities';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PlayerMgmtGoalieCurrentService {
  constructor(
    private _http: HttpClient,
    @Inject('apiUrl') private apiUrl: string
  ) {}

  getGoalies(season: string) {
    return this._http
      .get(`${this.apiUrl}/goalie-stats/${season}`)
      .pipe(map((result: any) => result));
  }

  editGoalie(
    goalie: StatGoalieAllDto,
    season: string
  ): Observable<StatGoalieAllDto> {
    return this._http
      .put(
        `${this.apiUrl}/goalie-stats/${season}/${goalie.player_id.id}`,
        goalie
      )
      .pipe(map((result: any) => result));
  }

  deleteGoalie(goalieId: number, season: string): Observable<StatGoalieAllDto> {
    return this._http
      .delete(`${this.apiUrl}/goalie-stats/${season}/${goalieId}`)
      .pipe(map((result: any) => result));
  }
}
