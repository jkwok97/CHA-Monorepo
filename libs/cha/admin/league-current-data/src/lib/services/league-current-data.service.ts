import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { LeagueDataDto } from '@cha/shared/entities';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LeagueCurrentDataService {
  constructor(
    private _http: HttpClient,
    @Inject('apiUrl') private apiUrl: string
  ) {}

  getData(): Observable<LeagueDataDto> {
    return this._http
      .get(`${this.apiUrl}/league/current-data`)
      .pipe(map((result: any) => result));
  }

  
}
