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
      .get(`${this.apiUrl}/league/current-data`)
      .pipe(map((result: any) => result));
  }

  getTeams(): Observable<TeamDto[]> {
    return this._http
      .get(`${this.apiUrl}/teams/current`)
      .pipe(map((result: any) => result));
  }
}