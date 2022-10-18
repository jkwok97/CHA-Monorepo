import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { WaiversDto } from '@cha/shared/entities';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TransactionsWaiversService {
  constructor(
    private _http: HttpClient,
    @Inject('apiUrl') private apiUrl: string
  ) {}

  getWaivers() {
    return this._http
      .get(`${this.apiUrl}/waivers/all`)
      .pipe(map((result: any) => result));
  }

  updateWaiver(team: WaiversDto): Observable<WaiversDto> {
    return this._http
      .put(`${this.apiUrl}/waivers/${team.id}`, team)
      .pipe(map((result: any) => result));
  }
}
