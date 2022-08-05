import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { TeamDto } from '@cha/shared/entities';

@Injectable()
export class TeamInfoService {
  constructor(
    private _http: HttpClient,
    @Inject('apiUrl') private apiUrl: string
  ) {}

  getTeams(): Observable<TeamDto[]> {
    return this._http
      .get(`${this.apiUrl}/v2/teams`)
      .pipe(map((result: any) => result['result']));
  }

  getUserTeams(id: number): Observable<TeamDto[]> {
    return this._http
      .get(`${this.apiUrl}/v2/teams/user/${id}`)
      .pipe(map((result: any) => result['result']));
  }

  getUserByTeamName(teamName: string): Observable<number> {
    return this._http
      .get(`${this.apiUrl}/v2/teams/${teamName}/user/`)
      .pipe(map((result: any) => result['result']));
  }

  getAllCurrentTeams(bool: boolean): Observable<TeamDto[]> {
    const options = {
      params: new HttpParams().set('isactive', bool.toString()),
    };

    return this._http
      .get(`${this.apiUrl}/v2/teams/current/all`, options)
      .pipe(map((result: any) => result['result']));
  }

  getTeambyId(id: number): Observable<TeamDto> {
    return this._http
      .get(`${this.apiUrl}/v2/teams/${id}`)
      .pipe(map((result: any) => result['result'][0]));
  }

  getTeamsByActive(bool: string): Observable<TeamDto[]> {
    const options = { params: new HttpParams().set('isactive', bool) };

    return this._http
      .get(`${this.apiUrl}/v2/teams/active`, options)
      .pipe(map((result: any) => result['result']));
  }
}
