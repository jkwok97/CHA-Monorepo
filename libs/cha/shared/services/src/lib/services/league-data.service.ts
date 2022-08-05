import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { LeagueDataDto, TeamDto } from '@cha/shared/entities';

@Injectable()
export class LeagueDataService {
  constructor(
    private _http: HttpClient,
    @Inject('apiUrl') private apiUrl: string
  ) {}

  getLeagueData(): Observable<LeagueDataDto> {
    return this._http
      .get(`${this.apiUrl}/v2/league/current-data`)
      .pipe(map((result: any) => result['result'][0]));
  }

  getTeams(): Observable<TeamDto[]> {
    return this._http
      .get(`${this.apiUrl}/v2/teams`)
      .pipe(map((result: any) => result['result']));
  }
}
