import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TeamsSummaryService {
  constructor(
    private _http: HttpClient,
    @Inject('apiUrl') private apiUrl: string
  ) {}

  getUserIdByTeamId(teamId: number) {
    if (teamId) {
      return this._http
        .get(`${this.apiUrl}/teams/${teamId}`)
        .pipe(map((result: any) => result.users_id));
    } else {
      return of(null);
    }
  }

  getUserTeamStatsBySeasonType(userId: number | undefined, seasonType: string) {
    if (userId) {
      return this._http
        .get(`${this.apiUrl}/team-stats/user/${userId}/history/${seasonType}`)
        .pipe(map((result: any) => result));
    } else {
      return of([]);
    }
  }
}
