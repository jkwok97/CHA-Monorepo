import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { TeamCreateDto, TeamDto } from '@cha/shared/entities';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LeagueTeamsService {
  constructor(
    private _http: HttpClient,
    @Inject('apiUrl') private apiUrl: string
  ) {}

  getTeams() {
    return this._http
      .get(`${this.apiUrl}/teams`)
      .pipe(map((result: any) => result));
  }

  addTeam(user: TeamCreateDto): Observable<TeamDto> {
    const body = user;
    return this._http
      .post(`${this.apiUrl}/teams/add`, body)
      .pipe(map((result: any) => result));
  }

  editTeam(team: TeamDto): Observable<TeamDto> {
    return this._http
      .put(`${this.apiUrl}/teams/${team.id}`, team)
      .pipe(map((result: any) => result));
  }

  deleteTeam(teamId: number): Observable<TeamDto> {
    return this._http
      .delete(`${this.apiUrl}/teams/delete/${teamId}`)
      .pipe(map((result: any) => result));
  }

  getUsers() {
    return this._http
      .get(`${this.apiUrl}/users`)
      .pipe(map((result: any) => result));
  }
}
