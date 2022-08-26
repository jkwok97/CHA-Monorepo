import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { statTeamDto } from '@cha/shared/entities';

@Injectable()
export class StatsTeamLeadersService {
  constructor(
    private _http: HttpClient,
    @Inject('apiUrl') private apiUrl: string
  ) {}

  getTeamStatsBySeasonByType(
    season: string,
    seasonType: string
  ): Observable<statTeamDto[]> {
    return this._http
      .get(`${this.apiUrl}/team-stats/${season}/${seasonType}`)
      .pipe(map((result: any) => result));
  }
}
