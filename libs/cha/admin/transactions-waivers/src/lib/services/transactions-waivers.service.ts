import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

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
}
