import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ConferenceCreateDto, ConferenceDto } from '@cha/shared/entities';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LeagueConferencesService {
  constructor(
    private _http: HttpClient,
    @Inject('apiUrl') private apiUrl: string
  ) {}

  getConferences() {
    return this._http
      .get(`${this.apiUrl}/conferences`)
      .pipe(map((result: any) => result));
  }

  addConferences(conference: ConferenceCreateDto): Observable<ConferenceDto> {
    const body = conference;
    return this._http
      .post(`${this.apiUrl}/conferences/add`, body)
      .pipe(map((result: any) => result));
  }

  editConferences(conference: ConferenceDto): Observable<ConferenceDto> {
    return this._http
      .put(`${this.apiUrl}/conferences/${conference.id}`, conference)
      .pipe(map((result: any) => result));
  }

  deleteConferences(conferenceId: number): Observable<ConferenceDto> {
    return this._http
      .delete(`${this.apiUrl}/conferences/${conferenceId}`)
      .pipe(map((result: any) => result));
  }
}
